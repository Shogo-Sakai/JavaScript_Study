console.log('演習：DOM操作');

function append(){
  var newText = document.getElementById('newText')
  var li = document.createElement('li');
  var text = document.createTextNode(newText.value);
  li.appendChild(text);

  var lists = document.getElementById('lists');

  lists.appendChild(li);
}
