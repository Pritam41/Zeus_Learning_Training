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
        footerelements += '<img src="assets/icons/preview.svg" onclick="togglemuted(this)" />';
    }
    else {
        footerelements += '<img src="assets/icons/preview.svg" onclick="togglemuted(this)" class="image-muted"/>';
    }
    if (footer.iscalender) {
        footerelements += '<img src="assets/icons/manage course.svg" onclick="togglemuted(this)" />';
    }
    else {
        footerelements += '<img src="assets/icons/manage course.svg" onclick="togglemuted(this)" class="image-muted"/>';
    }
    if (footer.isgraded) {
        footerelements += '<img src="assets/icons/grade submissions.svg" onclick="togglemuted(this)" />';
    }
    else {
        footerelements += '<img src="assets/icons/grade submissions.svg" onclick="togglemuted(this)" class="image-muted"/>';
    }
    if (footer.isreported) {
        footerelements += '<img src="assets/icons/reports.svg" onclick="togglemuted(this)" />';
    }
    else {
        footerelements += '<img src="assets/icons/reports.svg" onclick="togglemuted(this)" class="image-muted"/>';
    }
    footerhtml.innerHTML = footerelements;
    return footerhtml;
}
function createcard(course) {
    var card = "";
    if (course.isfavourite) {
        card += '<span class="favourite" onclick="togglefavourite(this)"></span>';
    }
    else {
        card += '<span class="unfavourite" onclick="togglefavourite(this)"></span>';
    }
    if (course.isexpired) {
        card += '<span class="expired">EXPIRED</span>';
    }
    var cardcontent = "  \n  \n      <div class=\"card-contents\">\n        <div class=\"col-4\">\n          <img src=\"".concat(course.image, "\" class=\"img-fluid\" alt=\"...\" />\n        </div>\n        <div class=\"col-8\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">").concat(course.title, "</h5>\n            <div class=\"content\">\n              <p class=\"subject\">").concat(course.subject, "</p>\n              <p class=\"grade\">\n                Grade ").concat(course.grade, "\n                <span class=\"additional\">+").concat(course.additional_grade, "</span>\n              </p>\n            </div>\n            <div class=\"info-set\">\n            ").concat(course.units ? '<div class="info"><p class="text"><span>' + course.units + '</span> units</p></div>' : " ", "\n            ").concat(course.lessons ? '<div class="info"><p class="text"><span>' + course.lessons + '</span> Lessons</p></div>' : " ", "\n            ").concat(course.topics ? '<div class="info"><p class="text"><span>' + course.topics + '</span> topics</p></div>' : " ", "\n  \n  \n            </div>");
    card += cardcontent;
    var dropdown = "\n            <div class=\"dropdown\">\n              ";
    if (course.classes.length == 0) {
        dropdown += "<select value=\"classes\" name=\"classes\" class=\"noclasses\">";
        dropdown += "<option value=\"s1\">No Classes</option>";
    }
    else {
        dropdown += "<select value=\"classes\" name=\"classes\">";
        for (var index = 0; index < course.classes.length; index++) {
            dropdown += "<option value=\"".concat(course.classes[index], "\">").concat(course.classes[index], "</option>");
        }
    }
    dropdown += "\n  </select>\n  </div>\n  ";
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
alert.addEventListener("mouseenter", function () {
    alerts.classList.remove("hide");
    document.querySelector(".alert a img").style.filter = "brightness(0) invert(1)";
    document.querySelector(".alert a span").style.display = "none";
    onalert = true;
});
alerts.addEventListener("mouseenter", function () {
    onalert = true;
    alerts.classList.remove("hide");
    document.querySelector(".alert a img").style.filter = "brightness(0) invert(1)";
    document.querySelector(".alert a span").style.display = "none";
});
alerts.addEventListener("mouseleave", function () {
    onalert = false;
    alerts.classList.add("hide");
    document.querySelector(".alert a img").style.filter = "none";
    document.querySelector(".alert a span").style.display = "flex";
});
alert.addEventListener("mouseleave", function () {

    onalert = false;
    setTimeout(function () {
        if (!onalert) {
            alerts.classList.add("hide");
            document.querySelector(".alert a img").style.filter = "none";
            document.querySelector(".alert a span").style.display = "flex";
        }
    }, 100);
});

// Allow the user to open the pop-up menu by pressing Enter
alert.addEventListener("keydown", function (event) {
    if (event.code === "Enter" || event.code === "Space") {
        event.preventDefault();
        alerts.classList.remove("hide");
        document.querySelector(".alert a img").style.filter = "brightness(0) invert(1)";
        document.querySelector(".alert a span").style.display = "none";
        onalert = true;
    }
});

// Close the pop-up menu when the user presses Esc
alerts.addEventListener("keydown", function (event) {
    if (event.code === "Escape") {
        event.preventDefault();
        onalert = false;
        alerts.classList.add('hide');
        document.querySelector(".alert a img").style.filter = "none";
        document.querySelector(".alert a span").style.display = "flex";
    }
});

// Notifications hover effects
var announcement = document.querySelector(".announcement");
var announcements = document.getElementsByClassName("announcements")[0];
var onannouncement = false;
announcement.addEventListener("mouseenter", function () {
    announcements.classList.remove("hide");
    document.querySelector(".announcement a img").style.filter = "brightness(0) invert(1)";
    document.querySelector(".announcement a span").style.display = "none";
    onannouncement = true;
});
announcements.addEventListener("mouseenter", function () {
    onannouncement = true;
    announcements.classList.remove("hide");
    document.querySelector(".announcement a img").style.filter = "brightness(0) invert(1)";
    document.querySelector(".announcement a span").style.display = "none";
});
announcements.addEventListener("mouseleave", function () {
    onannouncement = false;
    announcements.classList.add("hide");
    document.querySelector(".announcement a img").style.filter = "none";
    document.querySelector(".announcement a span").style.display = "flex";
});
announcement.addEventListener("mouseleave", function () {
    console.log("card-title");
    onannouncement = false;
    setTimeout(function () {
        if (!onannouncement) {
            announcements.classList.add("hide");
            document.querySelector(".announcement a img").style.filter = "none";
            document.querySelector(".announcement a span").style.display = "flex";
        }
    }, 100);
});
//allow user the open on enter button
announcement.addEventListener('keydown',function(event){
    if(event.code === "Enter" || event.code === "Space"){
        event.preventDefault();
        announcements.classList.remove('hide');
        document.querySelector("announcement a img").style.filter = "brightness(0) invert(1)";
        document.querySelector("announcement a span").style.display = "none";
        onalert=true;

    }
});
//close on esc
announcement.addEventListener('keydown',function(event){
    if(event.code === "Escape"){
        event.preventDefault();
        onalert = false;
        announcements.classList.add('hide');
        document.querySelector("announcement a img").style.filter = "none";
        document.querySelector("announcement a span").style.display ="flex";
    }
})
function togglemuted(x) {
    x.classList.toggle("image-muted");
}
function togglefavourite(x) {
    x.classList.toggle("unfavourite");
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