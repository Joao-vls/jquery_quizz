function getUser(id) {
  $.get("https://jquery-quizz-production.up.railway.app/users", {id: id}, function(data){
    console.log(data[parseInt(id)].score)
  });
}

function setUser() {
  const id = 5;
  const name = $("#nickname").val();
  let score = 150;
  
  const data = {
    id: id,
    name: name,
    score: score
  }

  $.post("https://jquery-quizz-production.up.railway.app/users", data);
}