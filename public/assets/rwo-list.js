$(document).ready(function () {
  // TODO -> $("#date").val(new Date())

  $("form").on("submit", function () {
    let user = $("#user")
    let date = $("#date")
    let time = $("#time")
    let personNumber = $("#personNumber")
    let todo = {
      user: user.val(),
      date: date.val() + time.val(),
      personNumber: personNumber.val(),
    }

    $.ajax({
      type: "POST",
      url: "/rwo",
      data: todo,
      success: function (data) {
        location.reload()
      },
    })

    return false
  })

  $("li").on("click", function () {
    if (confirm("Törölni zseretné a bejegyzést?")) {
      let user = $(this).attr("id")
      $.ajax({
        type: "DELETE",
        url: "/rwo/" + user,
        success: function (data) {
          location.reload()
        },
      })
    } else {
      // Do nothing!
    }
  })
})
