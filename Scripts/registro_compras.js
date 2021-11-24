$(function (){	

	cargar_taba_compras();

	
	$(document).on("click",".btn_ver",function(e){ 
        e.preventDefault();
        var elemento = $(this);
        var data_idcom = elemento.attr('data-idcompra');
        console.log("Si se ejecuta",data_idcom);

        var datos = {"ver_compra":"si_esta","idcompra":data_idcom};
        console.log("los datos enviados: ",datos);
        //return;
        $.ajax({
            dataType: "json",
            method: "POST",
            url:'../Controladores/registro_compras_controlador.php',
            data : datos,
        }).done(function(json) {
        
	        if (json[0]=="Exito") {

	        	var fecha_compra = formatearDatetime(json[4]['dat_fecha_compra']);
	        	var fecha_sistema = formatearDatetime(json[4]['dat_fecha_sistema']);


	    		$('#proveedor').empty().html(json[4]['nva_nom_proveedor']);
	    		$('#tipo_doc').empty().html(json[4]['nva_tipo_documento']);
	    		$('#num_doc').empty().html(json[4]['nva_numero_documento']);
	    		$('#descrip').empty().html(json[4]['txt_descrip_compra']);
	    		$('#fecha_compra').empty().html(fecha_compra);
	    		$('#fecha_sistema').empty().html(fecha_sistema);
	    		$('#total_compra').val('$'+json[4]['dou_total_compra']);
	    		$('#iva_compra').val('$'+json[4]['dou_iva_aplicado']);
	    		$('#subtotal_compra').val('$'+json[6]);



	         	$("#tb_Detalle_Insumos_Ver").empty().html(json[2]);
	         	$('#md_ver_compra').modal('show');
	        }   
         
        }); 
    });
     
});

function formatearDatetime(datetime){
	//divido la feha de la hora
	var fecha_string = datetime;
	var separacion = fecha_string.split(' ');
	var fecha = separacion[0];
	var hora = separacion[1];
	var fecha_formateada = "";

	//Formteo la fecha
	var porciones_fecha = fecha.split('-');
	var fecha1 = porciones_fecha[2]+"-"+porciones_fecha[1]+"-"+porciones_fecha[0];

	//concateno la fecha formteada con la hora y un espacio
	fecha_formateada = fecha1+" "+hora;
	return fecha_formateada;

}


function cargar_taba_compras(){
	//mostrar_mensaje("Consultando datos");
	var datos = {"consultar_info":"si_consultala"}
	$.ajax({
        dataType: "json",
        method: "POST",
        url:'../Controladores/registro_compras_controlador.php',
        data : datos,
    }).done(function(json) {
    	console.log("EL consultar",json);
    	$("#tabla_registro_compras").empty().html(json[1]);
    	$('#example1').DataTable();    	
    }).fail(function(){

    }).always(function(){
    	//Swal.close();
    });
}