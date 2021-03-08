const date = new Date()
saveDate(date)
const months = [
  "Január",
  "Február",
  "Március",
  "Április",
  "Május",
  "Június",
  "Július",
  "Augusztus",
  "Szeptember",
  "Október",
  "November",
  "December",
]
const weekdays = [
  "Vasárnap",
  "Hétfő",
  "Kedd",
  "Szerda",
  "Csütörtök",
  "Pénetek",
  "Szombat",
]

//current year + 1
for (let i = 0; i < 2; i++) {
  let e = document.createElement("option")
  e.value = date.getFullYear() + i
  e.innerHTML = date.getFullYear() + i
  $("#year").append(e)
}

// current month
for (let i = 0; i < 12; i++) {
  let e = document.createElement("option")
  e.value = i
  e.innerHTML = months[i]
  if (i == date.getMonth()) {
    e.selected = i
  }
  $("#month").append(e)
}

// current days
function daysWrite() {
  let days = daysInMonth(date.getFullYear(), date.getMonth() + 1)
  // to delete previous months option days numbers
  $("#day").empty()

  for (let i = 1; i <= days; i++) {
    let e = document.createElement("option")
    e.value = i
    e.innerHTML = i
    if (i == date.getDate()) {
      e.selected = i
    }
    $("#day").append(e)
  }
}
daysWrite()

// current hour
for (let i = 1; i <= 24; i++) {
  let e = document.createElement("option")
  e.value = i
  e.innerHTML = i
  if (i == date.getHours()) {
    e.selected = i
  }
  $("#hour").append(e)
}
// current minute
let selectMinute = false
for (let i = 0; i <= 5; i++) {
  let e = document.createElement("option")
  let min = i * 10
  e.value = min // only every 10 minutes
  e.innerHTML = min
  //!!!!!!!!!! not gooooood
  if (!selectMinute && min > date.getMinutes() - 10) {
    date.setMinutes(min)
    e.selected = min
    selectMinute = true
  }
  $("#minute").append(e)
}

// event listeners
$("#year").change(() => {
  date.setFullYear($("#year").val())
  save(date)
})

$("#month").change(() => {
  date.setDate(1)
  date.setMonth($("#month").val())
  daysWrite()
  saveDate(date)
})

$("#day").change(() => {
  date.setDate($("#day").val())
  saveDate(date)
})

$("#hour").change(() => {
  date.setHours($("#hour").val())
  saveDate(date)
})

$("#minute").change(() => {
  date.setMinutes($("#minute").val())
  saveDate(date)
})

// helpers
function daysInMonth(year, month) {
  return new Date(year, month, 0).getDate()
}

function saveDate(date) {
  $("#date").val(date)
  //console.log(date)
}

// year.dataset.year = date.getFullYear()
