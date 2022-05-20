function University(name, location, classes = []) {
    this.name = name;
    this.location = location;
    this.classes = classes;
    this.addClass = (classs) => {
        this.classes.push(classs);
    };
    this.removeClass = (name) => {
        this.classes = this.classes.filter((classs) => classs.name !== name);
    };
    this.transferStudent = (pin, className) => {
      let varBelebirGroup = this.classes.find((item)=>item.name===className.name);
      let telebe = this.classes.find((item)=>{
          let menimtelebem=item.students.find(item=>item.pin===pin);
          return menimtelebem;
         
      })
      console.log('222',telebe);
    let elaveolunantelkebe= telebe.students.find(t=>t.pin===pin);
     const tapilanGroup=this.classes.find((qurp)=>{
         return qurp.students.some((d)=>d.pin===pin)
     })
      console.log('tapilan',tapilanGroup); 
      console.log('tapilanGroup',varBelebirGroup); 
      console.log('telebe',telebe); 
      tapilanGroup.removeStudent(pin);
      varBelebirGroup.addStudent(elaveolunantelkebe);
      

      
  
    };
}

function Class(name, degree, currentYear, students = []) {
    this.name = name;
    this.degree = degree;
    this.currentYear = currentYear;
    this.students = students;
    this.addStudent = (student) => {
        this.students.push(student);
    };
    this.removeStudent = (pin) => {
        this.students = this.students.filter((student) => student.pin !== pin);
        return this.students;
    };
    this.findStudentbyGpa = (gpa) => {
        this.students = this.students.filter((student) => student.gpa >= gpa);
        return this.students;
    };

   
}
function Student(name, surname, paid, pin, gpa) {
    this.firstName = name;
    this.lastName = surname;
    this.paid = paid;
    this.pin = pin;
    this.gpa = gpa;

}
const BDU = new University("BDU", "Baku");
const BP201 = new Class("BP201", "pilot", 2022);
const BP202 = new Class("BP202", "pilot", 2022);
const student1 = new Student("Fidan", "Mammadova", 2100, 004, 80);
const student2 = new Student("Murad", "Abdullazade", 2100, 010, 99);
BDU.addClass(BP201);
BDU.addClass(BP202);
BP201.addStudent(student1);
BP201.addStudent(student2);
console.log(BP201);
// console.log('firstTime',BDU);
// BDU.transferStudent(004,BP202)
// // console.log(BP201.findStudentbyGpa(85)); 
//  console.log('pro',BDU);
