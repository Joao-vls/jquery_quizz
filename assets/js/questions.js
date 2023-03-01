let param = new URLSearchParams(window.location.search);
let usuario = JSON.parse(decodeURIComponent(param).slice(0,-1));

let questions;
$.ajax({
	method: "GET",
	url: "http://localhost:3000/answers/",
	dataType:"json",
	success: function(data){
		questions=data.reverse();
		getQuestion();
		console.log(questions);
	},
});



//Cria Div pergunta
function getQuestion (){

}
//Confere resposta se correta add score

$("#next_question").click(()=>{
	var optionsCheck = $('form input[name="alternative"]')?.filter(':checked')?.val();
	if (optionsCheck?.length) {
		console.log(optionsCheck);
		if (questions.length) {
			if (questions[questions.length-1].correct_alternative==optionsCheck) {
				questions[questions.length-1].id;
				usuario.score+=1
			}
			questions.pop();
			console.log(questions);
		}
	}
	if (!questions.length){
		$.ajax({
			method: "PATCH",
			contentType: "application/json",
			data: JSON.stringify(usuario),
			url: "http://localhost:3000/users/"+usuario.id,
			success: function(data){
				console.log(data);
			}
		});
	}

});
