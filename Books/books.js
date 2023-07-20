const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "91bb65a74amsh4240f7343dcda7bp1d0e90jsnddbdcef2c62c",
    "X-RapidAPI-Host": "book-finder1.p.rapidapi.com",
  },
};

const header = document.querySelector("header");
const main = document.querySelector('main');
const h2 = document.createElement("h2");
const h3 = document.createElement("h3")
const p = document.createElement("p")
const form = document.querySelector("form");
const article = document.createElement('article');
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const bookTitle = document.querySelector("#book-title").value;
  console.log(bookTitle);
  fetch(
    `https://book-finder1.p.rapidapi.com/api/search?title=${bookTitle}`,
    options
  )
    .then((data) => data.json())
    .then((JSONresponse) => {
      console.log(JSONresponse);
      JSONresponse;

      let foundBook = JSONresponse.results.find(
        (book) => book.title_search.toLowerCase() === bookTitle.toLowerCase()
      );
      article.append(h2);
      article.append(h3);
      article.append(p);
      main.append(article);
      h2.textContent = `${foundBook.title}`;
      h3.textContent = `${foundBook.authors[0]}`;
      p.textContent = `${foundBook.summary}`;

      console.log(bookTitle);
      console.log(foundBook.summary);

      createNewBook(foundBook.title);
    });

  form.reset();
});
