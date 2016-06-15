
$(document).ready(function()
 {

 	$("").submit(function() {

 		$.post("url",{codigo:"",nombre:"",apellido:"",cedula:"",cargo:"",supervidor:"",sistema:"",oracle:"",correo:"",acceso:"",password:""})
 		.done(function(new_user){
 			let new_user =
			{
				"created":"true"
			}
			if (new_user.created == "true") 
			{
			    $("#success").css('visibility', 'visible');
			}
			else
			{
			    $("#fail").css('visibility', 'visible');
			}
 		});


 		.fail(function () {
 			// body...
 		});
 		
 	});


});