$(function (){

	var fecha_hoy = new Date(); 
	var fecha_mañana = new Date(); 
	$('#dat_fecha_monta').datepicker({
	    format: "dd/mm/yyyy",
	    todayBtn: true,
	    clearBtn: false,
	    language: "es",
	    calendarWeeks: true,
	    autoclose: true,
	    todayHighlight: true,
	    endDate:fecha_hoy
	});
		$('#dat_fecha_celo').datepicker({
	    format: "dd/mm/yyyy",
	    todayBtn: true,
	    clearBtn: false,
	    language: "es",
	    calendarWeeks: true,
	    autoclose: true,
	    todayHighlight: true,
	    endDate:fecha_hoy
	});
	$('#dat_fecha_parto').datepicker({
	    format: "dd/mm/yyyy",
	    todayBtn: true,
	    clearBtn: false,
	    language: "es",
	    calendarWeeks: true,
	    autoclose: true,
	    todayHighlight: true,
	   // endDate:fecha_hoy
	    startDate:fecha_mañana	});


	cargar_datos();
	// $(".select2").select2();
	$(document).on("blur",".validar_campos_unicos",function(e){
		e.preventDefault();
		if ($(this).val()=="") {
			return;
		}
		console.log("validar_campo",$(this).data('quien_es'));
		mostrar_mensaje("Espere","Validando "+$(this).data('quien_es'));
		var datos = {"validar_campos":"si_por_campo","campo":$(this).val(),"tipo":$(this).data('quien_es')};

		console.log("datos: ",datos);
		$.ajax({
	        dataType: "json",
	        method: "POST",
	        url:'../Controladores/Json_prenez.php',
	        data : datos,
	    }).done(function(json) {
	    	console.log("retorno de validacion",json);
	    	if (json[0]=="Exito") {
	    		 
	    	}
	    	console.log("El envio: ",json);
	    }).always(function(){
	    	Swal.close();
	    });



	});

	
	$(document).on("click",".btn_cerrar_class",function(e){
		e.preventDefault();
		$("#formulario_registroP").trigger('reset');
		$('#md_registrar_prenez').modal('hide');


	});
	$(document).on("click",".btn_eliminar",function(e){
		e.preventDefault();
		var int_id_preñez = $(this).attr("data-int_id_preñez");
		var datos = {"eliminar_persona":"si_eliminala","int_id_preñez":int_id_preñez}
		$.ajax({
	        dataType: "json",
	        method: "POST",
	        url:'../Controladores/Json_prenez.php',
	        data : datos,
	    }).done(function(json) {
	    	cargar_datos();

	    });
	});
	$(document).on("click",".btn_editar",function(e){

		e.preventDefault(); 
		mostrar_mensaje("Consultando datos");
		var int_id_preñez = $(this).attr("data-int_id_preñez");
		console.log("El id es: ",int_id_preñez);
		var datos = {"consultar_info":"si_condui_especifico","int_id_preñez":int_id_preñez}
		$.ajax({
	        dataType: "json",
	        method: "POST",
	        url:'../Controladores/Json_prenez.php',
	        data : datos,
	    }).done(function(json) {
	    	console.log("EL consultar especifico",json);
	    	if (json[0]=="Exito") {
	    		var fecHA_string = json[2]['dat_fecha_celo'];
				var porciones = fecHA_string.split('-');
				var fecha = porciones[2]+"/"+porciones[1]+"/"+porciones[0]
					var fecHA1_string = json[2]['dat_fecha_monta'];
				var porciones = fecHA1_string.split('-');
				var fecha1 = porciones[2]+"/"+porciones[1]+"/"+porciones[0]
			    var fecHA2_string = json[2]['dat_fecha_parto'];
				var porciones = fecHA2_string.split('-');
				var fecha2 = porciones[2]+"/"+porciones[1]+"/"+porciones[0]

	    		$('#llave_persona').val(int_id_preñez);
	    		$('#ingreso_datos').val("si_actualizalo");
	    	    $('#int_bovino_fk').val(json[2]['int_bovino_fk']);
	    		$('#dat_fecha_celo').val(fecha);
	    		$('#dat_fecha_monta').val(fecha1);
	    		$('#dat_fecha_parto').val(fecha2);
	    

	    		$('#md_registrar_prenez').modal('show');
	    	}
	    	 
	    }).fail(function(){

	    }).always(function(){
	    	Swal.close();
	    });


	});
	
    $('#formulario_registroP').validate({
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

	$(document).on("submit","#formulario_registroP",function(e){
		e.preventDefault();
		var datos = $("#formulario_registroP").serialize();
			var Toast = Swal.mixin({
	        toast: true,
	        position: 'top-end',
	        showConfirmButton: false,
	        timer: 7000
    	});
			if ($("#int_bovino_fk").val() == "Seleccione"){
 			Toast.fire({
		        icon: 'info',
		        title: 'Debe elegir el tipo de bovino'
		    });
			return;
 		}
		console.log("Imprimiendo datos: ",datos);
	//	mostrar_mensaje("Almacenando información","Por favor no recargue la página");
		$.ajax({
            dataType: "json",
            method: "POST",
            url:'../Controladores/Json_prenez.php',
            data : datos,
        }).done(function(json) {
        	console.log("EL GUARDAR",json);
        	
        	if (json[0] == "Exito") {
        		$('#md_registrar_prenez').trigger('reset');
        	$('#md_registrar_prenez').modal('hide');
        	}
        	cargar_datos();
        	
        	
        }).fail(function(){

        }).always(function(){

        });


	});

});



function cargar_datos(){
	mostrar_mensaje("Consultando datos");
	var datos = {"consultar_info":"si_consultala"}
	$.ajax({
        dataType: "json",
        method: "POST",
        url:'../Controladores/Json_prenez.php',
        data : datos,
    }).done(function(json) {
    	console.log("EL consultar",json);
    	$("#datos_tabla").empty().html(json[1]);
    //	$('#tabla_preñez').DataTable();
    	$('#md_registrar_prenez').modal('hide');


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

