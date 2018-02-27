//reservations

  $("#add-btn").on("click", function(event) {
    event.preventDefault();
    console.log("something saucy");
    var  = {
      name: $("#name").val().trim(),
      role: $("#role").val().trim(),
      age: $("#age").val().trim(),
      forcePoints: $("#force-points").val().trim()
    };

    // Question: What does this code do??
    $.post("/api/reserve", newReservation)
    .then(function(data) {
      console.log(data);
      alert("Adding Reservationss...");
    });
  });
