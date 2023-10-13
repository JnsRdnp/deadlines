import Course from './Course.js';

var courseList = [];

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
    var course = new Course("Example course",8,"2023-08-21","2023-10-15");
    // exampleCourse.createHtmlElement();
    courseList.push(course);
    
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
        console.log(courseList);
        document.querySelector("#courseForm").reset();
    });
    
    courseList.forEach((course) => {

        course.createHtmlElement();
    });


    // Handle removing courses
    document.getElementById("courseContainer").addEventListener("click", function (event) {
        if (event.target.classList.contains("remove")) {
            // Get the parent course element
            const courseElement = event.target.closest(".course");
            if (courseElement) {
                const courseId = courseElement.id;
                console.log("Deleted course with ID: " + courseId);
    
                const indexToRemove = courseList.findIndex(course => course._name === courseId);
                
                if (indexToRemove !== -1) {
                    courseList.splice(indexToRemove, 1);
                    courseElement.remove();
                    console.log(courseList);
                }
            }
        }
    });
  
  });


