const toggle = document.getElementsByClassName("navbar-toggler")[0];
console.log(toggle);

const navbar = document.getElementsByClassName("navbar-nav")[0];
console.log(navbar);

toggle.addEventListener("click", () => {
  console.log("card-title");
  navbar.classList.toggle("hide");
});

function togglemuted(x) {
  x.classList.toggle("image-muted");
}

function togglefavourite(x) {
  x.classList.toggle("unfavourite");
}


const Courses = [
  {
    image: "images/imageMask.png",
    title: "Acceleration",
    subject: "Physics",
    grade: 7,
    additional_grade: 2,
    units: 4,
    lessons: 18,
    topics: 24,
    classes: [
      "Mr. Frank's Class B",
      "Mr. Frank's Class A",
      "Mr. Frank's Class C"
    ],
    students: 50,
    start_date: "21-Jan-2020",
    end_date: "21-Aug-2020",
    isfavourite: true,
    isexpired: false,
    footer: {
      iswatch: true,
      iscalender: true,
      isgraded: true,
      isreported: true
    }
  },
  {
    image: "images/imageMask-1.png",
    title: "Displacement, Velocity and Speed",
    subject: "Physics 2",
    grade: 6,
    additional_grade: 3,
    units: 2,
    lessons: 15,
    topics: 20,
    classes: [],
    students: null,
    start_date: null,
    end_date: null,
    isfavourite: true,
    isexpired: false,
    footer: {
      iswatch: true,
      iscalender: false,
      isgraded: false,
      isreported: true
    }
  },
  {
    image: "images/imageMask-3.png",
    title: "Introduction to Biology: Micro organisms and how they affected by new people",
    subject: "Biology",
    grade: 4,
    additional_grade: 1,
    units: 5,
    lessons: 16,
    topics: 22,
    classes: ["All Classes"],
    students: 300,
    start_date: null,
    end_date: null,
    isfavourite: true,
    isexpired: false,
    footer: {
      iswatch: true,
      iscalender: false,
      isgraded: false,
      isreported: true
    }
  },
  {
    image: "images/imageMask-2.png",
    title: "Introduction to High School Mathematics",
    subject: "Mathematics",
    grade: 8,
    additional_grade: 3,
    units: null,
    lessons: null,
    topics: null,
    classes: ["Mr. Frank's Class A",
      "Mr. Frank's Class B",
      "Mr. Frank's Class C"
    ],
    students: 44,
    start_date: "14-OCT-2019",
    end_date: "20-OCT-2020",
    isfavourite: false,
    isexpired: true,
    footer: {
      iswatch: true,
      iscalender: true,
      isgraded: true,
      isreported: true
    }
  }

]

function createcardfooter(footer) {

  let footerhtml = document.createElement('div')
  footerhtml.classList.add('card-footer')
  footerelements = ""
  if (footer.iswatch) {
    footerelements += '<img src="icons/preview.svg" onclick="togglemuted(this)" />'
  } else {
    footerelements += '<img src="icons/preview.svg" onclick="togglemuted(this)" class="image-muted"/>'
  }

  if (footer.iscalender) {
    footerelements += '<img src="icons/manage course.svg" onclick="togglemuted(this)" />'
  } else {
    footerelements += '<img src="icons/manage course.svg" onclick="togglemuted(this)" class="image-muted"/>'
  }

  if (footer.isgraded) {
    footerelements += '<img src="icons/grade submissions.svg" onclick="togglemuted(this)" />'
  } else {
    footerelements += '<img src="icons/grade submissions.svg" onclick="togglemuted(this)" class="image-muted"/>'
  }

  if (footer.isreported) {
    footerelements += '<img src="icons/reports.svg" onclick="togglemuted(this)" />'
  } else {
    footerelements += '<img src="icons/reports.svg" onclick="togglemuted(this)" class="image-muted"/>'
  }
  footerhtml.innerHTML = footerelements
  return footerhtml
}
function createcard(course) {
  console.log(course);
  let card = ""
  if (course.isfavourite) {

    card += '<span class="favourite" onclick="togglefavourite(this)"></span>'
  } else {
    card += '<span class="unfavourite" onclick="togglefavourite(this)"></span>'
  }

  if (course.isexpired) {
    card += '<span class="expired">EXPIRED</span>'
  }
  let cardcontent = `  

    <div class="card-contents">
      <div class="col-4">
        <img src="${course.image}" class="img-fluid" alt="..." />
      </div>
      <div class="col-8">
        <div class="card-body">
          <h5 class="card-title">${course.title}</h5>
          <div class="content">
            <p class="subject">${course.subject}</p>
            <p class="grade">
              Grade ${course.grade}
              <span class="additional">+${course.additional_grade}</span>
            </p>
          </div>
          <div class="info-set">
          ${course.units ? '<div class="info"><p class="text"><span>' + course.units + '</span> units</p></div>' : " "}
          ${course.lessons ? '<div class="info"><p class="text"><span>' + course.lessons + '</span> Lessons</p></div>' : " "}
          ${course.topics ? '<div class="info"><p class="text"><span>' + course.topics + '</span> topics</p></div>' : " "}


          </div>`
  card += cardcontent
  let dropdown = `
          <div class="dropdown">
            `
  if (course.classes.length == 0) {
    dropdown += `<select value="classes" name="classes" class="noclasses">`
    dropdown += `<option value="s1">No Classes</option>`
  } else {
    dropdown += `<select value="classes" name="classes">`
    for (let index = 0; index < course.classes.length; index++) {
      dropdown += `<option value="${course.classes[index]}">${course.classes[index]}</option>`
    }
  }
  dropdown += `
</select>
</div>
`
  card += dropdown
  let contents = `
          <div class="content">
          ${course.students ? '<p class="students">' + course.students + ' students</p>' : " "}

            <p class="dates">${course.start_date ? course.start_date : " "}  ${course.end_date ? "-" + course.end_date : " "}</p>
          </div>
        </div>
      </div>
    </div>
`
  card += contents

  return card
}

// let response = fetch("../Courses.json").json()
// console.log(response);

const propertyContainer = document.getElementsByClassName('inner-container')[0]

for (let index = 0; index < Courses.length; index++) {
  let card = document.createElement('div')
  card.classList.add('card')
  card.innerHTML = createcard(Courses[index])
  let footerhtml = createcardfooter(Courses[index].footer)
  card.appendChild(footerhtml)
  propertyContainer.appendChild(card)
}


