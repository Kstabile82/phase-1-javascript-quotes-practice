const url = "http://localhost:3000/quotes"
const form = document.querySelector('#new-quote-form');
const list = document.querySelector('#quote-list');

form.addEventListener('submit', handleNewQuote)

function getAllQuotes() {
    return fetch(url)
    .then(res => res.json())
    .then(renderAllQuotes)

}

function renderAllQuotes(quotesArr){
  quotesArr.forEach(renderOneQuote)
}

function renderOneQuote(quoteObj){
    const li = document.createElement('li')
    li.interHTML = `
    <blockquote class="blockquote">
        <p class="mb-0">${quoteObj.quote}</p>
        <footer class="blockquote-footer">${quoteObj.author}</footer>
        <br>
        <button class='btn btn-success'>Likes: <span>${obj.likes}</span></button>
        <button class='btn btn-danger'>Delete</button>
      </blockquote>
      `
      li.classList.add("quote-card")
      const deleteBtn = li.querySelector('.btn-danger')
      const likeBtn = li.querySelector('.btn-success')

      deleteBtn.addEventListener('click', () => li.remove())
      likeBtn.addEventListener('click', handleAddLike)
      list.appendChild(li)
}

function handleNewQuote(e) {
    e.preventDefault();
    const quote = e.target.quote.value
    const author = e.target.author.value
    const newQuote = {
        quote,
        author,
        likes: 0
    }
    renderOneQuote(newQuote)

}
function handleAddLike(li) {
    const likeSpan = li.querySelector('span')
    const like = parseInt(likeSpan.textContent)
    likeSpan.textContent = likes + 1;
}

getAllQuotes().then(renderAllQuotes)