let param = new URLSearchParams(window.location.search);
let id = decodeURIComponent(param).slice(0,-1);
$.ajax({
  method: "GET",
  contentType: "application/json",
  url: "https://jquery-quizz-production.up.railway.app/users",
  success: function(data){
    console.log(data);
    getScore(data);
    //$("body").text(data.name +"  "+data.score)
  }
});
function getScore(data){
  data.sort(function(a, b) {
    return b.score - a.score;
  });
  for (var i = 0; i < data.length; i++) {
    var cls=(data[i].id==id) ? `class="you"` : "";
    var tr=$(` <tr `+cls+`>
      <td>`+data[i].name+`</td>
      <td>`+data[i].score+`</td>
      </tr>
      `);
      $("tbody").append(tr);
    }

  }
  $(".restart").click(()=>{
    window.location.href="../view/form.html";
  });
