function setUser() {
  const id = Math.random().toString(36).substr(2, 9);
  const name = $("#nickname").val();
  let score = 0;

  const data = {
    id: id,
    name: name,
    score: score
  }
  $.post("https://jquery-quizz-production.up.railway.app/users", data,function(){
    var url="../view/quizz.html?"+encodeURIComponent(JSON.stringify(data));
    
    window.location.href=url;
  });
}


function validateInput(e) {
  e.preventDefault()
  
  if ($("#nickname").val().trim().length > 0) {
    $("#nickname").removeClass('error');
    
    setUser();
 
  } else {
 
     $("#nickname").addClass('error')
  }


}

$("#play_quizz").click((e)=>{
  
  validateInput(e);

});
