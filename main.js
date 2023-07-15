console.log("Aisha's Front End Project.");

const url =
  "https://book-finder1.p.rapidapi.com/api/search?series=Wings%20of%20fire&book_type=Fiction&lexile_min=600&lexile_max=800&results_per_page=25&page=1";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "91bb65a74amsh4240f7343dcda7bp1d0e90jsnddbdcef2c62c",
    "X-RapidAPI-Host": "book-finder1.p.rapidapi.com",
  },
};

const bookList = document.querySelector("#book-list");
console.log(bookList);

function newBook(book) {
  const newLi = document.createElement("li");
  newLi.textContent = `${book.title_search}`;
  newLi.style.listStyle = `url('./assets/book-half.svg')`
  return newLi;
}

fetch(url, options)
  .then((data) => data.json())
  .then((JSONresponse) => {
    console.log(JSONresponse.results);
    JSONresponse.results.forEach((book) => {
      
      bookList.append(newBook(book))
    });

    /*for (let i = 0; i < JSONresponse.results.length; i++) {
      console.log(JSONresponse.results[i])
    }*/
    /* */
  });

console.log(bookList);
