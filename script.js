document.addEventListener('DOMContentLoaded', function() {
  const expenseForm = document.getElementById('expenseForm');
  const expenseList = document.getElementById('expenseList');
  const totalDisplay = document.getElementById('totalDisplay');

  // Load expenses from localStorage
  let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

  // Function to display expenses
  function displayExpenses() {
    expenseList.innerHTML = '';
    let total = 0;
    expenses.forEach(function(expense, index) {
      const div = document.createElement('div');
      div.classList.add('expense-item');
      div.innerHTML = `
        <span>${expense.name}: $${expense.amount}</span>
        <button class="delete-btn" onclick="deleteExpense(${index})">Delete</button>
      `;
      expenseList.appendChild(div);
      total += expense.amount;
    });
    totalDisplay.textContent = `$${total.toFixed(2)}`;
  }

  // Function to add expense
  expenseForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('expenseName').value;
    const amount = parseFloat(document.getElementById('expenseAmount').value);
    if (name && amount) {
      const expense = {
        name: name,
        amount: amount
      };
      expenses.push(expense);
      localStorage.setItem('expenses', JSON.stringify(expenses));
      displayExpenses();
      drawAttractiveDesign4(); // Call turtle graphics function when adding expense
      expenseForm.reset();
    } else {
      alert('Please fill in both fields.');
    }
  });

  // Function to delete expense
  window.deleteExpense = function(index) {
    expenses.splice(index, 1);
    localStorage.setItem('expenses', JSON.stringify(expenses));
    displayExpenses();
  };

  // Display existing expenses
  displayExpenses();
});
