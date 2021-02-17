$(document).ready(function () {
  $("form").on("submit", function () {
    let user = $("#user")
    let date = $("#date")
    let personNumber = $("#personNumber")
    let todo = {
      user: user.val(),
      date: date.val(),
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
    let user = $(this).attr("id")
    $.ajax({
      type: "DELETE",
      url: "/rwo/" + user,
      success: function (data) {
        location.reload()
      },
    })
  })
})
