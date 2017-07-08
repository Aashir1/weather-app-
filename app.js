$(document).ready(function () {
    $('label').on('click',function () {/*uncomment the button in html before use*/
        var city = $('#city').val();
        
       
        if (city != "") {
            $('#error').html('');
            $.ajax({
                url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric' + '&APPID=c924444369c69301f0834daccf34fed9',
                type: "GET",
                datatype: "jsonp",
                success: function (data) {
                    console.log(data);
                   var wedges = show(data);
                   $('#show').html(wedges);
                   $('#city').val('');

                }
            });
        }
        else {
            $('#error').html('Let first write city name');
        }
    });
});

function show(data){
return     "<h3 style ='font-size: 48px;' >City is " + data.name + ", " + data.sys.country + "</h3>" + 
           "<h3><strong>Weather: </strong> <span style ='font-weight: 300'>" + data.weather[0].main + "</span></h3>" + 
           "<h3><strong>Description: </strong><span style ='font-weight: 300'>" + data.weather[0].description + "</span></h3>" +
           "<h3><strong>Temperature: </strong><span style ='font-weight: 300'>" + data.main.temp + "</span></h3>" +
           "<h3><strong>Max-Temperature: </strong><span style ='font-weight: 300'>" + data.main.temp_max + "</span></h3>" +
           "<h3><strong>Min-Temperature: </strong><span style ='font-weight: 300'>" + data.main.temp_min + "</span></h3>" +
           "<h3><strong>Humidity: </strong><span style ='font-weight: 300'>" + data.main.humidity + "</span></h3>" +
           "<h3><strong>Wind Speed: </strong><span style ='font-weight: 300'>" + data.wind.speed + "</span></h3>" +
           "<h3><strong>Wind Deg: </strong><span style ='font-weight: 300'>" + data.wind.deg + "</span></h3>" 
}

/*$(document).ready(function () {
       var city = 'karachi';
        if (city != "") {
            $('#error').html('');
            $.ajax({
                url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric' + '&APPID=c924444369c69301f0834daccf34fed9',
                
                type: "GET",
                datatype: "jsonp",
                success: function (data) {
                    console.log(data);

                }
            });
        }
        else {
            $('#error').html('Let first write city name');
        }
});
*/
