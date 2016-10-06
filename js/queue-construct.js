
function addNumberToQueue(event){
	event.preventDefault();

	var addEle = document.getElementById('addNumber').value,
		tableQueue = document.getElementById('js_liveQueue'),
		tableRow = tableQueue.children[0].children[0],
		node = document.createElement('TD'),
		textNode = document.createTextNode(addEle);				
		

		if (addEle) {
			node.appendChild(textNode);
			tableRow.appendChild(node);
			
		}else{
			alert("field cann't be empty");
		}
}

function deleteNumberToQueue(event){
	event.preventDefault();

	var addEle = document.getElementById('addNumber').value,
		tableQueue = document.getElementById('js_liveQueue'),
		tableRow = tableQueue.children[0].children[0];

	if(tableRow.hasChildNodes()){
		tableRow.firstElementChild.remove();
	}else{
		alert("There is no item in queue to delete");
	}
}

function printNumberToQueue(event){
	event.preventDefault();

	var addEle = document.getElementById('addNumber').value,
		tableQueue = document.getElementById('js_liveQueue'),
		tableRow = tableQueue.children[0].children[0];

	if(tableRow.hasChildNodes()){
		alert(tableRow.firstElementChild.firstChild.nodeValue);
	}else{
		alert("There is no item in queue to print");
	}
}