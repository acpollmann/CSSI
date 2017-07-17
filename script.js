
function comment() {
  var userComment = $('#comment').val();
    $("#result").append("<ul> <li> Your comment: " + userComment + " </li></ul>");
}

function setup() {
  $("#submit_button").click(comment);
}



$(document).ready(setup)
