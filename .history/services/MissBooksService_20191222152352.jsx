var gBooks = []

function getJson() {
    return axios.get('books.json');
}
function createBooks() {
    var books = getJson()
        .then(gBooks = books)
}

console.log(createBooks());
