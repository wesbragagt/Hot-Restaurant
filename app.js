function display(){
    $.get("/api/reservations", function (data) {
        if (data) {
            console.log(data);
            for (i = 0; i < 5; i++) {
                console.log(data[i]);
                var person = $("<li>");
                person.text(data[i].name);
                $("#tableList").append(person);
            }
        } 
    });
    $.get("/api/reservations", function (data) {
        if (data) {
            for (i = 5; i < data.length; i++) {
                var person = $("<li>");
                person.text(data[i].name);
                $("#waitList").append(person);
            }
        } 
    });
}

$( document ).ready(function() {
display();
    $("#submit-btn").on("click", function(event) {
        event.preventDefault();
        var newReservation = {
            name: $("#reserve-name")
                .val()
                .trim(),
            email: $("#reserve-phone")
                .val()
                .trim(),
            phone: $("#reserve-email")
                .val()
                .trim()
        };
        $.post("/api/reservations", newReservation).then(function(data) {
            console.log("add.html", data);
        });
        console.log(newReservation);
        $("#reserve-name").val("");
        $("#reserve-phone").val("");
        $("#reserve-email").val("");
    });

    

});