$(document).ready(function(){
	const $form= $("#suscribirForm");
	const $formGroup = $form.find(".form-group");
	const $formControl = $formGroup.find(".form-control");

	$form.submit(function(ev){
		ev.preventDefault();

		const error = Math.random() > 0.5;
		$formGroup.removeClass().addClass("form-group");
		$formControl.removeClass().addClass("form-control");

		$formGroup.find(".form-control-feedback").remove();
		var el;
		if(error){
			el = $("<div>", {html: "Ha ocurrido un error"});
			$formGroup.addClass("has-danger");
			$formControl.addClass("form-control-danger");
		} else{
			el = $("<div>", {html: "Te enviaremos todas la novedades"});
			$formGroup.addClass("has-success");
			$formControl.addClass("form-control-success");
		}
		el.addClass("form-control-feedback");
		$formGroup.append(el);
	}); 

	function mostrarModal(){
		if(!(JSON.parse(localStorage.noMostrarModal))){
			$("#modalOferta").modal();
		}
		

		$("#btnNoRegistrar").click(function (ev){
			localStorage.noMostrarModal = true;
		});
	}

	const $filtrosToggle = $("#filtrosToggle");
	$filtrosToggle.click(function(ev){
		ev.preventDefault();

		const $i = $filtrosToggle.find("i.fa");
		const isDown = $i.hasClass("fa-chevron-down");
		if(isDown){
			$i.removeClass("fa-chevron-down").addClass("fa-chevron-up");
		}else{
			$i.removeClass("fa-chevron-up").addClass("fa-chevron-down");
		}
	});

	$('.modal-footer button').click(function(){
		var button = $(this);

		if ( button.attr("data-dismiss") != "modal" ){
			var inputs = $('form input');
			var title = $('.modal-title');
			var progress = $('#myProgress');


			inputs.attr("disabled", "disabled");
			  button.hide();
			  progress.css("display", "block");
			var elem = document.getElementById("myBar");
			  var width = 1;
			  var id = setInterval(frame, 10);
			  function frame() {
			    if (width >= 100) {
			      clearInterval(id);
			      progress.css("display", "none");
			    } else {
			      width++;
			      elem.style.width = width + '%';
			    }
			  }
			  

			  /*
			progressBar.animate({width : "100%"}, 100);

			inputs.attr("disabled", "disabled");

			button.hide();

			progress.show();

			progressBar.animate({width : "100%"}, 100);

			progress.delay(1000)
					.fadeOut(600);
			*/

			button.text("Close")
					.removeClass("btn-primary")
					.addClass("btn-success")
    				.blur()
					.delay(1600)
					.fadeIn(function(){
						title.text("Log in is successful");
						button.attr("data-dismiss", "modal");
					});
		}
	});

	$('#myModal').on('hidden.bs.modal', function (e) {
		var inputs = $('form input');
		var title = $('.modal-title');
		var progressBar = $('.progress-bar');
		var button = $('.modal-footer button');

		inputs.removeAttr("disabled");

		title.text("Log in");

		progressBar.css({ "width" : "0%" });

		button.removeClass("btn-success")
				.addClass("btn-primary")
				.text("Ok")
				.removeAttr("data-dismiss");
                
	});
})

