// JavaScript code to add functionality to the table, such as sorting or filtering

// Example: Sort the table by name
const table = document.querySelector('table');
const tableHeader = table.querySelector('thead');
const tableBody = table.querySelector('tbody');

tableHeader.addEventListener('click', (event) => {
  const target = event.target;
  if (target.tagName === 'TH') {
    const columnName = target.textContent.toLowerCase();
    sortTable(tableBody, columnName);
  }
});

function sortTable(tableBody, columnName) {
  const rows = Array.from(tableBody.querySelectorAll('tr'));
  rows.sort((a, b) => {
    const aValue = a.querySelector(`td[data-column="${columnName}"]`).textContent;
    const bValue = b.querySelector(`td[data-column="${columnName}"]`).textContent;
    if (aValue < bValue) return -1;
    if (aValue > bValue) return 1;
    return 0;
  });
  tableBody.innerHTML = '';
  rows.forEach((row) => tableBody.appendChild(row));
}
