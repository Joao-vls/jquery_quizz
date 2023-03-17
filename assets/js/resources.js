$(document).ready(() => {

  $('#drop-drag').click(() => {
    $('#resource').html(`
      <div id="draggable" class="ui-widget-content">
        <p>Arraste e solte no bloco ao lado</p>
      </div>
    
      <div id="droppable" class="ui-widget-header">
        <p>Solte o bloco aqui!!</p>
      </div>
    `)

    $("#draggable").draggable();
    $("#droppable").droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass("ui-state-highlight")
          .find("p")
            .html("Ok!!")
      }
    });
  })

  $('#carousel').click(() => {
    $('#resource').html(`
      r2
    `)
  })
})
