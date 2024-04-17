const data = {
    departure :document.querySelector('#depart-input').value,
    arrival : document.querySelector('#arriv-input').value,
    date : document.querySelector('#date-input').value 

}


document.querySelector('#search-btn').addEventListener('click', () => {

   const departure = document.querySelector('#depart-input').value
    const arrival = document.querySelector('#arriv-input').value
    const date = document.querySelector('#date-input').value

 if(!departure || !arrival || !date)
 {
    return
 }
 fetch('http://localhost:3000/search', {
    method: 'POST',
   headers: { 'Content-Type': 'application/json' },
   body: JSON.stringify({departure, arrival, date})
   
 })
 .then(data => data.json())
 .then( result => {
 console.log(result.trips)
 !result.trips.length ?
 document.querySelector('#displaySection').innerHTML = ` <div id="defaultDisplay">
 <img src="images/notfound.png">
 <p>No trip found.</p>
 </div> `
 : 
 document.querySelector('#defaultDisplay').style.display = 'none'

 for(let elem of result.trips) {
  
   let justHours = elem.date.slice(11,16)
    
    document.querySelector('#displaySection').innerHTML += `
    <div id="${elem._id}" class="voyage">
                    <div>${elem.departure} > ${elem.arrival}</div>
                    <div>${justHours}</div>
                    <div>${elem.price}€</div>
                    <a href="cart.html"><button class="book-btn">Book</button></a>
                </div>`
  } 

  const booked = document.querySelectorAll(".book-btn")


     for ( let item of booked ) {
    
         item.addEventListener('click', () => {
        let result = item.parentNode.id
         

        fetch('http://localhost:3000/cart', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({result})

        }) 

        document.querySelector("#display").style.display = "none";


        document.querySelector('#cartContainer').innerHTML += `<p id="myCart"><strong>My cart</strong></p>

        <div id="bookList">
            <div class="tripBooked">
                <div>Paris > Lyon</div>
                <div>20:09</div>
                <div>103€</div>
                <button class="delete-btn">X</button>
            </div>

        </div>

        <div id="cartFooter">
            <div>Total: 230€</div>
            <a href="bookings.html"><button class="purchase-btn">Purchase</button></a>
        </div>`




    

      })
   }

    







   
  })
})



















// affiche les voyages dans le panier
function displayAddedTrips() {

}
// supprime un voyage du panier au click 
function removeAddedTrip() {

}

// Total du prix des voyages ajoutés
function totalPrice() {

}










