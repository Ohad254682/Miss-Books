function getGoogleBooks() {
    return axios.get('https://www.googleapis.com/books/v1/volumes?printType=books&q=effective%20javascript');
}