fetch('http://localhost:3000/cart')
.then(res => res.json())
.then(result => {
   
if (!result.carts.length) { 
    return
}

const placeHolder = document.querySelectorAll(".display")
for(let elem of placeHolder) {
    elem.style.display = "none";
}

document.querySelector('#cartContainer').innerHTML += `<p id="myCart"><strong>My cart</strong></p>`
let totalPrice = 0
for (elem of result.carts) {

    let justHours = elem.trip.date.slice(11,16)
    
    document.querySelector('#cartContainer').innerHTML +=`
   <div id="bookList">
    <div  class="tripBooked">
        <div>${elem.trip.departure} > ${elem.trip.arrival}</div>
        <div>${justHours}</div>
        <div>${elem.trip.price}€</div>
        <button class="delete-btn">X</button>
    </div>

</div>`

totalPrice += elem.trip.price

}

document.querySelector('#cartContainer').innerHTML +=`
 <div id="cartFooter">
    <div>Total: ${totalPrice}€</div>
    <a href="bookings.html"><button class="purchase-btn">Purchase</button></a>
</div>`

})

const deleteBtn = document.querySelectorAll(".delete-btn")

for( let btn of deleteBtn) {
    btn.addEventListener('click', () => {
       fetch('http://localhost:3000/cart')

    })

}