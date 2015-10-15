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

Student.prototype = {
	name: "Lesty",
	getName: function() {
		return this.name;
	}
}

// 重写prototype后，constructor丢失，所以在这里补回来，不可枚举，指向构造函数
Object.defineProperty(Student.prototype, "constructor", {
	enumerable: false,
	value: Student
});

var student3 = new Student();

// 4.组合模式
function Student(name) {
	// 把实例属性用构造函数来定义
	this.name = name;
}

// 把方法以及需要共享的属性用原型来定义
Student.prototype = {
	constructor: Student,
	type: "student",
	getName: function() {
		return this.name;
	}
}

var student4 = new Student("Lesty");