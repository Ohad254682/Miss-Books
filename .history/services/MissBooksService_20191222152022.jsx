var gBooks = []
function createBooks() {
    return axios.get('books.json');
}

console.log(createBooks());
