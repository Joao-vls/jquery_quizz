function setUser() {
  const id = Math.random().toString(36).substr(2, 9);
  const name = $("#nickname").val();
  let score = 0;

  const data = {
    id: id,
    name: name,
    score: score
  }
  $.post("http://localhost:3000/users", data,function(){
    var url="../view/quizz.html?"+encodeURIComponent(JSON.stringify(data));

    window.location.href=url;
  });
}

$("#play_quizz").click(()=>{
  setUser();
});
