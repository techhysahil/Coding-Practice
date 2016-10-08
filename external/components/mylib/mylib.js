function traverseJSON(obj){
	if(typeof(obj) === "object"){
		for(var i in obj){
			if(typeof(obj[i]) === "object"){
				// If object is Object
				if(Object.prototype.toString.call(obj[i]) === "[object Object]"){
					traverseJSON(obj[i]);
				}
				// // If object is Array
				if(Object.prototype.toString.call(obj[i] === "[object Array]")){
					var data = obj[i];
					for(var j=0; j<data.length;j++){
						traverseJSON(data[j]);
					}
				}
			}else{
				console.log(i+":"+obj[i])	
			}
		}	
	}	
}