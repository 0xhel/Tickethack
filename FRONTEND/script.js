


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
 
 !result.trips.length ?
 document.querySelector('#displaySection').innerHTML = ` <div id="defaultDisplay">
 <img src="images/notfound.png">
 <p>No trip found.</p>
 </div> `
 : 
 document.querySelector('#defaultDisplay').style.display = 'none'

 for(let elem of result.trips) {

  console.log(elem)
   let justHours = elem.date.slice(11,16)
    
    document.querySelector('#displaySection').innerHTML += `
    <div id="${elem._id}" class="voyage">
                    <div>${elem.departure} > ${elem.arrival}</div>
                    <div>${justHours}</div>
                    <div>${elem.price}€</div>
                    <button class="book-btn">Book</button>
                </div>`
  } 

  const booked = document.querySelectorAll(".book-btn")


     for ( let item of booked ) {
    
         item.addEventListener('click', () => {
        let result = item.parentNode.id
        console.log(result)
         

        fetch('http://localhost:3000/cart', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({id: result})

        }).then( resp => resp.json())
          .then(resp => {
            if(resp.result) {
                window.location.assign("cart.html")
            }
          })

        




    

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










