"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function () { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// exports.__esModule = true;
function createcardfooter(footer) {
    var footerhtml = document.createElement('div');
    footerhtml.classList.add('card-footer');
    var footerelements = "";
    if (footer.iswatch) {
        footerelements += '<img src="icons/preview.svg" onclick="togglemuted(event)" onkeydown="togglemuted(event)"  role="button" aria-label="preview" tabindex="0" id="footer-btn"  />';
    }
    else {
        footerelements += '<img src="icons/preview.svg" onclick="togglemuted(event)" onkeydown="togglemuted(event)"  class="image-muted" role="button" aria-label="preview" tabindex="0" id="footer-btn"/>';
    }
    if (footer.iscalender) {
        footerelements += '<img src="icons/manage course.svg" onclick="togglemuted(event)" onkeydown="togglemuted(event)"  role="button" aria-label="manage course" tabindex="0" id="footer-btn"  />';
    }
    else {
        footerelements += '<img src="icons/manage course.svg" onclick="togglemuted(event)" onkeydown="togglemuted(event)"  class="image-muted" role="button" aria-label="manage course" tabindex="0" id="footer-btn"  />';
    }
    if (footer.isgraded) {
        footerelements += '<img src="icons/grade submissions.svg" onclick="togglemuted(event)" onkeydown="togglemuted(event)"  role="button" aria-label="grade submission" tabindex="0" id="footer-btn"/>';
    }
    else {
        footerelements += '<img src="icons/grade submissions.svg" onclick="togglemuted(event)" onkeydown="togglemuted(event)"  class="image-muted" role="button" aria-label="grade submission" tabindex="0" id="footer-btn"/>';
    }
    if (footer.isreported) {
        footerelements += '<img src="icons/reports.svg" onclick="togglemuted(event)" onkeydown="togglemuted(event)"  role="button" aria-label="reports" tabindex="0" id="footer-btn"/>';
    }
    else {
        footerelements += '<img src="icons/reports.svg" onclick="togglemuted(event)" onkeydown="togglemuted(event)"  class="image-muted" role="button" aria-label="reports" tabindex="0" id="footer-btn"/>';
    }
    footerhtml.innerHTML = footerelements;
    return footerhtml;
}
function createcard(course) {
    var card = "";
    if (course.isfavourite) {
        card += '<span class="favourite" onclick="togglefavourite(this)" onkeypress="handleKeyPress(this,event)" tabindex="0" role="button" aria-label="Remove from favourites"></span>';
    }
    else {
        card += '<span class="unfavourite" onclick="togglefavourite(this)" onkeypress="handleKeyPress(this,event)" tabindex="0" role="button" aria-label="Add to favourites"></span>';
    }
    if (course.isexpired) {
        card += '<span class="expired" aria-label="Class is expired">EXPIRED</span>';
    }
    var cardcontent = "  \n  \n      <div class=\"card-contents\">\n        <div class=\"col-4\">\n          <img src=\"".concat(course.image,  "\" class=\"img-fluid\" alt=\"Image of Course\" />\n        </div>\n        <div class=\"col-8\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\" role=\"heading\" aria-label=\"course title\">").concat(course.title, "</h5>\n            <div class=\"content\">\n              <p class=\"subject\" aria-label=\"subject of course\">").concat(course.subject, "</p>\n              <p class=\"grade\" aria-label=\"Course grade\">\n                Grade ").concat(course.grade, "\n                <span class=\"additional\" aria-label=\"additional grade for course\">+" ).concat(course.additional_grade, "</span>\n              </p>\n            </div>\n            <div class=\"info-set\">\n            ").concat(course.units ? '<div class="info"><p class="text" aria-label="units of course"><span >' + course.units + '</span> units</p></div>' : " ", "\n            ").concat(course.lessons ? '<div class="info"><p class="text" aria-label="number of lessons of course"><span>' + course.lessons + '</span> Lessons</p></div>' : " ", "\n            ").concat(course.topics ? '<div class="info"><p class="text" aria-label="Total number of topics included in course"><span>' + course.topics + '</span> topics</p></div>' : " ", "\n  \n  \n            </div>");
    card += cardcontent;
    var dropdown = '<div class="dropdown" role="dropdown">' +
               '<select name="classes" aria-label="Select a class">';
        if (course.classes.length == 0) {
                dropdown += '<option value="s1">No Classes</option>';
            }       
        else {
            for (var index = 0; index < course.classes.length; index++) {
                dropdown += '<option value="' + course.classes[index] + '">' + course.classes[index] + '</option>';
            }
        }
dropdown += '</select></div>';

    card += dropdown;
    var contents = "\n            <div class=\"content\">\n            ".concat(course.students ? '<p class="students">' + course.students + ' students</p>' : " ", "\n  \n              <p class=\"dates\">").concat(course.start_date ? course.start_date : " ", "  ").concat(course.end_date ? "-" + course.end_date : " ", "</p>\n            </div>\n          </div>\n        </div>\n      </div>\n  ");
    card += contents;
    return card;
}
function show_course_cards(Courses) {
    var propertyContainer = document.getElementsByClassName('inner-container')[0];
    for (var index = 0; index < Courses.length; index++) {
        var card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = createcard(Courses[index]);
        var footerhtml = createcardfooter(Courses[index].footer);
        card.appendChild(footerhtml);
        propertyContainer.appendChild(card);
    }
}
function getdata(url) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(url)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    show_course_cards(data);
                    return [2 /*return*/];
            }
        });
    });
}
getdata("../Courses.json");
// Interaction in dashboard
// alerts onhover interaction
var alert = document.querySelector(".alert");
var alerts = document.getElementsByClassName("alerts")[0];
var onalert = false;

// function to open the pop-up
function openAlert() {
    alerts.classList.remove("hide");
    document.querySelector(".alert a img").style.filter = "brightness(0) invert(1)";
    document.querySelector(".alert a span").style.display = "none";
    onalert = true;
}

// function to close the pop-up
function closeAlert() {
    onalert = false;
    alerts.classList.add("hide");
    document.querySelector(".alert a img").style.filter = "none";
    document.querySelector(".alert a span").style.display = "flex";
}

alert.addEventListener("mouseenter", function () {
    openAlert();
    document.querySelector('.alerts').setAttribute('aria-expanded','true');
});

alerts.addEventListener("mouseenter", function () {
    openAlert();
    document.querySelector('.alerts').setAttribute('aria-expanded','true');
});

alerts.addEventListener("mouseleave", function () {
    closeAlert();
    document.querySelector('.alerts').setAttribute('aria-expanded','false');
});

alert.addEventListener("mouseleave", function () {
    setTimeout(function () {
        if (!onalert) {
            closeAlert();
            document.querySelector('.alerts').setAttribute('aria-expanded','false');
        }
    }, 100);
});

// add event listener for Enter key
alert.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        openAlert();
        document.querySelector('.alerts').setAttribute('aria-expanded','true');
    }
});
alerts.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        openAlert();
        document.querySelector('.alerts').setAttribute('aria-expanded','true');
    }
});

// add event listener for Escape key
alerts.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeAlert();
        document.querySelector('.alerts').setAttribute('aria-expanded','false');

    }
});
alert.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeAlert();
        document.querySelector('.alerts').setAttribute('aria-expanded','false');
    }
});



// Notifications hover effects
var announcement = document.querySelector(".announcement");
var announcements = document.getElementsByClassName("announcements")[0];
var onannouncement = false;
function openAnnouncement(){
    onannouncement = true;
    announcements.classList.remove("hide");
    document.querySelector(".announcement a img").style.filter = "brightness(0) invert(1)";
    document.querySelector(".announcement a span").style.display = "none";

}
function closeAnnouncement(){
    onannouncement = false;
    announcements.classList.add("hide");
    document.querySelector(".announcement a img").style.filter = "none";
    document.querySelector(".announcement a span").style.display = "flex";
}
announcement.addEventListener("mouseenter", function () {
    openAnnouncement();
    document.querySelector('.announcements').setAttribute('aria-expanded','true');
});
announcements.addEventListener("mouseenter", function () {
    openAnnouncement();
    document.querySelector('.announcements').setAttribute('aria-expanded','true');
});
announcements.addEventListener("mouseleave", function () {
    closeAnnouncement();
    document.querySelector('.announcements').setAttribute('aria-expanded','false');
});
announcement.addEventListener("mouseleave", function () {
    console.log("card-title");
    onannouncement = false;
    setTimeout(function () {
        if (!onannouncement) {
            closeAnnouncement();
            document.querySelector('.announcements').setAttribute('aria-expanded','false');
        }
    }, 100);
});
announcement.addEventListener("keydown",function(event){
    if(event.key === "Enter"){
        openAnnouncement();
        document.querySelector('.announcements').setAttribute('aria-expanded','true');
    }
});
announcements.addEventListener("keydown",function(event){
    if(event.key === "Enter"){
        openAnnouncement();
        document.querySelector('.announcements').setAttribute('aria-expanded','true');
    }
});
announcements.addEventListener("keydown",function(event){
    if(event.key === "Escape"){
        closeAnnouncement();
        document.querySelector('.announcements').setAttribute('aria-expanded','false');
    }
})
announcement.addEventListener("keydown",function(event){
    if(event.key === "Escape"){
        closeAnnouncement();
        document.querySelector('.announcements').setAttribute('aria-expanded','false');
    }
})

function togglemuted(event) {
    var isKeyboardEvent = event.type === "keydown";

    // Get the target element that was clicked or focused
    var target = isKeyboardEvent ? event.target : event.currentTarget;
    if (isKeyboardEvent && event.key !== "Enter") {
        // If the event was triggered by a keyboard event that was not the "Enter" key, do nothing
        return;
      }
  
    // Toggle the "image-muted" class on the target element
    target.classList.toggle("image-muted");
  
    // If the event was triggered by a keyboard event, prevent default action
    if (isKeyboardEvent) {
      event.preventDefault();
    }
    
}

function togglefavourite(x) {
    x.classList.toggle("unfavourite");
    if (x.classList.contains("unfavourite")) {
      x.setAttribute("aria-label", "Add to favourites");
    } else {
      x.setAttribute("aria-label", "Remove from favourites");
    }
  }
  function handleKeyPress(spanElement, event) {
    if (event.key === 'Enter') {
      togglefavourite(spanElement);
    }
  }
function tooglecheckmark(x) {
    x.classList.toggle("abort");
}

var navdropdown = document.querySelectorAll(".nav-item.dropdown ");
var _loop_1 = function (index) {
    var element = navdropdown[index];
    element.addEventListener("click", function () {
        for (var it = 0; it < navdropdown.length; it++) {
            navdropdown[it].classList.remove("select");
        }
        element.classList.add("select");
    });
};
for (var index = 0; index < navdropdown.length; index++) {
    _loop_1(index);
}
// Navbar interaction onhover display menu and onmouseout hide the menu
var toggle = document.getElementsByClassName("navbar-toggler")[0];
var navbar = document.getElementsByClassName("navbar-nav")[0];
var onnav = false;
toggle.addEventListener("mouseenter", function () {
    navbar.classList.remove("hide");
    onnav = true;
});
navbar.addEventListener("mouseenter", function () {
    onnav = true;
    navbar.classList.remove("hide");
});
navbar.addEventListener("mouseleave", function () {
    onnav = false;
    navbar.classList.add("hide");
    for (var it = 0; it < navdropdown.length; it++) {
        navdropdown[it].classList.remove("select");
    }
});
toggle.addEventListener("mouseleave", function () {
    onnav = false;
    setTimeout(function () {
        if (!onnav) {
            navbar.classList.add("hide");
            for (var it = 0; it < navdropdown.length; it++) {
                navdropdown[it].classList.remove("select");
            }
        }
    }, 100);
});
// Add keyboard event listeners to the hamburger menu button and its associated dropdown menus
var hamburger = document.getElementsByClassName("navbar-toggler")[0];
var dropdowns = document.getElementsByClassName("nav-dropdown");
var links = document.querySelectorAll(".nav-link");

// When the hamburger menu button is focused, show the navbar and select the first link
hamburger.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) { // enter key
    event.preventDefault();
    navbar.classList.remove("hide");
    onnav = true;
    links[0].focus(); // focus on the first link
  }
});

// When the navbar is shown, allow arrow key navigation within the hamburger menu
document.addEventListener("keydown", function(event) {
  if (onnav) {
    if (event.keyCode === 27 || event.keyCode === 9) { // escape or tab key
      event.preventDefault();
      navbar.classList.add("hide");
      onnav = false;
    } else if (event.keyCode === 37 || event.keyCode === 38) { // left or up arrow key
      event.preventDefault();
      var linkIndex = Array.prototype.indexOf.call(links, document.activeElement);
      if (linkIndex > 0) {
        links[linkIndex - 1].focus();
      }
    } else if (event.keyCode === 39 || event.keyCode === 40) { // right or down arrow key
      event.preventDefault();
      var linkIndex = Array.prototype.indexOf.call(links, document.activeElement);
      if (linkIndex < links.length - 1) {
        links[linkIndex + 1].focus();
      }
    }
  }
});

// When a dropdown menu is shown, allow keyboard navigation within the menu
for (var i = 0; i < dropdowns.length; i++) {
  dropdowns[i].addEventListener("keydown", function(event) {
    var dropdownLinks = this.querySelectorAll("li");
    var firstLink = dropdownLinks[0].querySelector("a");
    var lastLink = dropdownLinks[dropdownLinks.length - 1].querySelector("a");
    if (event.keyCode === 27) { // escape key
      event.preventDefault();
      hamburger.focus(); // focus back on the hamburger menu button
      navbar.classList.add("hide");
      for (var it = 0; it < navdropdown.length; it++) {
        navdropdown[it].classList.remove("select");
      }
    } else if (event.keyCode === 9) { // tab key
      if (!event.shiftKey && document.activeElement === lastLink) {
        event.preventDefault();
        hamburger.focus(); // focus back on the hamburger menu button
      }
    }
  });
}

// When a link within a dropdown menu is focused, add a 'select' class to its parent dropdown item
for (var j = 0; j < links.length; j++) {
  links[j].addEventListener("focus", function(event) {
    event.target.parentElement.parentElement.classList.add("select");
  });
  links[j].addEventListener("blur", function(event) {
    event.target.parentElement.parentElement.classList.remove("select");
  });
}
