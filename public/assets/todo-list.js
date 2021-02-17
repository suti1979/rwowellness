$(document).ready(function () {
  $("form").on("submit", function () {
    var item = $("form input")
    var todo = { item: item.val() }

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
    var item = $(this).attr("id")
    $.ajax({
      type: "DELETE",
      url: "/rwo/" + item,
      success: function (data) {
        location.reload()
      },
    })
  })
})
