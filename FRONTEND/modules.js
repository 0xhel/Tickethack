const data = {
        departure :document.querySelector('#depart-input').value,
        arrival : document.querySelector('#arriv-input').value,
        date : document.querySelector('#date-input').value
    }
   
    

document.querySelector('#search-btn').addEventListener('click', () => {
    fetch('http://localhost:3000/index', {
        method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({data})
       
  })
  .then(data => data.json())
  .then( trip => {
    for(let elem of trip) {
        document.querySelector('#display-section').innerHTML += `
        <div class="voyage">
                        <div>${trip.arrival} > ${trip.arrival}</div>
                        <div>${trip.date}</div>
                        <div>${trip.price}</div>
                        <button id="#book-btn">Book</button>
                    </div>`
    }   
  }
)
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






