function checkBalancedString(event){
	// Prevent butoon default behavaiour
	event.preventDefault();

	// Read Inputs
	var input_str = document.getElementById('string_input').value,
		noOfLines_input = document.getElementById('lineOfStr').value;

	//Get each line string	
	if(input_str && noOfLines_input){
		input_str_arr = input_str.split('\n');	

		//call function
		input_str_arr.forEach(function(str,index){
			var res = checkBalancestr(str);
			console.log(index+". "+res);
		})	
	}else{
		alert("Input fields shouldn't be empty")
	}
}

function checkBalancestr(str){
	// Initlize variables
	var braces = '(){}[]',
		stack = [];

	for(var i=0; i<str.length; i++){
		var brace_index = braces.indexOf(str[i]);	
		// Check character is braces or not	
		if(brace_index >= 0){
			if(brace_index%2 === 0){			// Opening braces
				stack.push(brace_index+1);
			}else{								//Closing braces
				if(stack.length === 0 || stack.pop() != brace_index){
					return false;
				}
			}
		}
	}
	
	// Check if any braces is remaining in stack
	if(stack.length > 0){
		return false;	
	}else{
		return true;
	}
}