console.log('class属性をキーに要素を取得');

function showElements(){
  var elements = document.getElementsByClassName('foo');
 for(var i=0;i<elements.length;i++)
  console.log(elements[i].innerText);
}
