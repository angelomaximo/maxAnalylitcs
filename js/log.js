const logArea = document.getElementById('logArea');

function getTime() {
  const date = new Date();
  const min = ('0' + date.getMinutes()).slice(-2); //"0"+"12" -> "012".slice(-2) -> "12", so "0"+"1" -> "01".slice(-2) -> "01"
  return `${date.getHours()}:${min}`;
}

function addLog(activity) {
  logArea.innerHTML += `${activity}─${getTime()}, `;
}
