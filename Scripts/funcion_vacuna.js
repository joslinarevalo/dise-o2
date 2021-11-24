$(function (){
	//$('#addvacuna').parsley();
	
	cargar_datos();
	$(document).on("click",".btn_cerrar_class",function(e){
		e.preventDefault();
		$("#addvacuna").trigger('reset');
		$('#modalAddvacuna').modal('hide');


	});
	var fecha_hoy = new Date(); 
	var fecha_mañana = new Date(); 
	$('#dat_fecha_aplicacion').datepicker({
	    format: "dd/mm/yyyy",
	    todayBtn: true,
	    clearBtn: false,
	    language: "es",
	    calendarWeeks: true,
	    autoclose: true,
	    todayHighlight: true,
	    endDate:fecha_hoy
	});

	$(document).on("click",".btn_eliminar",function(e){
		e.preventDefault();
		var id_vehiculo = $(this).attr("data-int_id_control_vac");
		var datos = {"eliminar_persona":"si_eliminala","int_id_control_vac":int_id_control_vac}
		$.ajax({
	        dataType: "json",
	        method: "POST",
	        url:'vacuna_controlador_Json.php',
	        data : datos,
	    }).done(function(json) {
	    	cargar_datos();

	    });
	});
	$(document).on("click",".btn_editar",function(e){

		e.preventDefault(); 
	//	mostrar_mensaje("Consultando datos");
		var int_id_control_vac = $(this).attr("data-int_id_control_vac");
		console.log("El id es: ",int_id_control_vac);
		var datos = {"consultar_info":"si_condui_especifico","int_id_control_vac":int_id_control_vac}
		$.ajax({
	        dataType: "json",
	        method: "POST",
	        url:'../Controladores/vacuna_controlador_Json.php',
	        data : datos,
	    }).done(function(json) {
	    	console.log("EL consultar especifico",json);
	    	if (json[0]=="Exito") {
	    		var fecHA_string = json[2]['dat_fecha_aplicacion'];
				var porciones = fecHA_string.split('-');
	    		
	    		$('#llave_vacuna').val(int_id_control_vac);
	    		$('#ingreso_datos').val("si_actualizalo");
	    		$('#id_exped_aplicado').val(json[2]['id_exped_aplicado']);
	    		$('#dat_fecha_aplicacion').val(fecHA_string);
	    		$('#vacuna').val(json[2]['nva_vacuna_aplicada']);

	    		$('#modalAddvacuna').modal('show');
	    	}
	    	 
	    }).fail(function(){

	    }).always(function(){
	    	Swal.close();
	    });


	});
    $('#addvacuna').validate({
	    rules: {	     
	    },
	    errorElement: 'span',
	    errorPlacement: function (error, element) {
	      error.addClass('invalid-feedback');
	      element.closest('.input-group').append(error);
	    },
	    highlight: function (element, errorClass, validClass) {
	      $(element).addClass('is-invalid');
	    },
	    unhighlight: function (element, errorClass, validClass) {
	      $(element).removeClass('is-invalid');
	    }
	});


	$(document).on("submit","#addvacuna",function(e){
		e.preventDefault();
		var datos = $("#addvacuna").serialize();
			var Toast = Swal.mixin({
	        toast: true,
	        position: 'top-end',
	        showConfirmButton: false,
	        timer: 7000
    	});
			if ($("#id_exped_aplicado").val() == "Seleccione"){
 			Toast.fire({
		        icon: 'info',
		        title: 'Debe elegir el  bovino'
		    });
			return;
 		}
 			if ($("#vacuna").val() == "Seleccione"){
 			Toast.fire({
		        icon: 'info',
		        title: 'Debe elegir la vacuna'
		    });
			return;
 		}
		console.log("Imprimiendo datos: ",datos);
		$.ajax({
            dataType: "json",
            method: "POST",
            url:'../Controladores/vacuna_controlador_Json.php',
            data : datos,
        }).done(function(json) {
        	console.log("EL GUARDAR",json);
        	$('#modalAddvacuna').modal('hide');
        	$("#addvacuna").trigger('reset');
        	cargar_datos();
        	
        }).fail(function(){

        }).always(function(){

        });


	});
});

function cargar_datos(){
	//mostrar_mensaje("Consultando datos");
	var datos = {"consultar_info":"si_consultala"}
	$.ajax({
        dataType: "json",
        method: "POST",
        url:'../Controladores/vacuna_controlador_Json.php',
        data : datos,
    }).done(function(json) {
    	console.log("EL consultar",json);
    	$("#tabla_vacuna").empty().html(json[1]);
    	//$('#tabla_vacuna').DataTable();
    	$('#modalAddvacuna').modal('hide');
    }).fail(function(){

    }).always(function(){
    	Swal.close();
    });
}
function mostrar_mensaje(titulo,mensaje=""){
	Swal.fire({
	  title: titulo,
	  html: mensaje,
	  allowOutsideClick: false,
	  timerProgressBar: true,
	  didOpen: () => {
	    Swal.showLoading()
	     
	  },
	  willClose: () => {
	     
	  }
	}).then((result) => {
	  
	   
	})
}


