$(document).ready(() => {

  $('#drop-drag-btn').click(() => {
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

  $('#sortable-btn').click(() => {
    $('#resource').html(`
      <ul id="sortable">
        <li class="ui-state-default">Item 1</li>
        <li class="ui-state-default">Item 2</li>
        <li class="ui-state-default">Item 3</li>
        <li class="ui-state-default">Item 4</li>
        <li class="ui-state-default">Item 5</li>
        <li class="ui-state-default">Item 6</li>
        <li class="ui-state-default">Item 7</li>
      </ul>
    `)

    $("#sortable").sortable();
  })
})
