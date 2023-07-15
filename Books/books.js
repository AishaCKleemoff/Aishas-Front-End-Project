console.log("Aisha's Front End Project");

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
const form = document.querySelector("form");
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
      main.append(h2);
      h2.textContent = `${foundBook.title}`;
      console.log(bookTitle);
    });

  form.reset();
});
