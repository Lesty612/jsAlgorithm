/**
 * [创建对象的几种方法]
 * @author Lesty
 * @code-date 2015.10.12
 */

// 1.工厂模式
function createStudent(name, age, classId) {
	var obj = {
		name: name,
		age: age,
		classId: classId
	};

	return obj;
}

var student1 = createStudent("Lesty", 21, 1234);

// 2.构造函数模式
function Student(name, age, classId) {
	this.name = name;
	this.age = age;
	this.classId = classId;

	this.getName = getName;
}

function getName() {
	return this.name;
}

var student2 = new Student("Lesty", 21, 1234);

// 3.原型模式
function Student() {
}

Student.prototype.name = "Lesty";
Student.prototype.getName = function() {
	return this.name;
};

var student3 = new Student();

