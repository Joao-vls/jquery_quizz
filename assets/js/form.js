function setUser() {
  const id = "usr"+Math.random().toString(36).substr(2, 9);
  const name = $("#nickname").val();
  let score = 0;

  const data = {
    id: id,
    name: name,
    score: score
  }
  $.post("http://localhost:3000/users", data,function(){
    window.location.href="../view/quizz.html?id="+data.id;
  });
}

$("#play_quizz").click(()=>{
  setUser();
});
