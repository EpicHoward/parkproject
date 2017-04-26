    // CLIENT_ID : GHRILCJUTG0XCRR1SB3SXD52IPBKCB1PWLUNVSW45KQ5S4HA


    // CLIENT_SECRET : HD35RTRLE24TWUHLFDWM3OJNT2ILW44CA1TRO20AJRZ5JSZ



    $(document).ready(function() {

        $("#button").click(function() {

            var zipcode = $("Zip").val();
            var url = "https://api.foursquare.com/v2/venues/search?near=" +
                zipcode + "&query=park&client_id=GHRILCJUTG0XCRR1SB3SXD52IPBKCB1PWLUNVSW45KQ5S4HA&client_secret=HD35RTRLE24TWUHLFDWM3OJNT2ILW44CA1TRO20AJRZ5JSZS"
            var parkapiId = "4bf58dd8d48988d163941735"

            $.get(url, function(data) {

                $("#address").append(data.response.venuses[0].location.addresss);

                $("#city").append(data.response.venuses[0].location.city);

                $("#country").append(data.response.venuses[0].location.country);

                $("#state").append(data.response.venuses[0].location.state);

                $("#crosstreet").append(data.response.venuses[0].location.crossStreet);




            });

        });





    });











    //For (x=0, x<venues.lenght, x++);
    /* for (x = 0; x < response.response.venues.length; x++) {
            if (parkAPIid === response.response.venues[x].categories[0].id) {
                console.log("It's a park:" + x);
            }
        }

    });
*/







    /*
                           
    First run code to look into the reponse then
     venues then
     look
     for catagorie parkapiId
     then
     return name, adress, crossStreet

      
     */

    //https://api.foursquare.com/v2/venues/search?near=60646&query=park&client_id=GHRILCJUTG0XCRR1SB3SXD52IPBKCB1PWLUNVSW45KQ5S4HA&client_secret=HD35RTRLE24TWUHLFDWM3OJNT2ILW44CA1TRO20AJRZ5JSZS&v=20170122
    