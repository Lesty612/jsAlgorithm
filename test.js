(function() {
	var name = "";

	Student = function(val) {
		name = val;
		var type = "student";

		this.getTYpe = function() {
			return type;
		};
		this.setType = function(newType) {
			type = newType;
		};
	}
	Student.prototype.getName = function() {
		return name;
	};
	Student.prototype.setName = function(val) {
		name = val;
	}
})();