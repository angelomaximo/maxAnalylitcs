// The position 1 is Focused Time and 2 is Journal Preview
function addCell(rowId, cellPosition, cellContent) {
  const row = document.getElementById(rowId);
  let cell = row.insertCell(cellPosition);
  cell.innerHTML = cellContent;
}

addCell('01/04/23', 1, '5');
addCell('01/04/23', 2, 'coffee─6:01─29°, study─7:32, gym─11:55, ...');