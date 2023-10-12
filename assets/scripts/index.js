

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");

    const header = document.querySelector('#deadlinesHeader');

    //add date to site header
    currentDate = new Date();
    var year = currentDate.getFullYear();
    var month = currentDate.getMonth() + 1; // Month index starts from 0
    var day = currentDate.getDate();
    var dateWithoutTime = month + '/' + day + '/'+ year
    header.insertAdjacentHTML('beforeend',' '+dateWithoutTime);

    //Example course
    courseList = [];
    exampleCourse = new Course("Example course",30,"2023-08-21","2023-10-15");
    exampleCourse.createHtmlElement();
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

        document.querySelector("#courseForm").reset();
    });
  });


class Course {

    constructor(name,assignments,startdate,enddate) {
        this._name = name;
        this._startDate = new Date(startdate);
        this._endDate = new Date(enddate);
        this._today = new Date();


        this._assignments = assignments;

    }

    setCourseName(name){
        this._name = name;
    }

    setAssignments(assignments){
        this._assignments = assignments;
    }

    setStartDate(newStartDate){
        // this.startDate = new Date(newStartDate)
        this._startDate = new Date(newStartDate);
    }

    setEndDate(newEndDate){
        // this.startDate = new Date(newStartDate)
        this._endDate = new Date(newEndDate);
    }

    getName(){
        return this._name;
    }

    getAssignments(){
        return this._assignments;
    }

    getStartDate(){
        return this.getSimpleDate(this._startDate);
    }

    getEndDate(){
        return this.getSimpleDate(this._endDate);
    }

    getToday(){
        return this.getSimpleDate(this._today);
    }

    getSimpleDate(inputDate) {
        var currentDate = inputDate;
        var year = currentDate.getFullYear();
        var month = currentDate.getMonth() + 1; // Month index starts from 0
        var day = currentDate.getDate();
        var dateWithoutTime = month + '/' + day + '/'+ year;
        return dateWithoutTime;
      }

    getOriginalDays(){
        return (this.dateDiffInDays(this._startDate,this._endDate));
    }

    getPassedDays(){
        return (this.dateDiffInDays(this._startDate,this._today));
    }


    getPerDay(){
        var assignments = this.getAssignments();
        var originalDays = this.getOriginalDays();
        var perday = assignments/originalDays; 
        var roundedPerday = perday.toFixed(1);
        return roundedPerday;
    }

    getShouldBeDone(){
        var passed = this.getPassedDays();
        var perday = this.getPerDay();
        return (passed*perday).toFixed(1);
    }

    //calculate day difference between dates https://stackoverflow.com/questions/3224834/get-difference-between-2-dates-in-javascript
    dateDiffInDays(a, b) {
        
        const _MS_PER_DAY = 1000 * 60 * 60 * 24;
        // Discard the time and time-zone information.
        const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
        const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
      
        return Math.floor((utc2 - utc1) / _MS_PER_DAY);
    }
    
    createHtmlElement(){
        this._htmlTemplate = `
        <div class="course" id="${this._name}">
            <h2>${this._name}</h2>

            <div class="innercont">
                <div class="start">start ${this.getStartDate()}</div>
                <div class="end">end ${this.getEndDate()}</div>
            </div>

            <div class="innercont"> 
                <div class="assignments">Assignments: ${this._assignments}</div>
                <div class="shouldbedone">Should be done: ${this.getShouldBeDone()}</div>
                <div class="perday">(${this.getPerDay()}/a day)</div>
            </div>

        </div>
        `;
        var courseContainer = document.getElementById("courseContainer");
        courseContainer.insertAdjacentHTML('beforeend',this._htmlTemplate);

    }

}

