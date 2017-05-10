    // CLIENT_ID : GHRILCJUTG0XCRR1SB3SXD52IPBKCB1PWLUNVSW45KQ5S4HA


    // CLIENT_SECRET : HD35RTRLE24TWUHLFDWM3OJNT2ILW44CA1TRO20AJRZ5JSZ

 //https://api.foursquare.com/v2/venues/search?near=60646&query=park&client_id=GHRILCJUTG0XCRR1SB3SXD52IPBKCB1PWLUNVSW45KQ5S4HA&client_secret=HD35RTRLE24TWUHLFDWM3OJNT2ILW44CA1TRO20AJRZ5JSZS&v=20170122
    
    //google maps api key : AIzaSyC6rKKqP2muUpfaai3uth3ro_e97jcUYiQ

    $(document).ready(function() {

        $("#button").click(function() {

            var zipcode = $("#zip").val();
            var url = "https://api.foursquare.com/v2/venues/search?near=" +
                zipcode + "&query=park&client_id=GHRILCJUTG0XCRR1SB3SXD52IPBKCB1PWLUNVSW45KQ5S4HA&client_secret=HD35RTRLE24TWUHLFDWM3OJNT2ILW44CA1TRO20AJRZ5JSZS" +
                "&v=20170122&m=foursquare";


            var parkapiId = "4bf58dd8d48988d163941735"

            console.log(url);

            $.get(url, function(data) {

                $("#address").append(data.response.venues[0].location.address);

                $("#city").append(data.response.venues[0].location.city);

                $("#country").append(data.response.venues[0].location.country);

                $("#state").append(data.response.venues[0].location.state);

                $("#crosstreet").append(data.response.venues[0].location.crossStreet);

                $("#name").append(data.response.venues[0].name);

            });

        });





    });












 