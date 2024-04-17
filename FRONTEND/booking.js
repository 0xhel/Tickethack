fetch('http://localhost:3000/booking')
.then(res => res.json())
.then(result => {
    
    if(!result.bookings.length) {
        return
    }

    console.log(result.bookings)

    const placeHolder = document.querySelectorAll(".display")
    console.log(document.querySelectorAll(".display"))
    for(let elem of placeHolder){
        elem.style.display ='none';
    }

    document.querySelector("#cartContainer").innerHTML += ` <p id="myCart"><strong>My bookings</strong></p> `
    document.querySelector("#cartContainer").innerHTML += `<div id="bookList"> 
    </div> `

    for (let booking of result.bookings) {
        let justHours = booking.trip.date.slice(11,16)
        
       
       
    


        document.querySelector("#bookList").innerHTML +=`<div class="tripBooked">
        <div>${booking.trip.departure} > ${booking.trip.arrival}</div>
        <div>${justHours}</div>
        <div>${booking.trip.price}€</div>
        <div>Departure ${justHours}</div>
    </div>
         `
    }


    document.querySelector("#cartContainer").innerHTML +=`<div id="bookFooter">
    <div>Enjoy your travel with Tickethack!</div>
 </div>
 `
    
   
   
})