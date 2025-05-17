//complete this code
class Person {
	constructor(name: string, age: number)
	get name(): string
	get age(age: number)
}

class Student extends Person {
	study(): void
	<name> is studying
}

class Teacher extends Person {
	teach(): void
	<name> is teaching
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
