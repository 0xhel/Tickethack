const data = {
    departure: document.querySelector('#depart-input').value,
    arrival: document.querySelector('#arriv-input').value,
    date: document.querySelector('#date-input').value
}



document.querySelector('#search-btn').addEventListener('click', () => {
    const inputs = {
        departure: document.querySelector('#depart-input').value,
        arrival: document.querySelector('#arriv-input').value,
        date: document.querySelector('#date-input').value
    }
    if (!inputs.departure || !inputs.arrival || !inputs.date) {
        return
    }
    fetch('http://localhost:3000/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data })

    })
        .then(data => data.json())
        .then(trips => {
            !trips.length ?
                document.querySelector('#display direction').innerHTML = ` `
                :
                document.querySelector('#defaultDisplay').style.display = none

            for (let elem of trips) {
                document.querySelector('#display-section').innerHTML += `
        <div class="voyage">
                        <div>${trips.arrival} > ${trips.arrival}</div>
                        <div>${trips.date}</div>
                        <div>${trips.price}</div>
                        <button id="#book-btn">Book</button>
                    </div>`
            }

        }
        )
}
)

document.querySelectorAll(".book-btn").addEventListener('click', ())















// affiche les voyages dans le panier
function displayAddedTrips() {

}
// supprime un voyage du panier au click 
function removeAddedTrip() {

}

// Total du prix des voyages ajoutés
function totalPrice() {

}






