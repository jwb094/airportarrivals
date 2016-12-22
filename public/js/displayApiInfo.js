$(() => {

   $("#submitSearch").click((e) => {
       e.preventDefault();
      let locationsearch = $('#search').val();
     
        $.ajax({
            url: '/search',
                method: 'POST',
                data:{
                    city: $('#search').val()
                }
            })
            .then((data) =>  {
                $("#SearchTitle").append(`<p>Airports around :${locationsearch}</p>`);
                let theData = data.result;
                console.log(theData);
                for (let i in  theData){//for each item in the object
                    let theDataObject = theData[i];
                    for(let arrayindex = 0; arrayindex < theDataObject.length; arrayindex++ ){
                       
                    $("#airportName").append(`<p>${theDataObject[arrayindex].name}</p>`);
                    $("#City").append(`<p>${theDataObject[arrayindex].city}</p>`);
                    $("#countryName").append(`<p>${theDataObject[arrayindex].countryName}</p>`);
                    $("#iataCode").append(`<p><a name="aiportCode" data-id="${theDataObject[arrayindex].iata}" href="#" >Arrivals</a></p>`);
            }
               
                }
        });
   });

   
    $('body').on('click', (event) => {//click event for when an element on the body is clicked
        event.preventDefault();
  //      console.log(event.target.id);//visual rep of the element that was clicked
        if (event.target.name === "aiportCode"){//if the event.target.id is true
            console.log($(event.target).attr("data-id"));//visual rep of the element
            updateServerWithData($(event.target).attr("data-id"));//call the method with event.target.id e.g. LHR as the parameter
        }
    });

    function updateServerWithData(arrivaldetails){
        $.ajax({
            url: '/set-arrivals',
                method: 'POST',
                data:{
                    airport: arrivaldetails
                }
            })
            .then((data) =>  {
                window.location.href = "/arrivals";

            });
    }


        $('#airportArrivals').on('click', (event) => {//click event for when an element on the body is clicked
        event.preventDefault();
  //      console.log(event.target.id);//visual rep of the element that was clicked
        if (event.target.name === "airportCode"){//if the event.target.id is true
            console.log($(event.target).attr("data-id"));//visual rep of the element
            updateServerWithFlightDetailsData($(event.target).attr("data-id"));//call the method with event.target.id e.g. LHR as the parameter
        }
    });

    function updateServerWithFlightDetailsData(flightdetails){
        $.ajax({
            url: '/set-details',
                method: 'POST',
                data:{
                    flight: flightdetails
                }
            })
            .then((data) =>  {
                window.location.href = "/flightDetails";
            });
    }
    
});