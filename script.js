//your JS code here. If required.
 document.getElementById('book-form').addEventListener('submit', function (e) {
      e.preventDefault();

      // Get form values
      var title = document.getElementById('title').value;
      var author = document.getElementById('author').value;
      var isbn = document.getElementById('isbn').value;

      // Add book to table
      addBookToTable(title, author, isbn);

      // Clear form fields
      document.getElementById('title').value = '';
      document.getElementById('author').value = '';
      document.getElementById('isbn').value = '';
    });

    function addBookToTable(title, author, isbn) {
      var tableBody = document.getElementById('book-list');

      // Create a new row
      var newRow = tableBody.insertRow();

      // Insert cells
      var titleCell = newRow.insertCell(0);
      var authorCell = newRow.insertCell(1);
      var isbnCell = newRow.insertCell(2);
      var actionCell = newRow.insertCell(3);

      // Set cell values
      titleCell.innerHTML = title;
      authorCell.innerHTML = author;
      isbnCell.innerHTML = isbn;
      actionCell.innerHTML = '<button class="btn btn-danger delete">Clear</button>';

      // Add event listener to delete button
      var deleteButton = actionCell.querySelector('.delete');
      deleteButton.addEventListener('click', function () {
        tableBody.deleteRow(newRow.rowIndex);
      });
    }