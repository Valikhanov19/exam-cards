const list = document.querySelector("#list");

(() => {

    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => renderData(data))
        .catch(err => console.log(err))

        function renderData(data){

            data.forEach(datacha => {
                list.innerHTML += `<li class="item">
                <img src="${datacha.image}" alt="" width="200px" height="300px" class="product-image">
                <ul class="wrapper-list">
                    <li class="list-prise"><strong>${datacha.price} $</strong></li>
                    <li class="list-title"><i>${datacha.title}</i></li>
                    <li class="list-category"><strong>${datacha.category}</strong></li>
                </ul>

                <img src="images/trash.png" width="25px" class="trash">
            </li>`
                
            });
        }

})()

list.addEventListener("click", (e) => {
    
    if(e.target.classList.contains("trash")) {
        console.log("deleted");
    }
})