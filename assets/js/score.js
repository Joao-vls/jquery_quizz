let param = new URLSearchParams(window.location.search);
let id = decodeURIComponent(param).slice(0,-1);

$(document).ready(() => {
    
    var trr =$(` <tr>
      <td class="loading shine box"></td>
      <td class="loading shine box"></td>
      </tr>
      `);
    $("tbody").append(trr);

    $.ajax({
    method: "GET",
    contentType: "application/json",
    url: "https://jquery-quizz-production.up.railway.app/users",
    success: function(data){
      getScore(data);
      //$("body").text(data.name +"  "+data.score)
    }
  });
})


function inject(str){
  str=str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    if (str.length > 50) {
     str = str.substr(0, 50) + '...';
     }
  return str;
}

function getScore(data){
 $(".loading").remove();
  data.sort(function(a, b) {
    return b.score - a.score;
  });
  for (var i = 0; i < data.length; i++) {
    var cls=(data[i].id==id) ? `class="you"` : "";
    var tr=$(` <tr `+cls+`>

      <td>`+inject(data[i].name)+`</td>
      
      <td>`+data[i].score+`</td>
      </tr>
      `);
      $("tbody").append(tr);
    }

  }
  $(".restart").click(()=>{
    window.location.href="../view/form.html";
  });
