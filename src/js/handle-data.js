let result = new XMLHttpRequest();
result.open("GET", "json/data.json");
result.responseType = "json";
result.send();

result.onload = () => {
  if (result.readyState === 4 && result.status === 200) {
    let data = result.response;
    handleData(data);
  } else {
    console.error("Not Found Data");
  }
};

let app = document.querySelector(".products-list");

function handleData(data) {
  app.innerHTML = data
    .map((item) => {
      let { title, img, price, city, star, preview } = item;

      return `
      <li class="product flex flex-col">
        <figure>
          <img class="w-full h-full" src="${img}" alt="destination image"/>
        </figure>
        <div class="product-title">
          <h3>${title}</h3>
          <p>${city}</p>
          <div class="description">
            <div class="star flex items-center justify-center">
              <ion-icon name="star"></ion-icon><span>${star}</span>
            </div>
            <div class="preview">(${preview} Preview)</div>
          </div>
        </div>
        <div class="price">
          <p>$${price}</p>
        </div>
        <button class="favorite">
          <ion-icon name="heart-outline"></ion-icon>
        </button>
      </li>
    `;
    })
    .join("");
}
