$(document).ready(function() {
  $("#quizform").submit(function(event){
    // alert("hi");

    var age = parseInt($("input").val());
    var pants = $("#pants").val();

    if (age < 15 && pants === "jeans") {
      $("#young").show();
      $("#middle, #dolly").hide();
    } else if (age >= 15 && age < 35 && pants === "cargo") {
      $("#dolly").show();
      $("#young, #middle").hide();
    } else if (age >= 15 && age < 35 ) {
        $("#middle").show();
        $("#young, #dolly").hide();
    } else if (age >= 35) {
      $("#dolly").show();
      $("#middle, #young").hide();
    }
    event.preventDefault();
    // alert("hi");
  });
});
