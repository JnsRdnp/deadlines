

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");

    javaCourse = new Course(document);
    console.log(javaCourse.getEndDate);
    console.log(javaCourse.getStartDate);
    console.log(javaCourse.getToday);
    javaCourse.setStartDate("2001-10-10");
    console.log(javaCourse.getStartDate);

  });



class Course {

    constructor(document) {
        this.startDate = new Date();
        this.endDate = new Date();
        this.today = new Date();
        this.document = document;
    }

    setStartDate(newStartDate){
        // this.startDate = new Date(newStartDate)
        this.startDate = new Date(newStartDate);
    }

    get getStartDate(){
        return this.getSimpleDate(this.startDate);
    }

    get getEndDate(){
        return this.getSimpleDate(this.endDate);
    }

    get getToday(){
        return this.getSimpleDate(this.today);
    }

    getSimpleDate(inputDate) {
        var currentDate = inputDate;
        var year = currentDate.getFullYear();
        var month = currentDate.getMonth() + 1; // Month index starts from 0
        var day = currentDate.getDate();
        var dateWithoutTime = month + '/' + day + '/'+ year;
        return dateWithoutTime;
      }
}

