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

const newLi = document.createElement("li");

fetch(url, options)
  .then((data) => data.json())
  .then((JSONresponse) => {
    console.log(JSONresponse.results);
    JSONresponse.results.forEach((book) => {
      newLi.textContent = book.title_search;
      bookList.append(newLi);
    });

    /*for (let i = 0; i < JSONresponse.results.length; i++) {
      console.log(JSONresponse.results[i])
    }*/
    /* */
  });

  console.log(bookList)