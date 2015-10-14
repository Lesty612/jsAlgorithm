/**
 * 创建链表
 * @author Lesty
 * @code-date 2015.10.13
 */

 /**
  * [Node 节点构造函数]
  * @param {任意类型} element [新节点要包含的数据]
  */
function Node(element) {
	this.element = element;
	this.next = null;
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
 * [findPrev 根据item数据找到对应的前一个节点]
 * @param  {任意类型} item [节点包含的数据]
 * @return {Node}      [查找到的节点]
 */
List.prototype.findPrev = function(item) {
	var curNode = this.head;

	while(curNode.next != null && curNode.next.element != item) {
		curNode = curNode.next;
	}

	if(curNode.next == null) {
		return null;
	} else {
		return curNode;
	}
}

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
		// 老节点的下个节点为新节点
		oldNode.next = newNode;
	} else {
		console.log("未找到要被插入的节点");
	}
}

/**
 * [delete 删除包含指定数据的节点]
 * @param  {任意类型} item [要删除的数据]
 */
List.prototype.delete = function(item) {
	// 找到要删除节点的上个节点
	var prevNode = this.findPrev(item);
	if(prevNode != null) {
		prevNode.next = prevNode.next.next;
	} else {
		console.log("未找到要删除的节点");
	}
}

/**
 * [display 输出所有节点]
 */
List.prototype.display = function() {
	var curNode = this.head;

	while(curNode != null) {
		console.log(curNode.element);
		curNode = curNode.next;
	}
}