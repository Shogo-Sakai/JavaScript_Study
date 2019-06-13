console.log('IDをキーに要素を取得');

function show(){
  var result = document.getElementById('result');
  console.log(result.innerText);
  var nowDate = new Date();
  result.innerText = nowDate.toLocaleString();
}
