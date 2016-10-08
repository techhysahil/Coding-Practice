/****** Written By Ritchie ********/
// var DT = {};
// 	//Binnary Search Tree Constructor
// 	DT.BST = function(){
// 		this.root = null;
// 		this.tree = {};
// 	}

// 	DT.BST.prototype.add = function(x){
// 		var dataEnter = true;
// 		if(!Object.keys(this.tree).length) {
// 			this.tree = {element : x,
// 			leftchild : null,
// 			rightchild : null};
// 			dataEnter = false;
// 		}
// 		else {
// 			var dataCheck = this.tree
// 		}
// 		while (dataEnter) {
// 			if(dataCheck.element < x) {
// 				if(dataCheck.rightchild == null) {
// 					dataCheck.rightchild = {element : x,
// 						leftchild : null,
// 						rightchild : null};
// 						dataEnter = false;
// 				}
// 				else {
// 					dataCheck = dataCheck.rightchild;
// 				}
// 			}
// 			else {
// 				if(dataCheck.leftchild == null) {
// 					dataCheck.leftchild = {element : x,
// 						leftchild : null,
// 						rightchild : null};
// 						dataEnter = false;
// 				}
// 				else {
// 					dataCheck = dataCheck.leftchild;
// 				}
// 			}
// 		}
// 	}

var DT = {};
	//Binnary Search Tree Constructor
	DT.BST = function(){
		this.root = null;
		this.tree = null;
	}

	//Add Function
	DT.BST.prototype.add = function(x){
		var flag = true;

		var data = this.tree;
		if(this.root === null){
			this.tree = {
				element : x,
				leftchild : null,
				rightchild : null
			}
			this.root = x;
			flag = false;
		}else{
			while(flag){
				if(data.element === x){
					return false;
				}else if(x > data.element){
					if(data.rightchild === null){
						data.rightchild = {
							element : x,
							leftchild : null,
							rightchild : null		
						}	
						flag = false;
					}else{
						data = data.rightchild;
					}
					
				}else if(x < data.element){
					if(data.leftchild === null){
						data.leftchild = {
							element : x,
							leftchild : null,
							rightchild : null		
						}	
						flag = false;
					}else{
						data = data.leftchild;
					}
					
				}	
			}
			
		}
	}
	//Remove Function
	DT.BST.prototype.contains = function(x){
		var flag = true,
			node = this.tree;

		while(flag){
			if(node != null){
				if(x === node.element){
					flag = false;
					return true;
				}else if(x > node.element){
					node = node.rightchild;
				}else if(x < node.element){
					node = node.leftchild;
				}	
			}else{
				return false;
			}
			
		}
	}
	//Find minValue Function
	DT.BST.prototype.minValue = function(){
		var flag = true,
			node = this.tree;

			if(node != null){
				while(flag){
					if(node.leftchild){
						node = node.leftchild;
					}else{
						flag = false;
						return node.element;
					}
				}
			}else{
				return false;
			}
	}
	//Find maxValue Function
	DT.BST.prototype.maxValue = function(){
		var flag = true,
			node = this.tree;

			if(node != null){
				while(flag){
					if(node.rightchild){
						node = node.rightchild;
					}else{
						flag = false;
						return node.element;
					}
				}
			}else{
				return false;
			}
	}
	//Delete BST Function
	DT.BST.prototype.removeTree = function(){
		this.root = null;
		this.tree = null;
	}