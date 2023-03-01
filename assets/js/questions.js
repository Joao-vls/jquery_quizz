
var queryString = window.location.search;
// Cria um objeto URLSearchParams com os parâmetros
var parametros = new URLSearchParams(queryString);
// Obtém o valor do parâmetro 'id'
var idu = parametros.get('id');
console.log(idu);
let questions;

//Chama nova pergunta e cria Div
function getQuestion (idq){
	$.ajax({
		method: "GET",
		url: "https://jquery-quizz-production.up.railway.app/answers?id="+idq,
		dataType:"json",
		success: function(data){
			questions=data[0];
			//console.log(questions.id);
		}
	});
}

//Confere resposta se correta add score
function postScore (optionsCheck,idq){
	$.ajax({
		method: "GET",
		url: "https://jquery-quizz-production.up.railway.app/answers?id="+idq,
		dataType:"json",
		success: function(data){
			if (data[0].correct_alternative==optionsCheck) {
				$.ajax({
					method: "GET",
					url: "https://jquery-quizz-production.up.railway.app/users?id="+idu,
					dataType:"json",
					success: function(data){
						console.log(data);
						let dt={
							score:data[0].score+1
						}
						$.ajax({
							method: "PUT",
							contentType: "application/json",
							data: JSON.stringify(dt),
							url: "https://jquery-quizz-production.up.railway.app/users?id="+idu,
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
