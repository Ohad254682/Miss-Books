var gBooks = []

function getJson() {
    return axios.get('C:\Users\ASUS\Desktop\Coding Academy\Ohad Avidar\Week 8\Day 36\services');
}
function createBooks() {
    var books = getJson()
        .then(console.log(books))
}

createBooks()
