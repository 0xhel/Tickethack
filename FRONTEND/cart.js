fetch('http://localhost:3000/cart')
.then(res => res.json())
.then(result => {
if (!result.carts.length) { 
    return
}
document.querySelector("#display").style.display = "none";
document.querySelector('#cartContainer').innerHTML += `<p id="myCart"><strong>My cart</strong></p>`

for (elem of result.carts) {

    let justHours = elem.date.slice(11,16)
    
    document.querySelector('#cartContainer').innerHTML +=`
   <div id="bookList">
    <div  class="tripBooked">
        <div>${elem.departure} > ${elem.departure}</div>
        <div>${justHours}</div>
        <div>${elem.price}€</div>
        <button class="delete-btn">X</button>
    </div>

</div>`


}

document.querySelector('#cartContainer').innerHTML +=`
 <div id="cartFooter">
    <div>Total: 230€</div>
    <a href="bookings.html"><button class="purchase-btn">Purchase</button></a>
</div>`

})