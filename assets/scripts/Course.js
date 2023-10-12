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

             <button class="remove">DELETE</button>
        </div>
        `;
        var courseContainer = document.getElementById("courseContainer");
        courseContainer.insertAdjacentHTML('beforeend',this._htmlTemplate);

    }

}

export default Course;