if(document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}
function ready() {
    let removeCartItemButtons = document.getElementsByClassName('btn-danger');


for(var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i]
    button.addEventListener('click', removeCartItem );
}

document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked);

}

function purchaseClicked() {
    alert('Thank you for your purchase.');
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while(cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild);
    }
}


function removeCartItem(e) {
    var buttonClicked = e.target;
        buttonClicked.parentElement.parentElement.remove();
}

let removeCartItemButtons = document.getElementsByClassName('btn-danger');


for(var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i]
    button.addEventListener('click', function(e){
        var buttonClicked = e.target;
        buttonClicked.parentElement.parentElement.remove();
        
    })
}


let addToCartButtons = document.getElementsByClassName('shop-item-button');
for(var i = 0; i < removeCartItemButtons.length; i++) {
    var button = addToCartButtons[i]
    button.addEventListener('click', addToCartClicked)
}

function addToCartClicked(e) {
    var button = e.target;
    var shopItem = button.parentElement.parentElement;
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText;
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src;
    console.log(title,price,imageSrc);
    addItemToCart(title,price,imageSrc);
}

function addItemToCart(title,price,imageSrc){
    var cartRow = document.createElement('div');
    cartRow.classList.add('cart-row');
    cartRow.innerText = title
    var cartItems = document.getElementsByClassName('cart-items')[0];
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title');
    for(var i = 0; i< cartItemNames.length; i++) {
        if(cartItemNames[i].innerText == title) {
            alert(`This item is already added to the cart`)
            return
        }
    }
    var cartRowContents = `
    <div class="cart-item cart-column">
        <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
                </div>
                <span class="cart-price cart-column">TK ${price}</span>
                 <div class="cart-quantity cart-column">
                        
                    <button class="btn btn-danger" type="button">REMOVE</button>
                    </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem);
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}