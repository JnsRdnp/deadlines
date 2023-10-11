

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");

    javaCourse = new Course(document);
    // javaCourse.setCourseName("Javascript");
    // javaCourse.setAssignments(87)

    // javaCourse.setEndDate("2001-10-10");
    // javaCourse.setStartDate("2002-5-10");
    // console.log(javaCourse.getEndDate);
    // console.log(javaCourse.getStartDate);
    // console.log(javaCourse.getToday);
    // console.log(javaCourse.getName);
    // console.log(javaCourse.getAssignments);


    var button = document.getElementById("newCourse");
    button.addEventListener("click", function(event){
        console.log("Button!");
    });
  });



class Course {

    constructor(document) {
        this._name = "Course";
        this._startDate = new Date();
        this._endDate = new Date();
        this._today = new Date();
        this._document = document;

        this._assignments = 0;

        this._htmlTemplate = 
        `<div class="course">
          <label for="course">Course1</label>
          <div class="innercont">
            <div class="start">start <br> <input type="date" name="start">
            </div>
            <div class="end">end <br><input type="date" name="end"></div>
          </div>
          <div class="innercont"> 
            <div class="assignments">Assignments: <br> <input type="number" name="assignments"></div>
            <div class="shouldbedone">Should be done: 50</div>
            <div class="perday">(2.5/a day)</div>
          </div>
        </div>`;

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

