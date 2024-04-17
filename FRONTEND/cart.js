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
    <div id="${elem.trip._id}" class="tripBooked">
        <div>${elem.trip.departure} > ${elem.trip.arrival}</div>
        <div>${justHours}</div>
        <div id='${elem.trip.price}'>${elem.trip.price}€</div>
        <button class="delete-btn">X</button>
    </div>

</div>`

totalPrice += elem.trip.price

}

document.querySelector('#cartContainer').innerHTML +=`
 <div  id="cartFooter">
    <div>Total: ${totalPrice}€</div>
   <button class="purchase-btn">Purchase</button>
</div>`

const deleteBtn = document.querySelectorAll(".delete-btn")

for(let btn of deleteBtn) {
    
    btn.addEventListener('click', () => {
      
        
        let parentId = btn.parentNode.id

       
       fetch(`http://localhost:3000/cart/${parentId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        
       }).then(res => res.json())
       .then(response => {
        if(response.result) {
            
            btn.parentNode.parentNode.remove()
          totalPrice -= new Number(btn.previousElementSibling.id)
            document.querySelector('#cartFooter').firstElementChild.textContent = `Total: ${totalPrice}€`
          
          
          
        }

       })

       



    })

}



document.querySelector('.purchase-btn').addEventListener('click', ()=> {
    
    const tripBooked = document.querySelectorAll(".tripBooked")

    for( let elem of tripBooked ) {
        let result = elem.id
        console.log(result)

        fetch('http://localhost:3000/booking', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({id: result})
        }).then(res => res.json())
        .then(resp => {
            if(resp.result) {

               
            document.querySelector('#cartContainer').innerHTML =` <p class="display">No ticket in your cart.</p>
                <p  class="display" id="whyNot">Why not plan a trip?</p>`
                window.location.assign("bookings.html")
            }
        })
        





    }

    fetch






   
})




})

