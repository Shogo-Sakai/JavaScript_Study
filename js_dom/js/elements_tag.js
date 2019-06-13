console.log('タグ名をキーに要素を取得');
function showElements(){
  var elements = document.getElementsByTagName('div');
  for (var i = 0 ; i< elements.length;i++)
   console.log(elements[i].innerText);
}
