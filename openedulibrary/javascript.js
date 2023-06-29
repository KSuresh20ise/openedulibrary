
    // Function to handle book downloads
    function searchBooks() {
    // Get the search input value
    const searchInput = document.getElementById('search-input').value.toLowerCase();

    // Get all book elements
    const books = document.getElementsByClassName('book');

    // Reset the "Book not available" message
    document.getElementById('notavailable').textContent = '';

    // Loop through each book and check if it matches the search input
    let bookFound = false;
    for (let i = 0; i < books.length; i++) {
        const book = books[i];
        const title = book.querySelector('.book-title').textContent.toLowerCase();
        const author = book.querySelector('.book-author').textContent.toLowerCase();

        // Show or hide the book based on search input
        if (title.includes(searchInput) || author.includes(searchInput)) {
            book.style.display = 'block';
            bookFound = true;
        } else {
            book.style.display = 'none';
        }
    }

    // Display the "Book not available" message if no book matches the search input
    if (!bookFound) {
        document.getElementById('notavailable').textContent = 'Book not available';
    }
}
   