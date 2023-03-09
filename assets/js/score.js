let param = new URLSearchParams(window.location.search);
let id = decodeURIComponent(param).slice(0,-1);
$.ajax({
  method: "GET",
  contentType: "application/json",
  url: "http://localhost:3000/users/"+id,
  success: function(data){
    console.log(data);
    $("body").text(data.name +"  "+data.score)
  }
});
