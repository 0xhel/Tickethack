

function searchTrip() {
    const departInput = document.querySelector('#depart-input').value
    const arrivalInput = document.querySelector('#arriv-input').value
    const dateInput = document.querySelector('#date-input').value
    

document.querySelector('#search-btn').addEventListener('click', () => {
    fetch('', {
        method: 'GET',
       headers: { 'Content-Type': 'application/json' },
       
  })
  .then(data => data.json())
  .then( trip => {
   const foundTrip = trip.filter(elem => elem.includes(elem.departure === departInput && elem.arrival === arrivalInput))
   console.log()
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






