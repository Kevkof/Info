/* Configuration - feel free to change */
var site_name = "APB Character List"

// Hvis JSON filen ikke er udfyldt, vises denne information istedet.
/* Configuration - feel free to change */




var charsURL = "/data/citadel/chars.json";
var currentIndex = 0;
var chars = [];
var inner = "";

window.onload = function () {
  // Setup
  document.title = site_name;

  // Fetch tracks from local json
  $.getJSON(charsURL, function (data) {
    data.forEach(element => {
      chars.push(element);
    });
    console.log(data);
    console.log(chars)
    for (x in chars) {
       inner += "<a href=\"Citadel/" + chars[x].name + "\">" + chars[x].name + ", " + chars[x].gender + " " + chars[x].faction + "</a>";
      inner += " <img src=\"" + rankFaction(chars[x].faction, chars[x].rating) + "\" height=\"20\" width=\"20\"/><br />";
      console.log(inner);
      }
    document.getElementById("citadel_chars").innerHTML = inner;


    // selects the correct rank/faction symbol
    function rankFaction(faction, rating) {
      var response = "/Images/"
      switch (faction) {
        case 'Criminal':
          response += 'crim';
          break;

        default:
          response += 'enfo'
          break;
      }

      if (0 < rating && rating < 10) {
        response += 'O.png'
      }
      if (10 <= rating && rating < 20) {
        response += '10.png'
      }
      if (20 <= rating && rating < 30) {
        response += '20.png'
      }
      if (30 <= rating && rating < 40) {
        response += '30.png'
      }
      if (40 <= rating && rating < 50) {
        response += '40.png'
      }
      if (50 <= rating && rating < 60) {
        response += '50.png'
      }
      if (60 <= rating && rating < 70) {
        response += '60.png'
      }
      if (70 <= rating && rating < 80) {
        response += '70.png'
      }
      if (80 <= rating && rating < 90) {
        response += '80.png'
      }
      if (90 <= rating && rating < 100) {
        response += '90.png'
      }
      if (100 <= rating && rating < 110) {
        response += '100.png'
      }
      if (110 <= rating && rating < 120) {
        response += '110.png'
      }
      if (120 <= rating && rating < 130) {
        response += '120.png'
      }
      if (130 <= rating && rating < 140) {
        response += '130.png'
      }
      if (140 <= rating && rating < 150) {
        response += '140.png'
      }
      if (150 <= rating && rating < 160) {
        response += '150.png'
      }
      if (160 <= rating && rating < 170) {
        response += '160.png'
      }
      if (170 <= rating && rating < 180) {
        response += '170.png'
      }
      if (180 <= rating && rating < 195) {
        response += '180.png'
      }
      if (195 <= rating && rating < 205) {
        response += '195.png'
      }
      if (205 <= rating && rating < 215) {
        response += '205.png'
      }
      if (215 <= rating && rating < 225) {
        response += '215.png'
      }
      if (225 <= rating && rating < 235) {
        response += '225.png'
      }
      if (235 <= rating && rating < 245) {
        response += '235.png'
      }
      if (245 <= rating && rating < 255) {
        response += '245.png'
      }
      if (255 <= rating && rating < 265) {
        response += '255.png'
      }
      return response;
    }

  })
};