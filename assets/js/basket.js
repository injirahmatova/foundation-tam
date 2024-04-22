


const myDiv = document.querySelector(".basketContainer")

function getProducts() {
    myDiv.innerHTML = ``
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    cart.forEach((item,index) => {
        let box = document.createElement("div");
        box.className = "productCard";
        box.innerHTML = `
              <img
                src=${item.thumbnail}
                alt=""
                style="width:100%;height:100px"
              />
              <div class="cardDesc">
                <h3>${item.title}</h3>
                <p>${item.price}$</p>
                <button class="cartBtn" onclick="removeItem(${index})">Delete</button>
              </div>
              `;
              myDiv.appendChild(box);
    })

}

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart"))
    cart.splice(index, 1)
    localStorage.setItem("cart", JSON.stringify(cart))
    getProducts()
}

getProducts()