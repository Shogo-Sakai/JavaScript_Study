console.log('add event');

window.onload = function(){
    var e = document.getElementById('button');
    e.addEventListener('click',function(){
      console.log('イベント発生！！！');
    },false);
    var i = document.getElementById('button');
    i.addEventListener('click', function(){
      console.log('スマブラやりたいなぁ！');
    },false);
}
