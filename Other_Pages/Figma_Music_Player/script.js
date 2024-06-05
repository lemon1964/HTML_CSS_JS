function rangeOne() {
  var controller = document.querySelector('.range_one').value;
  document.querySelector('.range_one').style.background = '-webkit-linear-gradient(left,#D42F04, #D42F04 0%, #F3511C ' + controller + '%, black ' + controller + '%, black 100%)';
};

function rangeTwo() {
  var controller = document.querySelector('.range_two').value;
  document.querySelector('.range_two').style.background = '-webkit-linear-gradient(left,#04D425, #04D425 0%, #471CF3 ' + controller + '%, black ' + controller + '%, black 100%)';
};
