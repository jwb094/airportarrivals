$(() => {

    $("#submitSearch").click((e) => {
        e.preventDefault();
        let locationsearch = $('#search').val();

        $.ajax({
            url: '/search',
            method: 'POST',
            data: {
                city: $('#search').val()
            }
        })
            .then((data) => {
                $("#SearchTitle").append(`<h4>Airports around :  ${locationsearch}</h4>`);
                let theData = data.result;
                console.log(theData);
                for (let i in theData) {//for each item in the object
                    $("#airportName").append(`<p>${theData[i].name}</p>`);
                    $("#City").append(`<p>${theData[i].city}</p>`);
                    $("#iataCode").append(`<p><a name="aiportCode"  class="airportCode" data-id="${theData[i].iata}" href="#" >View Arrivals</a></p>`);
                }
            });
    });


    $('body').on('click', (event) => {//click event for when an element on the body is clicked
        event.preventDefault();
        //      console.log(event.target.id);//visual rep of the element that was clicked
        if (event.target.name === "aiportCode") {//if the event.target.id is true
            console.log($(event.target).attr("data-id"));//visual rep of the element
            updateServerWithData($(event.target).attr("data-id"));//call the method with event.target.id e.g. LHR as the parameter
        }
    });

    function updateServerWithData(arrivaldetails) {
        $.ajax({
            url: '/set-arrivals',
            method: 'POST',
            data: {
                airport: arrivaldetails
            }
        })
            .then((data) => {
                window.location.href = "/arrivals";

            });
    }


    $('#airportArrivals').on('click', (event) => {//click event for when an element on the body is clicked
        event.preventDefault();
        //      console.log(event.target.id);//visual rep of the element that was clicked
        if (event.target.name === "airportCode") {//if the event.target.id is true
            console.log($(event.target).attr("data-id"));//visual rep of the element
            updateServerWithFlightDetailsData($(event.target).attr("data-id"));//call the method with event.target.id e.g. LHR as the parameter
        }
    });

    function updateServerWithFlightDetailsData(flightdetails) {
        $.ajax({
            url: '/set-details',
            method: 'POST',
            data: {
                flight: flightdetails
            }
        })
            .then((data) => {
                 console.log(data);
                window.location.href = "/flightDetails";
            });
    }

});