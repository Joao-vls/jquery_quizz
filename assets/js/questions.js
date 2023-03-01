
var queryString = window.location.search;
// Cria um objeto URLSearchParams com os parâmetros
var parametros = new URLSearchParams(queryString);
// Obtém o valor do parâmetro 'id'
var idu = parametros.get('id');
console.log(idu);
let questions;

//Chama nova pergunta e cria Div
function getQuestion (idq){
	try{
		$.ajax({
			method: "GET",
			url: "http://localhost:3000/answers/"+idq,
			dataType:"json",
			success: function(data){
				questions=data;
				//console.log(questions.id);
			},
		});
	}catch(error){
		console.error(error);
	}
}

//Confere resposta se correta add score
function postScore (optionsCheck,idq){
	$.ajax({
		method: "GET",
		url: "http://localhost:3000/answers/"+idq,
		dataType:"json",
		success: function(data){
			if (data.correct_alternative==optionsCheck) {
				$.ajax({
					method: "GET",
					url: "http://localhost:3000/users/"+idu,
					dataType:"json",
					success: function(data){
						console.log(data);
						let dt={
							score:parseInt(data.score)+1
						}
						$.ajax({
							method: "PATCH",
							contentType: "application/json",
							data: JSON.stringify(dt),
							url: "http://localhost:3000/users/"+idu,
							success: function(data){
								console.log(data);
							}
						});
					}
				});
			}
			//chma outra pergunta
			getQuestion(idq+1);
		}
	});
}
getQuestion(0);
$("#next_question").click(()=>{
	var optionsCheck = $('form input[name="alternative"]')?.filter(':checked')?.val();
	if (optionsCheck?.length) {
		console.log(optionsCheck);
		postScore(optionsCheck,questions.id);
	}else {

	}
});
