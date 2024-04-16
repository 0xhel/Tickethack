

function searchTrip() {
    const departInput = document.querySelector('#depart-input').value
    const arrivalInput = document.querySelector('#arriv-input').value
    const dateInput = document.querySelector('#date-input').value
    

document.querySelector('#search-btn').addEventListener('click', () => {
    fetch('http://localhost:3000/index', {
        method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({ departure, arrival, date})
       
  })
  .then(data => data.json())
  .then( trip => {
    console.log(trip)
   const foundTrip = trip.filter(elem => elem.includes(elem.departure === departInput && elem.arrival === arrivalInput))
   
  }
   
    
)
})}
  
  
    
    
    
    

    

    


// affiche les voyages dans le panier
function displayAddedTrips() {

}
// supprime un voyage du panier au click 
function removeAddedTrip() {

}

// Total du prix des voyages ajoutés
function totalPrice() {

}






