// Form validation function
function validateForm() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
  
    if (nameInput.value === '') {
      alert('Please enter a name.');
      return false;
    }
  
    if (emailInput.value === '') {
      alert('Please enter an email address.');
      return false;
    }
  
    
  
    return true;
  }
  
  // Function to append new user data to the table
  function appendValues(name, email, role) {
    const tableBody = document.getElementById('user-table').getElementsByTagName('tbody')[0];
    const newRow = tableBody.insertRow();
    const idCell = newRow.insertCell();
    const nameCell = newRow.insertCell();
    const emailCell = newRow.insertCell();
    const roleCell = newRow.insertCell();
    const actionCell = newRow.insertCell();
  
    // Assuming you have an ID generation mechanism, assign a unique ID here
    idCell.textContent = 'New User ID'; 
    nameCell.textContent = name;
    emailCell.textContent = email;
    roleCell.textContent = role;
  
    // Create edit and delete buttons with appropriate functionality (implementation not included here)
    const editButton = document.createElement('button');
    editButton.classList.add('text-blue-500', 'p-1');
    editButton.innerHTML = '<i class="fas fa-edit"></i>';
  
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('text-red-500', 'p-1');
    deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
  
    actionCell.appendChild(editButton);
    actionCell.appendChild(deleteButton);
  }
  
  // Event listener for form submission
  const userForm = document.getElementById('user-form');
  userForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior
  
    if (validateForm()) {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const role = document.getElementById('countries').value;
  
      appendValues(name, email, role);
  
      // Clear the form after successful submission
      userForm.reset();
    }
  });
  
    const tableBody = document.getElementById('user-table').getElementsByTagName('tbody')[0];
    tableBody.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        const tableRow = event.target.parentElement.parentElement;
        const actionCell = tableRow.children[5]; 

    if (event.target.classList.contains('text-blue-500')) { 
      const name = tableRow.children[2].textContent;
      const email = tableRow.children[3].textContent;
      const role = tableRow.children[4].textContent;


    } else if (event.target.classList.contains('text-red-500')) { // Delete button clicked
      const confirmDelete = confirm('Are you sure you want to delete this user?');
      if (confirmDelete) {
        tableBody.removeChild(tableRow);
        
      }
    }
  }
});

  