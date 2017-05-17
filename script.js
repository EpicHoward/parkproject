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










            // add append parameters here and get it inside the i-frame




            console.log(url);

            $.get(url, function(data) {

                var place = "https://www.google.com/maps/embed/v1/place?" + "key=AIzaSyC6rKKqP2muUpfaai3uth3ro_e97jcUYiQ" + "&q=" +

                    data.response.venues[0].location.address;


                console.log(place)



                $("#map").attr("src", place);

                $("#address").empty().append(data.response.venues[0].location.address);

                $("#city").empty().append(data.response.venues[0].location.city);

                $("#country").empty().append(data.response.venues[0].location.country);

                $("#state").empty().append(data.response.venues[0].location.state);

                $("#crosstreet").empty().append(data.response.venues[0].location.crossStreet);

                $("#name").empty().append(data.response.venues[0].name);

            });

        });





    });
    