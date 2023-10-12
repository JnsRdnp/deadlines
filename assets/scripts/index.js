import Course from './Course.js';

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");

    const header = document.querySelector('#deadlinesHeader');

    //add date to site header
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var month = currentDate.getMonth() + 1; // Month index starts from 0
    var day = currentDate.getDate();
    var dateWithoutTime = day + '/' + month + '/'+ year
    header.insertAdjacentHTML('beforeend',' '+dateWithoutTime);

    //Example course
    var courseList = [];
    var exampleCourse = new Course("Example course",30,"2023-08-21","2023-10-15");
    // exampleCourse.createHtmlElement();
    courseList.push(exampleCourse);
    
    //handle new course object creation
    const form = document.querySelector("#courseForm");
    form.addEventListener("submit", function (event) {
        //prevent the dissappearing
        event.preventDefault();

        var courseName = form.inputName.value;
        var courseAssignments = form.inputAssignments.value;
        var courseStartDate = form.startDateInput.value;
        var courseEndDate = form.endDateInput.value;

        console.log(courseStartDate);
        var course = new Course(courseName,parseInt(courseAssignments, 10),courseStartDate,courseEndDate);
        course.createHtmlElement();
        courseList.push(course);

        //clear form
        document.querySelector("#courseForm").reset();
    });
    
    courseList.forEach((course) => {

        course.createHtmlElement();
    });
  
  });





