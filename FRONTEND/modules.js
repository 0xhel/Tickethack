
function searchTrip() {
let departInput = document.querySelector('#depart-input').input
let arriveeInput = document.querySelector('#arriv-input').input
document.querySelector('#search-btn').addEventListener('click', () => {
   fetch('', async {
    method: 'GET',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ departure, arrival, date}),
   })
   .then( trip => {
    departInput = trip.departure
    arriveeInput = trip.arrival

    

   }) 	
   })
}

// affiche les voyages dans le panier
function displayAddedTrips() {

}
// supprime un voyage du panier au click 
function removeAddedTrip() {

}

// Total du prix des voyages ajoutés
function totalPrice() {

}






