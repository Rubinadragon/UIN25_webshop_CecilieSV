console.log(products)

//Gå gjennom alle produkter, generere HTML for hvert produkt, skrive dette til index.html

//Variabel som holder på HTML for produktene
let productHTML = ""

products.map((product, index) => productHTML += 
            `<article class="product-card">
                <img src="website_images/PROD_${product.imagefile}" alt="PRODUKTTITTEL"/>
                <a href="#KATEGORISIDE">Ninjago</a>
                <h3>${product.title}</h3>
                <p>Kr. ${product.price},-</p>
                <button onclick="addProductToCart(${product.prodid})">Legg i handlekurv</button> 
            </article>`)//onClick istedenfor evenListener på dynamiske knapper

//Finn id productList og fylle med verdiene i variabelen productHTML
document.getElementById("productList").innerHTML = productHTML

//Toggle-funksjonalitet for handlevogn
document.getElementById("shoppingcart").addEventListener("click", function(){
    document.getElementById("cart").classList.toggle("visible")
})

//Lage addProductToCart()
function addProductToCart(prodid){
    //console.log("Du vil legge til produktid " + prodid)
    //.some for å skjekke om prodid allerede eksisterer i cart
    const idExist = cart.some(cartprod => cartprod.cartprodid === prodid)
    if(idExist === true){
        //Oppdatere produktets quantity
        //Først finne index i denne ID-en
        const index = cart.findIndex(p => p.cartprodid === prodid)
        //Oppdatere riktig quantity
        cart[index].quantity++
    } else{
        cart.push({cartprodid: prodid, quantity: 1})
    }
    printCart()
    console.log(cart)
}

//Lage en funskjon som skriver ut oppdatert versjon av handlevogn
function printCart(){
    //Starte med tom variabel som kan fylles med HTML
    let cartHTML = ""
    //Variabel for pris
    let cartTotal = 0
    //Variabel for antall produkter
    let cartNumber = 0

    //Gå gjennom cartarray og generere HTML til hvert produkt
    cart.map((cartprod, index) => {
        const currentProduct = products.findIndex(p => p.prodid === cartprod.cartprodid)
        const currentProductInfo = products[currentProduct]
        cartHTML += `<article class="cart-product">
                        <span class="title">${currentProductInfo.title}</span>
                        <span class="price">${currentProductInfo.price},-</span>
                        <span class="quantity">x<span class="quantity-number">${cartprod.quantity}</span></span>
                        <button class="delete">x</button>
                    </article>`
        //Regn ut totalsum
        cartTotal += currentProductInfo.price * cartprod.quantity
        //Regn ut antall produkter
        cartNumber += cartprod.quantity
    })

    //skrive ut generert HTML til indexfil
    document.getElementById("cart-products").innerHTML = cartHTML
    //Skrive ut totalpris
    document.getElementById("cart-total").innerHTML = cartTotal
    //Skrive ut antall produkter
    document.getElementById("cartcount").innerHTML = cartNumber
}

printCart()