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
        var dateWithoutTime = day + '.' + month + '.';
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
        return perday;
    }

    getShouldBeDone(){
        var passed = this.getPassedDays();
        var perday = this.getPerDay();
        if(passed>0){
            return (passed*perday).toFixed(1);
        }
        return "0";
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
        <div class="courseOuter" id="${this._name}">
        <p class="coursetitle">${this._name}</p>
        <button class="remove">DELETE</button>
        
        <div class="course">
            <div class="days">
                <div class="start">${this.getStartDate()}</div>
                <img src="assets/pictures/arrowdown1.png" alt="arrowdown" class="arrowdown">
                <div class="end">${this.getEndDate()}</div>
            </div>

            <div class="sbd">
                <p class="shouldp">${this.getShouldBeDone()}</p>
                <p class="perdayp">${this.getPerDay().toFixed(1)} / DAY</p>
                <div class="tooltip">
                <img src="assets/pictures/finger.png" alt="" id="finger">
                <span class="tooltip-text">This indicates the number of assignments that should be done by now</span></div>
            </div>

            <div class="total">
                <p class="totalp">${this._assignments}</p>
                <div class="tooltip">
                <img src="assets/pictures/mission.png" alt="" id="mission">
                <span class="tooltip-text">This is the goal you set</span></div>
            </div>
        </div>
        </div>
        `;
        var courseContainer = document.getElementById("courseContainer");
        courseContainer.insertAdjacentHTML('beforeend',this._htmlTemplate);

    }

}

export default Course;