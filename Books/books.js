console.log("Aisha's Front End Project");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "91bb65a74amsh4240f7343dcda7bp1d0e90jsnddbdcef2c62c",
    "X-RapidAPI-Host": "book-finder1.p.rapidapi.com",
  },
};

const header = document.querySelector("header");
const h2 = document.createElement("h2");
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const bookTitle = document.querySelector("#book-title").value;

  fetch(
    "https://book-finder1.p.rapidapi.com/api/search?series=Wings%20of%20fire&book_type=Fiction&lexile_min=600&lexile_max=800&results_per_page=25&page=1",
    options
  )
    .then((data) => data.json())
    .then((JSONresponse) => {
      console.log(JSONresponse);
      JSONresponse;

      let foundBook = JSONresponse.results.find(
        (book) => book.title_search === bookTitle
      );
      header.append(h2);
      h2.textContent = `${foundBook.title_search}`;
      console.log(bookTitle);
    });

  form.reset();
});
