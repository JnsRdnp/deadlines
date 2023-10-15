import Course from './Course.js';

var courseList = [];

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");

    const header = document.querySelector('#deadlinesHeader');

    //Example course
    var course = new Course("Example course",10,"2023-08-21","2023-10-15");
    courseList.push(course);

    
    //handle new course object creation
    const form = document.querySelector("#courseForm");
    form.addEventListener("submit", function (event) {
        //prevent the dissappearing
        event.preventDefault();

        console.log(form.value);
        var courseName = form.inputName.value;
        var courseAssignments = form.inputAssignments.value;
        var courseStartDate = form.startDateInput.value;
        var courseEndDate = form.endDateInput.value;

        alert("New course "+courseName+" created!");

        console.log(courseStartDate);
        var course = new Course(courseName,parseInt(courseAssignments, 10),courseStartDate,courseEndDate);
        course.createHtmlElement();
        courseList.push(course);

        //clear form
        console.log(courseList);
        document.querySelector("#courseForm").reset();

        //update local storage courseArray
        localStorage.setItem('courseList', JSON.stringify(courseList));
    });
    
    //Get created course objects from local storage
    const storedCourseList = JSON.parse(localStorage.getItem('courseList'));

    //Create course objects from a local storage courseList array
    if (storedCourseList) {
        courseList = storedCourseList.map(courseData => {
          return new Course(
            courseData._name,
            courseData._assignments,
            courseData._startDate,
            courseData._endDate
          );
        });
    }

    courseList.forEach((course) => {

        course.createHtmlElement();
    });

    console.log(storedCourseList);


    // Handle removing courses
    document.getElementById("courseContainer").addEventListener("click", function (event) {
        if (event.target.classList.contains("remove")) {
            // Get the parent course element
            const courseElement = event.target.closest(".courseOuter");
            if (courseElement) {
                const courseId = courseElement.id;
                console.log("Deleted course with ID: " + courseId);
    
                const indexToRemove = courseList.findIndex(course => course._name === courseId);
                
                if (indexToRemove !== -1) {
                    courseList.splice(indexToRemove, 1);
                    courseElement.remove();
                    console.log(courseList);
                    //update local storage courseArray
                    localStorage.setItem('courseList', JSON.stringify(courseList));
                }
            }
        }
    });
  
  });


