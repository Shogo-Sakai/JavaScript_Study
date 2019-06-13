console.log('name属性をキーに要素を取得');

function showElements(){
  var elements = document.getElementsByName('result');
  console.log(elements[0].value);
}
