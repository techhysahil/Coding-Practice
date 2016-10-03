function checkRansonNote(event){
	// Prevent butoon default behavaiour
	event.preventDefault();

	var magazine_str = document.getElementById('magazine_string').value;
	note_str = document.getElementById('note_string').value,
	magazine_str_length = document.getElementById('magazine_string_len').value,
	note_str_length = document.getElementById('note_string_len').value;	

	if(magazine_str && note_str && magazine_str_length && note_str_length){
		var magazine_str_arr = magazine_str.split(' '),
			note_str_arr = note_str.split(' ');

		MatchRansomNote(magazine_str_arr,note_str_arr);
	}else{
		alert('please fill all the input fields');
	}
}

function MatchRansomNote(arr1,arr2){
	var flag = true;
	arr2.forEach(function(item){
		if(arr1.indexOf(item) == -1){
			flag = false;
			return;
		}
	})

	if(flag){
		alert('Yes!!! Ransom note can be replicated from magazine');
	}else{
		alert('No!!! Ransom note cannot be replicated from magazine');
	}
}

