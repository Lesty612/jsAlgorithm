/**
 * 创建双向链表
 * @author Lesty
 * @code-date 2015.10.14
 */

 /**
  * [Node 节点构造函数]
  * @param {任意类型} element [新节点要包含的数据]
  */
function Node(element) {
	this.element = element;
	this.next = null;
	this.prev = null;
}

/**
 * [List 链表构造函数]
 */
function List() {
	this.head = new Node("head");
}

/**
 * [find 根据item数据找到对应节点]
 * @param  {任意类型} item [节点包含的数据]
 * @return {Node}      [查找到的节点]
 */
List.prototype.find = function(item) {
	var curNode = this.head;

	while(curNode != null && curNode.element != item) {
		curNode = curNode.next;
	}

	return curNode;
};

/**
 * [findLast 找出链表最后一个节点]
 * @return {Node} [最后一个节点]
 */
List.prototype.findLast = function() {
	var curNode = this.head;

	while(curNode.next != null) {
		curNode = curNode.next;
	}

	return curNode;
};


/**
 * [insert 在指定节点后插入新节点]
 * @param  {任意类型} newItem [新数据]
 * @param  {任意类型} item    [指定的数据]
 */
List.prototype.insert = function(newItem, item) {
	// 新节点
	var newNode = new Node(newItem);
	// 找到item数据所在的节点
	var oldNode = this.find(item);

	if(oldNode != null) {
		// 新节点替换老节点位置
		newNode.next = oldNode.next;
		if(newNode.next != null) {
			newNode.next.prev = newNode;
		}
		// 新节点的prev指向老节点
		newNode.prev = oldNode;
		// 老节点的下个节点为新节点
		oldNode.next = newNode;
	} else {
		console.log("未找到要被插入的节点");
	}
};

/**
 * [delete 删除包含指定数据的节点]
 * @param  {任意类型} item [要删除的数据]
 */
List.prototype.delete = function(item) {
	// 找到要删除的节点
	var delNode = this.find(item);
	if(delNode != null) {
		delNode.prev.next = delNode.next;
		delNode.next.prev = delNode.prev;
	} else {
		console.log("未找到要删除的节点");
	}
};

/**
 * [display 输出所有节点]
 */
List.prototype.display = function() {
	var curNode = this.head;

	while(curNode != null) {
		console.log(curNode.element);
		curNode = curNode.next;
	}
};

/**
 * [displayReverse 反序输出所有节点]
 */
List.prototype.displayReverse = function() {
	var curNode = this.findLast();

	while(curNode != null) {
		console.log(curNode.element);
		curNode = curNode.prev;
	}
};

var list2 = new List();
list2.insert("second", "head");
list2.insert("Lesty", "head");
list2.insert("haha", "second");
list2.displayReverse();
list2.delete("second");
list2.displayReverse();