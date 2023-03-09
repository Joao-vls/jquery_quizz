let param = new URLSearchParams(window.location.search);
let usuario = JSON.parse(decodeURIComponent(param).slice(0,-1));

let questions;

//embaralha questao
function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}
$.ajax({
	method: "GET",
	url: "http://localhost:3000/answers/",
	dataType:"json",
	success: function(data){
		questions=shuffleArray(data);
		getQuestion(questions[questions.length-1]);
		//console.log(questions);
	},
});

// $.ajax({
// 	method: "GET",
// 	url: "http://localhost:3000/users/"+usuario.id,
// 	dataType:"json",
// 	success: function(data){
// 		que=data;
// 		console.log(questions);
// 	},
// });

//Cria Div pergunta
function getQuestion (ques){
	console.log(ques);
	let form=$(`<form>
		<p>`+ques.question+`</p>

		<label for="alternative-a">
		<div class="alternative">
		<input type="radio" name="alternative" id="alternative-a" value=`+ques.alternative[0]+`>`+ques.alternative[0]+`
		</div>
		</label>

		<label for="alternative-b">
		<div class="alternative">
		<input type="radio" name="alternative" id="alternative-b" value=`+ques.alternative[1]+`>`+ques.alternative[1]+`
		</div>
		</label>

		<label for="alternative-c">
		<div class="alternative">
		<input type="radio" name="alternative" id="alternative-c" value=`+ques.alternative[2]+`>`+ques.alternative[2]+`
		</div>
		</label>

		<label for="alternative-d">
		<div class="alternative">
		<input type="radio" name="alternative" id="alternative-d" value=`+ques.alternative[3]+`>`+ques.alternative[3]+`
		</div>
		</label>
		</form>
		`);
		$(".question .button").before(form);
	}
	//Confere resposta se correta add score

	$("#next_question").click(()=>{
		var optionsCheck = $('form input[name="alternative"]')?.filter(':checked')?.val();
		if (optionsCheck?.length) {
			console.log(optionsCheck);
			if (questions[questions.length-1].correct_alternative==optionsCheck) {
				//questions[questions.length-1].id;
				usuario.score+=1;
			}
			$(".question form").remove();
			questions.pop();
			if (questions.length) {
				getQuestion(questions[questions.length-1]);
			}else {
				$.ajax({
					method: "PATCH",
					contentType: "application/json",
					data: JSON.stringify(usuario),
					url: "http://localhost:3000/users/"+usuario.id,
					success: function(data){
						window.location.href="../view/score.html?"+encodeURIComponent(usuario.id);
					}
				});
			}
		}


	});
