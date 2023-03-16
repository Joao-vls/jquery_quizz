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
	 $('#number-of-question').text(10-(questions.length-1));
	let form=$(`<form>
		<p>`+ques.question+`</p>

		<label for="alternative-a">
		<div class="alternative">
		<input type="radio" name="alternative" id="alternative-a" >`+ques.alternatives[0]+`
		</div>
		</label>

		<label for="alternative-b">
		<div class="alternative">
		<input type="radio" name="alternative" id="alternative-b" >`+ques.alternatives[1]+`
		</div>
		</label>

		<label for="alternative-c">
		<div class="alternative">
		<input type="radio" name="alternative" id="alternative-c" >`+ques.alternatives[2]+`
		</div>
		</label>

		<label for="alternative-d">
		<div class="alternative">
		<input type="radio" name="alternative" id="alternative-d" >`+ques.alternatives[3]+`
		</div>
		</label>
		</form>
		`);
		$(".question .button").before(form);
		$(".content").effect( "slide", 430);
	}
	//Confere resposta se correta add score

	$("#next_question").click(()=>{
		var optionsCheck = $('form input[name="alternative"]')?.filter(':checked')?.parent()?.text()?.trim();
		//console.log($('form input[name="alternative"]')?.filter(':checked'));
		console.log(optionsCheck,questions[questions.length-1].alternatives[questions[questions.length-1].correct_alternative]);
		if (optionsCheck?.length) {
			console.log(optionsCheck);
			if (questions[questions.length-1].alternatives[questions[questions.length-1].correct_alternative]==optionsCheck) {
				//questions[questions.length-1].id;
				usuario.score+=1;
				console.log(usuario.score);
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
