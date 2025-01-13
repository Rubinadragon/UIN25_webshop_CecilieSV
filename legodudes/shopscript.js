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
                <button>Legg i handlekurv</button> 
            </article>`)

//Finn id productList og fylle med verdiene i variabelen productHTML
document.getElementById("productList").innerHTML = productHTML