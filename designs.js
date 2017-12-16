// Select color input
// Select size input
$('#sizePicker').submit(function(evt){
  $('tr').remove();
  $('td').remove();
  evt.preventDefault();
  makeGrid();
});
// When size is submitted by the user, call makeGrid()
function makeGrid() {
  let rows, cols, bgColor;
  rows = $('#input_height').val();
  cols = $('#input_width').val();
  for(let i=0;i<rows;i++){
    $('#pixel_canvas').append('<tr class="height"></tr>');
  }
  for(let j=0;j<cols;j++){
    $('.height').append('<td class="width"></td>');
    $('.width').click(function(){
      bgColor = $('#colorPicker').val();
      $(this).css("background-color", bgColor);
    });
  }
}
