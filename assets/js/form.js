function setUser() {
  const id = "usr"+Math.random().toString(36).substr(2, 9);
  const name = $("#nickname").val();
  let score = 0;

  const data = {
    id: id,
    name: name,
    score: score
  }
  $.post("https://jquery-quizz-production.up.railway.app/users", data,function(){
    window.location.href="../view/quizz.html?id="+data.id;
  });
}

$("#play_quizz").click(()=>{
  setUser();
});
