//complete this code
class Person {
	constructor(name, age){
	this.name = name;
	this.age = age;
	}

get name(){
	return this.name;
	}

get age(){
	return this.age;
	}

set age(newAge){
	this.age =newAge;
	}
}
	

class Student extends Person {
	study(){
		console.log(`${this.name} is studying`);
	}
}

class Teacher extends Person {
	teach(){
		console.log(`${this.name} is Teaching`);
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
