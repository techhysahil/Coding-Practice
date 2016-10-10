var DT = {};
	//Binnary Search Tree Constructor
	DT.BST = function(){
		this.root = null;
		this.tree = null;
	}

	/*******************************
			Private function
	*******************************/

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
	//Traversal BST tree Function
	DT.BST.prototype.traversalTree = function(options,callback){
		var obj = this.tree;

		//Normal BST tree traversal
		if(options.type === "inorder"){
			function inOrder(obj){
		        if (obj){

		            if (obj.left !== null){
		                inOrder(obj.leftchild);
		            }            

		            callback.call(this,obj.element);

		            if (obj.right !== null){
		                inOrder(obj.rightchild);
		            }
		        }
		    }
	        //start with the root
	        inOrder(obj);
		}
		if(options.type === "preorder"){
			function preOrder(obj){
		        if (obj){

		        	callback.call(this,obj.element);

		            if (obj.left !== null){
		                preOrder(obj.leftchild);
		            }            

		            

		            if (obj.right !== null){
		                preOrder(obj.rightchild);
		            }

		        }
		    }
	        //start with the root
	        preOrder(obj);
		}
		if(options.type === "postorder"){
			function postOrder(obj){
		        if (obj){

		            if (obj.left !== null){
		                postOrder(obj.leftchild);
		            }            

		            

		            if (obj.right !== null){
		                postOrder(obj.rightchild);
		            }

		            callback.call(this,obj.element);

		        }
		    }
	        //start with the root
	        postOrder(obj);
		}
	}

	//Get BST size Function
	DT.BST.prototype.size = function(callback){
		var obj = this.tree;
		var size = 0;
		function inOrder(obj){
	        if (obj){

	            if (obj.left !== null){
	                inOrder(obj.leftchild);
	            }            

	            // callback.call(this,obj.element);
	            size = size+1;

	            if (obj.right !== null){
	                inOrder(obj.rightchild);
	            }
	        }
	    }
        //start with the root
        inOrder(obj);

        return size;
	}

	//Convert BST tree to Array Function
	DT.BST.prototype.toArray = function(){
		var obj = this.tree,
			arr = [];
		function inOrder(obj){
	        if (obj){

	            if (obj.left !== null){
	                inOrder(obj.leftchild);
	            }            

	            // callback.call(this,obj.element);
	            arr.push(obj.element);

	            if (obj.right !== null){
	                inOrder(obj.rightchild);
	            }
	        }
	    }
        //start with the root
        inOrder(obj);

        return arr;
	}

	//Convert BST tree to String Function
	DT.BST.prototype.toString = function(){
		var obj = this.tree,
			arr = [];
		function inOrder(obj){
	        if (obj){

	            if (obj.left !== null){
	                inOrder(obj.leftchild);
	            }            

	            // callback.call(this,obj.element);
	            arr.push(obj.element);

	            if (obj.right !== null){
	                inOrder(obj.rightchild);
	            }
	        }
	    }
        //start with the root
        inOrder(obj);

        return arr.toString();
	}

	//Convert BST tree to String Function
	DT.BST.prototype.maxDepth = function(){
		var obj = this.tree,
			size = 0,
			PathArr = [],
			traverseTopNode = false,
			root = this.root;

		function inOrder(obj){

	        if (obj){
	        	if (obj.leftchild !== null){
	        		size = size+1;
	                inOrder(obj.leftchild);
	            }else{
	            	PathArr.push(size);
	            }            

	            if(obj.element === root){
	        		traverseTopNode = true;
	        		size = 1;
	        	}
	            if (obj.rightchild !== null){
	                size = size+1;
	                inOrder(obj.rightchild);

	            }else{
	            	PathArr.push(size);
	            	size = size -1;
	            }

	        }else{
	        	return 0;
	        }
	    }

        //start with the root
        inOrder(obj);

        PathArr.sort();
        PathArr.reverse();
        return PathArr[0];
	}

	//Convert BST tree to String Function
	DT.BST.prototype.isBST = function(obj){
		var flag = true,
			node = obj.tree,
			minValue = this.minValue(),
			maxValue = this.maxValue();

		function isSearchable(node, minValue,maxValue){
			if(node && node.element){
				if(node.element < minValue || node.element > maxValue){
					return false;
				}
				if(node.leftchild){
					return isSearchable(node.leftchild,minValue,node.element);
				}
				if(node.rightchild){
					return isSearchable(node.rightchild,node.element,maxValue);
				}	
			}else{
				return false;
			}

			return true;
		}
		var res = isSearchable(node,minValue,maxValue);	
		return res;
	}
