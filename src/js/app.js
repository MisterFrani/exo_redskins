const articles = [
    {
        id: 1,
        title: "Cuir Rafal Ycon",
        price: "670,00 €",
        img: "prod1.png",
        isActive: true
    },
    {
        id: 2,
        title: "Old twon Ycon",
        price: "870,00 €",
        img: "thumbnail1.png",
        isActive: false
    },
    {
        id: 3,
        title: "Bruiz roll Ycon",
        price: "870,00 €",
        img: "thumnail2.png",
        isActive: false
    },
    {
        id: 4,
        title: "Cuir Rech Ycon",
        price: "990,00 €",
        img: "thumbnail3.png",
        isActive: false
    }

]

function displayArticleActive(art){
   
    const getActive = art.filter(item => item.isActive)[0]
    $mainhero.innerHTML = `<img src="./src/img/${getActive.img}" alt="hero">`;
    $mainContent.innerHTML = `
        <div class="heading-title">
            ${getActive.title}         
        </div>
        <div class="heading-price border-top">
            ${getActive.price}
        </div>
    `;
}

function displayArticles(art){
    const getInactives = art.filter(item => !item.isActive)

    $articles.innerHTML = ""
    getInactives.forEach(element => {
            $articles.innerHTML += `<button onclick="clickArticle(${element.id})" class="article-btn"><img src="./src/img/${element.img}" alt=""> </button> `
    });
}

function clickArticle(id){
    const newArticles = articles.map((item)=>{
            item.isActive = item.id == id;
            return item;
    });

    displayArticleActive(newArticles);
    displayArticles(newArticles);
}


const $mainhero = document.querySelector("#mainhero");
const $mainContent= document.querySelector("#mainContent");
const $articles = document.querySelector("#articles");

displayArticleActive(articles);
displayArticles(articles);


