

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");

    javaCourse = new Course(document);

    // var button = document.getElementById("newCourse");
    // button.addEventListener("click", function(event){
    //     console.log("Button!");
    // });
  });

function testResults (form) {
    var courseName = form.inputName.value;
    var courseAssignments = form.inputAssignments.value;
    var courseStartDate = form.startDateInput.value;
    var courseEndDate = form.endDateInput.value;
    alert(courseEndDate);
    
}


class Course {

    constructor(document) {
        this._name = "Course";
        this._startDate = new Date();
        this._endDate = new Date();
        this._today = new Date();
        this._document = document;

        this._assignments = 0;

        this._htmlTemplate = `
        <div class="course">
            <h2>Course</h2>

            <div class="innercont">
                <div class="start">start 10/10/2023</div>
                <div class="end">end 10/10/2023</div>
            </div>

            <div class="innercont"> 
                <div class="assignments">Assignments: 50</div>
                <div class="shouldbedone">Should be done: 50</div>
                <div class="perday">(2.5/a day)</div>
            </div>

        </div>
        `;

        this.createHtmlElement();

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

    get getName(){
        return this._name;
    }

    get getAssignments(){
        return this._assignments;
    }

    get getStartDate(){
        return this.getSimpleDate(this._startDate);
    }

    get getEndDate(){
        return this.getSimpleDate(this._endDate);
    }

    get getToday(){
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
    
    createHtmlElement(){
        var courseContainer = document.getElementById("courseContainer");
        courseContainer.insertAdjacentHTML('beforeend',this._htmlTemplate);

    }

}

