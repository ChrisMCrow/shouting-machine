$(document).ready(function() {
  $("#form").submit(function(event) {
    var userInput = $("input#something").val() + "!!!!!";

    $(".shout").text(userInput.toUpperCase());

    event.preventDefault();
  });
})
