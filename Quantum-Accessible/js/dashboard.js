//cards
const mainBodyEl = document.querySelector(".main-body");
class CardType {
    id;
    name;
    imgUrl;
    subject;
    grade;
    units;
    lessons;
    topics;
    classes;
    students;
    startDate;
    endDate;
    isStarred;
    isExpired;
}
const setNumofCourses = (courses) => {
    let NumofCoursesEl = document.querySelector("#course-num");
    NumofCoursesEl.innerText = courses.length;
    let filterCourseShowEl = document.querySelector("#filter-course-num");
    filterCourseShowEl.innerText = `Showing ${courses.length} of ${courses.length} Courses`;
};
const createStarImgStr = (course) => {
    if (course.isStarred) {
        return ` 
            <img id="favourite" src="assets/icons/favourite.svg" alt="Favourite Icon">
        `;
    }
    else {
        return `
            <img id="favourite" src="assets/icons/favourite.svg" alt="Favourite Icon" style="filter: grayscale(1);">
        `;
    }
};
const createclassDropdownStr = (course) => {
    let classDropdownEl = document.createElement("div");
    classDropdownEl.classList.add("teacher-dropdown");
    if (!course.classes) {
        let selectEl = `
                    <select class="option-disabled" disabled>  
                        <option value = "No Classes"> No Classes</option>  
                    </select>
            `;
        classDropdownEl.innerHTML = selectEl;
    }
    else {
        let selectEl = document.createElement("select");
        selectEl.setAttribute("aria-label", "Select Class");
        // let firstClass:boolean = true;
        for (let cls of course.classes) {
            let optionEl = document.createElement("option");
            optionEl.value = `${cls}`;
            optionEl.innerText = `${cls}`;
            // if(firstClass){
            //     optionEl.setAttribute("selected",true);
            //     firstClass = false;
            // }
            selectEl.appendChild(optionEl);
        }
        classDropdownEl.appendChild(selectEl);
    }
    return classDropdownEl.outerHTML;
};
const createCourseDateEl = (course) => {
    let courseDateEl = `
            <div class="course-dates flex-row">
        `;
    if (course.students) {
        courseDateEl += `
                    <p>${course.students} Students</p>
            `;
    }
    if (course.startDate && course.endDate) {
        courseDateEl += `
                    <p class="vertical-line"> &#124;</p>
                    <p>${course.startDate} - ${course.endDate}</p>
                </div>
            `;
    }
    else {
        courseDateEl += `
                </div>
            `;
    }
    return courseDateEl;
};
const createCardValidityStr = (course) => {
    let cardValidityStr = `<article class="card" aria-labelledby="${course.id}">`;
    if (course.isExpired) {
        cardValidityStr = `
                <article class="card validity-container" aria-labelledby="${course.id}">
                <div class="card-validity">
                    EXPIRED
                </div>
            `;
    }
    return cardValidityStr;
};
const renderCards = (courses) => {
    let cardEl = "";
    setNumofCourses(courses);
    for (let course of courses) {
        let gradeStr = course.grade.split(" ");
        let starImg = createStarImgStr(course);
        let classDropdownStr = createclassDropdownStr(course);
        let courseDateElement = createCourseDateEl(course);
        let cardValidityString = createCardValidityStr(course);
        let cardFooter = `
            <aside class="card-footer">
                <button class="BTN" role="presentation">
                    <img class="preview-img" src="assets/icons/preview.svg" 
                    alt="Preview course ${course.name}" role="button">
                </button>
                <button class="BTN" role="presentation">
                    <img class="manage-course-img" src="assets/icons/manage course.svg" 
                    alt="Manage Course ${course.name}" role="button">
                </button>
                <button class="BTN" role="presentation">
                    <img class="grade-submission-img" src="assets/icons/grade submissions.svg" 
                    alt="Grade Submisssion for ${course.name}" role="button">
                </button>
                <button class="BTN" role="presentation">
                    <img class="reports-img" src="assets/icons/reports.svg" 
                    alt="Get reports for ${course.name} " role="button">
                </button>
            </aside>
        `;
        cardEl += `
        ${cardValidityString}
            <div class="flex-row">
                <img class="card-image" src="${course.imgUrl}" alt="${course.name}"> 
                <div class="card-body">
                    <h3 id="${course.id}" class="course-name">${course.name}</h3>
                    <div class="sub-grade flex-row">
                        <p class="subject">${course.subject}</p>
                        <p class="vertical-line"> &#124;</p>
                        <p class="grade">Grade ${gradeStr[0]} 
                            <span class="green"> ${gradeStr[1]} </span>
                        </p>
                    </div>
                    <div class="syllabus flex-row">
                        <p><span class="strong"> ${course.units} </span>Units</p>
                        <p><span class="strong"> ${course.lessons} </span>Lessons</p>
                        <p><span class="strong"> ${course.topics} </span>Topics</p>
                    </div>
                    ${classDropdownStr}
                    ${courseDateElement}
                </div>
                ${starImg}
            </div>
            ${cardFooter}
        </article>
        `;
    }
    mainBodyEl.innerHTML = cardEl;
};

//Notiflication 
const notificationListDiv = document.querySelector(".notification-list-div");
const NoOfNotification = document.querySelector("#notification-badge");
const notificationIcon = document.querySelector("#notification-icon-img");
const notificationButton = document.querySelector("#notification-btn"); // NOtification List Inner Btn
const NotificationMenuNode = notificationListDiv.querySelector('[role="menu"]');
const notificationBtn = document.querySelector("#notification"); // Notification List Trigger
const notificationHideCaller = () => {
    setTimeout(() => {
        if (notificationListDiv.parentNode.querySelector(":hover") == notificationListDiv) {
            notificationListDiv.addEventListener("mouseleave", notificationHide, false);
        }
        else {
            notificationHide();
        }
    }, 100);
};
const notificationHide = () => {
    notificationListDiv.classList.remove("notification-list-div-show");
    notificationListDiv.classList.add("non-focusable");
    NotificationMenuNode.style.display = "none";
    notificationIcon.style.filter = "brightness(1)";
    NoOfNotification.style.display = "flex";
    notificationButton.setAttribute("tabindex", "-1");
};
const notificationShow = () => {
    if (menu.classList.contains("showHamburgerMenu")) {
        menu.classList.remove("showHamburgerMenu");
        menuIcon.style.filter = "brightness(1)";
    }
    announcementHide();
    notificationButton.setAttribute("tabindex", "0");
    notificationIcon.style.filter = "brightness(5.0)";
    notificationListDiv.classList.add("notification-list-div-show");
    notificationListDiv.classList.remove("non-focusable");
    NoOfNotification.style.display = "none";
};
const onNotificationBtnDown = event => {
    if (!event.shiftKey) {
        if (event.key === "Tab") {
            notificationHide();
        }
    }
};
const setNotificationLabel = (notifications) => {
    let notificationLabel = `No new notifications`;
    if (notifications.length !== 0) {
        notificationLabel = `${notifications.length} new notifications`;
        ;
    }
    const notificationLabelEl = document.createElement("span");
    notificationLabelEl.innerText = notificationLabel;
    notificationLabelEl.classList.add("sr-only");
    notificationBtn.appendChild(notificationLabelEl);
};
// notificationBtn.addEventListener("mouseenter", notificationShow, false);
// notificationBtn.addEventListener("mouseleave", notificationHideCaller, false);
notificationButton.addEventListener("keydown", onNotificationBtnDown);
const renderNotifications = (notifications) => {
    const notificationWrapper = document.querySelector("#notification-list");
    let notificationBody = " ";
    NoOfNotification.innerText = notifications.length;
    setNotificationLabel(notifications);
    for (let notification of notifications) {
        let courseStr = " ";
        if (notification.course) {
            courseStr = `
            <p><span class="notification-label">Course:</span> ${notification.course}</p>
            `;
        }
        let classStr = " ";
        if (notification.class) {
            classStr = `
            <p><span class="notification-label">Class:</span> ${notification.class}</p>
            `;
        }
        let notificationItemDivStartTag = `<div class="notification-item" role="menuitem">`;
        let seenIconStr = `<span class="announcement-right-10"> &#10003; </span>`;
        if (!notification.isSeen) {
            notificationItemDivStartTag = `
            <div class="notification-item unseen-item" role="menuitem">
            `;
            seenIconStr = `<span class="announcement-right-unseen"> - </span>`;
        }
        notificationBody += `
            ${notificationItemDivStartTag} 
                <div class="notification-grid">
                    <p class="notification-left-90"> ${notification.content} </p>
                    ${seenIconStr}
                </div>
                ${courseStr}
                ${classStr}
                <div class="notitification-time">
                    ${notification.timestamp}
                </div>
            </div>
            
        `;
    }
    notificationWrapper.innerHTML = notificationBody;
};
//Announcements
const announcementWrapper = document.querySelector(".announcement-list-wrapper");
const NoOfAnnouncement = document.querySelector("#announcement-badge");
const announcementIcon = document.querySelector("#announcement-icon-img");
const announcementButtons = document.querySelectorAll(".announcement-btn"); // Announcement List Inner Buttons
const announcementMenuNode = announcementWrapper.querySelector('[role="menu"]');
const announcementBtn = document.querySelector("#announcement"); // Announcement List Trigger
const announcementHideCaller = () => {
    setTimeout(() => {
        if (announcementWrapper.parentNode.querySelector(":hover") == announcementWrapper) {
            announcementWrapper.addEventListener("mouseleave", announcementHide, false);
        }
        else {
            announcementHide();
        }
    }, 50);
};
const announcementHide = () => {
    announcementWrapper.classList.remove("announcement-list-wrapper-show");
    announcementWrapper.classList.add("non-focusable");
    announcementMenuNode.style.display = "none";
    NoOfAnnouncement.style.display = "flex";
    announcementIcon.style.filter = "brightness(1)";
    announcementButtons.forEach((button) => {
        button.setAttribute("tabindex", "-1");
    });
};
const announcementShow = () => {
    if (menu.classList.contains("showHamburgerMenu")) {
        menu.classList.remove("showHamburgerMenu");
        menuIcon.style.filter = "brightness(1)";
    }
    notificationHide();
    announcementButtons.forEach((button) => {
        button.setAttribute("tabindex", "0");
    });
    announcementIcon.style.filter = "brightness(5.0)";
    NoOfAnnouncement.style.display = "none";
    announcementWrapper.classList.add("announcement-list-wrapper-show");
    announcementWrapper.classList.remove("non-focusable");
};
const onClearBtnDown = event => {
    if (!event.shiftKey) {
        if (event.key === "Tab") {
            announcementHide();
        }
    }
};
const setAnnouncementLabel = (announcements) => {
    let announcementLabel = `No new announcements`;
    if (announcements.length !== 0) {
        announcementLabel = `${announcements.length} new announcements`;
        ;
    }
    const announcementLabelEl = document.createElement("span");
    announcementLabelEl.innerText = announcementLabel;
    announcementLabelEl.classList.add("sr-only");
    announcementBtn.appendChild(announcementLabelEl);
};
// announcementBtn.addEventListener("mouseover",announcementShow, false);
// announcementBtn.addEventListener("mouseleave",announcementHideCaller);
announcementButtons[1].addEventListener("keydown", onClearBtnDown);
const renderAnnouncements = (announcements) => {
    let announcementContainer = document.querySelector(".announcement-list");
    let announcementBody = "";
    NoOfAnnouncement.innerText = announcements.length;
    setAnnouncementLabel(announcements);
    for (let announcement of announcements) {
        let announcementDivStartTag = `<div class="announcement-item" role="menuitem">`;
        let seenIconStr = `<span class="announcement-right-10"> &#10003; </span>`;
        if (!announcement.isSeen) {
            announcementDivStartTag = `<div class="announcement-item unseen-item" role="menuitem">`;
            seenIconStr = `<span class="announcement-right-unseen"> - </span>`;
        }
        let courseStr = "";
        if (announcement.course) {
            courseStr = `
            <p class="announcement-sub">Course:  ${announcement.course}</p>
            `;
        }
        let NoOfFilesStr = "";
        if (announcement.filesAttached) {
            NoOfFilesStr = `<p class="announcement-left"> ${announcement.filesAttached} files are attached</p>`;
        }
        announcementBody += `
            ${announcementDivStartTag}
                <div class="announcemnt-grid-PA">
                    <p class="announcement-left-90"> <span>PA:</span> ${announcement.userName} </p>
                    ${seenIconStr}
                </div>
                <p class="announcement-content"> ${announcement.content}</p>
                ${courseStr}
                <div class="announcement-grid-equispace">
                    ${NoOfFilesStr}
                    <p class="announcement-right"> ${announcement.timestamp}</p>
                </div>
            </div>
        `;
    }
    announcementContainer.innerHTML = announcementBody;
};
//Hamburger Menu
const menu = document.querySelector(".hamburger-menu");
// const menuItems = document.querySelectorAll(".hambuger-item");
const hambugerBtn = document.querySelector("#hamburger-icon");
const menuIcon = document.querySelector(".hamburger-menu-icon");
const hamburgerLists = document.querySelectorAll(".hamburger-list-item");
const hamListItems = [];
let hamInnerListItems = [];
const hideInnerMenu = () => {
    hamburgerLists.forEach((listItem) => {
        let innerEl = listItem.children[1];
        if (innerEl) {
            if (!(innerEl.classList.contains("inner-item"))) {
                innerEl.classList.add("inner-item");
                // listItem.children[0].children[0].innerHTML = `&or;`;
                listItem.children[0].children[0].classList.remove("hamburger-expanded");
                listItem.classList.remove("hamburger-item-active");
                listItem.children[0].setAttribute("aria-expanded", "false");
            }
        }
    });
};
const toggleMenu = () => {
    if (menu.classList.contains("showHamburgerMenu")) {
        menu.classList.remove("showHamburgerMenu");
        menu.classList.add("non-focusable");
        menuIcon.style.filter = "brightness(1)";
    }
    else {
        announcementHide();
        notificationHide();
        hideInnerMenu();
        menu.classList.add("showHamburgerMenu");
        menu.classList.remove("non-focusable");
        menuIcon.style.filter = "brightness(5.0)";
        hamListItems[0].children[0].focus();
        window.addEventListener("mousedown", onBackgroundMousedown.bind(this), true);
    }
};
hambugerBtn.addEventListener("click", toggleMenu);
const setFocusToMenuitem = (newMenuitem) => {
    hamListItems.forEach(function (item) {
        if (item === newMenuitem) {
            // item.tabIndex = 0;
            newMenuitem.children[0].focus();
        }
        else {
            // item.tabIndex = -1;
        }
    });
};
const setFocusToFirstMenuitem = () => {
    setFocusToMenuitem(firstMenuitem);
};
const setFocusToLastMenuitem = () => {
    setFocusToMenuitem(lastMenuitem);
};
const setFocusToPreviousMenuitem = (currentMenuitem) => {
    var newMenuitem, index;
    if (currentMenuitem === firstMenuitem) {
        newMenuitem = lastMenuitem;
    }
    else {
        index = hamListItems.indexOf(currentMenuitem);
        newMenuitem = hamListItems[index - 1];
    }
    setFocusToMenuitem(newMenuitem);
    return newMenuitem;
};
const setFocusToNextMenuitem = (currentMenuitem) => {
    var newMenuitem, index;
    if (currentMenuitem === lastMenuitem) {
        newMenuitem = firstMenuitem;
    }
    else {
        index = hamListItems.indexOf(currentMenuitem);
        newMenuitem = hamListItems[index + 1];
    }
    setFocusToMenuitem(newMenuitem);
    return newMenuitem;
};
const onMenuitemMouseover = (event) => {
    let tgt = event.currentTarget;
    // console.log("tgtChild",tgt.children[0]);
    tgt.children[0].focus();
};
const onHamburgerItemBtnDown = (event) => {
    let key = event.key;
    let tgt = event.currentTarget;
    let flag = false;
    if (event.ctrlKey || event.altKey || event.metaKey) {
        return;
    }
    if (event.shiftKey) {
        if (key === "Tab") {
            toggleMenu();
            hambugerBtn.focus();
            flag = true;
        }
    }
    else {
        switch (key) {
            case "Esc":
            case "Escape":
                toggleMenu();
                hambugerBtn.focus();
                flag = true;
                break;
            case "Up":
            case "ArrowUp":
                setFocusToPreviousMenuitem(tgt);
                flag = true;
                break;
            case "ArrowDown":
            case "Down":
                setFocusToNextMenuitem(tgt);
                flag = true;
                break;
            case "Home":
            case "PageUp":
                setFocusToFirstMenuitem();
                hideInnerMenu();
                flag = true;
                break;
            case "End":
            case "PageDown":
                setFocusToLastMenuitem();
                hideInnerMenu();
                flag = true;
                break;
            case "Tab":
                toggleMenu();
                hambugerBtn.focus();
                flag = true;
                break;
            case " ":
            case "Enter":
                toggleBtnInnerMenu(tgt);
                flag = true;
                break;
            default:
                break;
        }
    }
    if (flag) {
        event.stopPropagation();
        event.preventDefault();
    }
};
const innerHamItemBtnDown = (event) => {
    let key = event.key;
    let tgt = event.currentTarget;
    let flag = false;
    let index;
    if (event.ctrlKey || event.altKey || event.metaKey) {
        return;
    }
    if (event.shiftKey) {
        if (key === "Tab") {
            hideInnerMenu();
            tgt.parentNode.parentNode.children[0].focus();
            flag = true;
        }
    }
    else {
        switch (key) {
            case "Esc":
            case "Escape":
                toggleMenu();
                hambugerBtn.focus();
                flag = true;
                break;
            case "Up":
            case "ArrowUp":
                index = hamInnerListItems.indexOf(tgt);
                if (index === 0) {
                    hamInnerListItems[hamInnerListItems.length - 1].children[0].focus();
                }
                else {
                    hamInnerListItems[index - 1].children[0].focus();
                }
                flag = true;
                break;
            case "ArrowDown":
            case "Down":
                index = hamInnerListItems.indexOf(tgt);
                if (index === hamInnerListItems.length - 1) {
                    hamInnerListItems[0].children[0].focus();
                }
                else {
                    hamInnerListItems[index + 1].children[0].focus();
                }
                flag = true;
                break;
            case " ":
            case "Enter":
                hideInnerMenu();
                tgt.parentNode.parentNode.children[0].focus();
                flag = true;
                break;
            case "Tab":
                hideInnerMenu();
                if (tgt.parentNode.parentNode === hamListItems[hamListItems.length - 1]) {
                    hamListItems[0].children[0].focus();
                }
                else {
                    tgt.parentNode.parentNode.nextElementSibling.children[0].focus();
                }
                flag = true;
                break;
            default:
                break;
        }
    }
    if (flag) {
        event.stopPropagation();
        event.preventDefault();
    }
};
const toggleBtnInnerMenu = (target) => {
    let listItem = target;
    const innerUlEl = listItem.children[1];
    if (innerUlEl) {
        if (innerUlEl.classList.contains("inner-item")) {
            hideInnerMenu();
            innerUlEl.classList.remove("inner-item");
            listItem.classList.add("hamburger-item-active");
            // listItem.children[0].children[0].innerHTML = `&and;`;
            listItem.children[0].children[0].classList.add("hamburger-expanded");
            listItem.children[0].setAttribute("aria-expanded", "true");
            hamInnerListItems = Array.from(listItem.children[1].children);
            hamInnerListItems[0].children[0].focus();
            hamInnerListItems.forEach(item => {
                item.addEventListener("keydown", innerHamItemBtnDown);
            });
        }
        else {
            // listItem.children[0].children[0].innerHTML = `&or;`;
            listItem.children[0].children[0].classList.remove("hamburger-expanded");
            innerUlEl.classList.add("inner-item");
            listItem.classList.remove("hamburger-item-active");
            listItem.children[0].setAttribute("aria-expanded", "false");
        }
    }
};
let firstMenuitem, lastMenuitem;
hamburgerLists.forEach((listItem) => {
    const toggleInnerMenu = () => {
        const innerUlEl = listItem.children[1];
        // console.log(innerUlEl);
        if (innerUlEl) {
            if (innerUlEl.classList.contains("inner-item")) {
                hideInnerMenu();
                innerUlEl.classList.remove("inner-item");
                listItem.classList.add("hamburger-item-active");
                // listItem.children[0].children[0].innerHTML = `&and;`;
                listItem.children[0].children[0].classList.add("hamburger-expanded");
                listItem.children[0].setAttribute("aria-expanded", "true");
            }
            else {
                // listItem.children[0].children[0].innerHTML = `&or;`;
                listItem.children[0].children[0].classList.remove("hamburger-expanded");
                innerUlEl.classList.add("inner-item");
                listItem.classList.remove("hamburger-item-active");
                listItem.children[0].setAttribute("aria-expanded", "false");
            }
        }
    };
    hamListItems.push(listItem);
    if (!firstMenuitem) {
        firstMenuitem = listItem;
    }
    lastMenuitem = listItem;
    listItem.addEventListener("click", toggleInnerMenu);
    listItem.addEventListener("keydown", onHamburgerItemBtnDown);
    listItem.addEventListener("mouseover", onMenuitemMouseover);
});
const onBackgroundMousedown = (event) => {
    if (!menu.contains(event.target)) {
        if (menu.classList.contains("showHamburgerMenu")) {
            toggleMenu();
            hambugerBtn.focus();
        }
    }
};
//MenuList Box Focus
class MenuButtonLinks {
    domNode;
    buttonNode;
    menuNode;
    menuitemNodes;
    firstMenuitem;
    lastMenuitem;
    firstChars;
    isNotification = false;
    isAnnouncement = false;
    constructor(domNode) {
        this.domNode = domNode;
        this.buttonNode = domNode.querySelector("button");
        this.menuNode = domNode.querySelector('[role="menu"]');
        this.menuitemNodes = [];
        this.firstMenuitem = undefined;
        this.lastMenuitem = undefined;
        this.firstChars = [];
        this.buttonNode.addEventListener("keydown", this.onButtonKeydown.bind(this));
        this.buttonNode.addEventListener("click", this.onButtonClick.bind(this));
        this.buttonNode.addEventListener("mouseenter", this.openPopup.bind(this));
        this.buttonNode.addEventListener("mouseleave", this.closePopup.bind(this));
        var nodes = domNode.querySelectorAll('[role="menuitem"]');
        for (let i = 0; i < nodes.length; i++) {
            var menuitem = nodes[i];
            this.menuitemNodes.push(menuitem);
            menuitem.setAttribute("tabIndex", "-1");
            this.firstChars.push(menuitem.textContent.trim()[0].toLowerCase());
            menuitem.addEventListener("keydown", this.onMenuitemKeydown.bind(this));
            menuitem.addEventListener("mouseover", this.onMenuitemMouseover.bind(this));
            if (!this.firstMenuitem) {
                this.firstMenuitem = menuitem;
            }
            this.lastMenuitem = menuitem;
        }
        // domNode.addEventListener("focusin", this.onFocusin.bind(this));
        // domNode.addEventListener("focusout", this.onFocusout.bind(this));
        window.addEventListener("mousedown", this.onBackgroundMousedown.bind(this), true);
        if (domNode.classList.contains("notification-menu")) {
            this.isNotification = true;
        }
        else if (domNode.classList.contains("announcement-menu")) {
            this.isAnnouncement = true;
        }
    }
    setFocusToMenuitem(newMenuitem) {
        this.menuitemNodes.forEach((item) => {
            if (item === newMenuitem) {
                item.tabIndex = 0;
                newMenuitem.focus();
            }
            else {
                item.tabIndex = -1;
            }
        });
    }
    setFocusToFirstMenuitem() {
        this.setFocusToMenuitem(this.firstMenuitem);
    }
    setFocusToLastMenuitem() {
        this.setFocusToMenuitem(this.lastMenuitem);
    }
    setFocusToPreviousMenuitem(currentMenuitem) {
        var newMenuitem, index;
        if (currentMenuitem === this.firstMenuitem) {
            newMenuitem = this.lastMenuitem;
        }
        else {
            index = this.menuitemNodes.indexOf(currentMenuitem);
            newMenuitem = this.menuitemNodes[index - 1];
        }
        this.setFocusToMenuitem(newMenuitem);
        return newMenuitem;
    }
    setFocusToNextMenuitem(currentMenuitem) {
        var newMenuitem, index;
        if (currentMenuitem === this.lastMenuitem) {
            newMenuitem = this.firstMenuitem;
        }
        else {
            index = this.menuitemNodes.indexOf(currentMenuitem);
            newMenuitem = this.menuitemNodes[index + 1];
        }
        this.setFocusToMenuitem(newMenuitem);
        return newMenuitem;
    }
    setFocusByFirstCharacter(currentMenuitem, char) {
        var start, index;
        if (char.length > 1) {
            return;
        }
        char = char.toLowerCase();
        // Get start index for search based on position of currentItem
        start = this.menuitemNodes.indexOf(currentMenuitem) + 1;
        if (start >= this.menuitemNodes.length) {
            start = 0;
        }
        // Check remaining slots in the menu
        index = this.firstChars.indexOf(char, start);
        // If not found in remaining slots, check from beginning
        if (index === -1) {
            index = this.firstChars.indexOf(char, 0);
        }
        // If match was found...
        if (index > -1) {
            this.setFocusToMenuitem(this.menuitemNodes[index]);
        }
    }
    // Popup menu methods
    openPopup() {
        if (this.isNotification) {
            notificationShow();
        }
        else if (this.isAnnouncement) {
            announcementShow();
        }
        this.menuNode.style.display = "block";
        this.buttonNode.setAttribute("aria-expanded", "true");
    }
    closePopup() {
        if (this.isOpen()) {
            if (this.isNotification) {
                notificationHideCaller();
            }
            else if (this.isAnnouncement) {
                announcementHideCaller();
            }
            this.buttonNode.removeAttribute("aria-expanded");
            // this.menuNode.style.display = "none";
        }
    }
    isOpen() {
        return this.buttonNode.getAttribute("aria-expanded") === "true";
    }
    onButtonKeydown(event) {
        var key = event.key, flag = false;
        switch (key) {
            case " ":
            case "Enter":
            case "ArrowDown":
            case "Down":
                this.openPopup();
                this.setFocusToFirstMenuitem();
                flag = true;
                break;
            case "Esc":
            case "Escape":
                this.closePopup();
                this.buttonNode.focus();
                flag = true;
                break;
            case "Up":
            case "ArrowUp":
                this.openPopup();
                this.setFocusToLastMenuitem();
                flag = true;
                break;
            default:
                break;
        }
        if (flag) {
            event.stopPropagation();
            event.preventDefault();
        }
    }
    onButtonClick(event) {
        if (this.isOpen()) {
            this.closePopup();
            this.buttonNode.focus();
        }
        else {
            this.openPopup();
            this.setFocusToFirstMenuitem();
        }
        event.stopPropagation();
        event.preventDefault();
    }
    onMenuitemKeydown(event) {
        var tgt = event.currentTarget, key = event.key, flag = false;
        function isPrintableCharacter(str) {
            return str.length === 1 && str.match(/\S/);
        }
        if (event.ctrlKey || event.altKey || event.metaKey) {
            return;
        }
        if (event.shiftKey) {
            if (isPrintableCharacter(key)) {
                this.setFocusByFirstCharacter(tgt, key);
                flag = true;
            }
            if (event.key === "Tab") {
                this.buttonNode.focus();
                this.closePopup();
                flag = true;
            }
        }
        else {
            switch (key) {
                case " ":
                    window.location.href = tgt.href;
                    break;
                case "Esc":
                case "Escape":
                    this.closePopup();
                    this.buttonNode.focus();
                    flag = true;
                    break;
                case "Up":
                case "ArrowUp":
                    this.setFocusToPreviousMenuitem(tgt);
                    flag = true;
                    break;
                case "ArrowDown":
                case "Down":
                    this.setFocusToNextMenuitem(tgt);
                    flag = true;
                    break;
                case "Home":
                case "PageUp":
                    this.setFocusToFirstMenuitem();
                    flag = true;
                    break;
                case "End":
                case "PageDown":
                    this.setFocusToLastMenuitem();
                    flag = true;
                    break;
                // case "Tab":
                //   this.closePopup();
                //   break;
                default:
                    if (isPrintableCharacter(key)) {
                        this.setFocusByFirstCharacter(tgt, key);
                        flag = true;
                    }
                    break;
            }
        }
        if (flag) {
            event.stopPropagation();
            event.preventDefault();
        }
    }
    onMenuitemMouseover(event) {
        let tgt = event.currentTarget;
        tgt.focus();
    }
    onBackgroundMousedown(event) {
        if (!this.domNode.contains(event.target)) {
            if (this.isOpen()) {
                this.closePopup();
                this.buttonNode.focus();
            }
        }
    }
}
//getdata
const getData = async (srcPath) => {
    const response = await fetch(srcPath);
    if (response.status !== 200) {
        throw new Error("Failed to fetch the Data");
    }
    const data = await response.json();
    return data;
};
Promise.all([
    getData("./data/courses.json"),
    getData("./data/notifications.json"),
    getData("./data/announcements.json"),
])
    .then((values) => {
    renderCards(values[0]);
    renderNotifications(values[1]);
    renderAnnouncements(values[2]);
    // Initialize Notification and Announcement Menus
    let menuButtons = document.querySelectorAll(".menu-button-links");
    for (let i = 0; i < menuButtons.length; i++) {
        new MenuButtonLinks(menuButtons[i]);
    }
})
    .catch((err) => console.log("Error: ", err.message));
