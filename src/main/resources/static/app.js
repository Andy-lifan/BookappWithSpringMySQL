document.addEventListener('DOMContentLoaded', init);

function init() {    
    document.querySelector('#addBook > button')
        .addEventListener('click', onAdd);      
    document.querySelector('#findSingleBook > button')
        .addEventListener('click', onFindSingleBook);
    document.querySelector('#findAllBooks > button')
        .addEventListener('click', onFindAllBooks);
    document.querySelector('#removeBook > button')
        .addEventListener('click', onRemove);
    document.querySelector('#editBook > button')
        .addEventListener('click', onEdit);
       
}

async function onAdd() {
    let data = {
        bookid: document.querySelector('#addBook #newBookId').value,
        bookname: document.querySelector('#addBook #newBookTitle').value,
        author: document.querySelector('#addBook #newBookAuthorName').value,
        price: document.querySelector('#addBook #newBookPrice').value,  
        datepublished: document.querySelector('#addBook #newBookDatePublished').value,     
    };
    console.log('adding data', data);
    const response = await fetch('/books', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    await onFindAllBooks();
}

async function onFindSingleBook() {

    let id = parseInt(document.querySelector('#findSingleBook #bookId').value);
    console.log('finding bookId', id);
    let response = await fetch(`/book/${id}`);
    let json = await response.json();
    console.log('find single book', json);
    document.querySelector('#findSingleBook > .output').innerHTML = query_buildTable([json]);
}

async function onFindAllBooks() {
    let response = await fetch('/book');
    let json = await response.json();
    console.log('find all books', json);
    document.querySelector('#findAllBooks > .output').innerHTML = query_buildTable(json);
}

async function onRemove() {

    let id = parseInt(document.querySelector('#removeBook #bookId').value);
    console.log('removing bookId', id);
    const response = await fetch(`/book/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },       
    });
    await onFindAllBooks();
}

async function onEdit() {
    let data = {
        bookid: document.querySelector('#editBook #editBookId').value,
        bookname: document.querySelector('#editBook #editBookTitle').value,
        author: document.querySelector('#editBook #editBookAuthorName').value,
        price: document.querySelector('#editBook #editBookPrice').value,
        datepublished: document.querySelector('#editBook #editBookDatePublished').value,      
    };
    console.log('editing data', data);
    const response = await fetch('/books', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    await onFindAllBooks();
}

function query_buildTable(records) {
    let html = `<table>`;
    html += `<thead>`;
    html += `  <tr>`;
    html += `    <th>ID</th>`;
    html += `    <th>Title</th>`;
    html += `    <th>Author</th>`;
    html += `    <th>Price</th>`;
    html += `    <th>DatePublished</th>`;
    html += `  </tr>`;
    html += `</thead>`;
    html += `<tbody>`;
    records.forEach(r => {
       html += `<tr>`;
       html += `  <td>${r.bookid}</td>`
        html += `  <td>${r.bookname}</td>`
        html += `  <td>${r.author}</td>`
        html += `  <td>${r.price}</td>`
        html += `  <td>${r.datepublished}</td>`
       html += `</tr>`;
    });
    html += `</tbody>`;
    html += `</table>`;
    return html;
}