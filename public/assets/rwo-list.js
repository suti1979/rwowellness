$(document).ready(function () {
  $("form").on("submit", function () {
    let user = $("#user")
    let date = $("#date")
    let personNumber = $("#personNumber")
    let duration = $("#duration")
    let todo = {
      user: user.val(),
      date: date.val(),
      personNumber: personNumber.val(),
      duration: duration.val(),
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
    if (confirm("Törölni szeretné a bejegyzést?")) {
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
