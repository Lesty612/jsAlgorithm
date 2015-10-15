/**
 * [js实现继承的几种方法]
 * @author Lesty
 * @code-date 2015.10.15
 */

// 1.原型链 优点：函数复用 缺陷：属性共享问题还有传递参数的问题
function People() {
	this.name = "Lesty";
	this.habits = ["sing", "swimming", "play game"];
}

People.prototype.getName = function() {
	return this.name;
};

function Student() {
	this.type = "student";
}

// 继承People
Student.prototype = new People();

Student.prototype.getType = function() {
	return this.type;
};

var student1 = new Student();

// 2.构造函数 优点：传参 缺点：不能函数复用
function People(name) {
	this.name = name;
	this.getName = function() {
		return this.name;
	};
}

function Student(name, type) {
	People.call(this, name);

	this.type = type;
	this.getType = function() {
		return this.type;
	}
}

var student2 = new Student("Lesty", "student");

// 3.组合继承
function People(name) {
	this.name = name;
}

People.prototype.getName = function() {
	return this.name;
};

function Student(name, type) {
	People.call(this, name);

	this.type = type;
}

// 继承People 注意，一定要在为子类增加自己的方法之前继承
Student.prototype = new People();
// 构造函数指向Student本身 省略enumerable也ok，因为这个方法默认初始值为false
Object.defineProperty(Student.prototype, "constructor", {
	enumerable: false,
	value: Student
});
Student.prototype.getType = function() {
	return this.type;
};

var student3 = new Student("Lesty", "student");