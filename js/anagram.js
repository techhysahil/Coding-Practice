function removeCharFromstr(str,char){
	var pos = str.indexOf(char);
	var temp = str.slice(0,pos)+str.slice(pos+1,str.length);
	return temp;
}
function testString(first_str,second_str){
	var temp_array = second_str.split('');
	var flag_anagram = true;
	temp_array.forEach(function(char){
		if(first_str.indexOf(char) == -1){
			flag_anagram = false;
			return;
		}
		first_str = removeCharFromstr(first_str,char);
	})
	if(flag_anagram){
		alert("Congrats!! These strings are Anagram")
	}else{
		alert("Damn!! These strings are not Anagram")
	}

	document.getElementById('first_string').value = "";
	document.getElementById('second_string').value = "";
}

function checkAnargram(event){
	// Prevent butoon default behavaiour
	event.preventDefault();

	var first_str = document.getElementById('first_string').value;
	second_str = document.getElementById('second_string').value;

	if(first_str && second_str){
		//Chec the length of both string and start test cases with small string.
		if(first_str.length === second_str.length){
			testString(first_str,second_str);
		}else{
			alert("These two strings are of different length.")
		}
	}else{
		if(first_str === ""&& second_str === ""){
			alert("Fields cann't be empty");
		}
	}
}