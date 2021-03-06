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

// 3.组合继承 缺陷:需要调用2次父类的构造函数，一次在创建子类原型时，另一次在子类构造函数内部
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

// 4.寄生组合式继承
function object(o) {
	// 原型式继承
	function F() {}
	F.prototype = o;
	return new F();
}

function inheritPrototype(baseClass, extendClass) {
	var newPrototype = object(baseClass.prototype);
	newPrototype.constructor = extendClass;
	// 在这里，不需要再创建一个父类的实例，直接用父类的原型对象创建一个新对象，复制给子类的原型
	extendClass.prototype = newPrototype;
}

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

// 实现继承
inheritPrototype(People, Student);
Student.prototype.getType = function() {
	return this.type;
};

var student4 = new Student("Lesty", "student");
