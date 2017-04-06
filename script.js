//Functions to provide message statistics on the Portfolio page

function getMessage() {
	var messageText = document.getElementById("messageText").value;
	return messageText;
}

function setNumWords(message) {
	var numWords = 0;
	for (var i = 0; i < message.length; i++) {
		if (message[i] === " ") {
			numWords++;
		}
	}
	return numWords + 1;
}

function setNumSentences(message) {
	var numSentences = 0;
	for (var i = 0; i < message.length; i++) {
		if (message[i] === ".") {
			numSentences++;
		}
	}
	return numSentences;
}

function setAverageWords(message) {
	var averageWords = "";
	averageWords = setNumWords(message) / setNumSentences(message);
	return averageWords.toFixed(0);
}

function setNumSpaces(message) {
	var numSpaces = 0;
	for (var i = 0; i < message.length; i++) {
		if (message[i] === " ") {
			numSpaces++;
		}
	}
	return numSpaces;
}

function returnStats() {
	document.getElementById("numberWords").innerHTML = "Number of words: " + setNumWords(getMessage());
	document.getElementById("numberSentences").innerHTML = "Number of sentences: " + setNumSentences(getMessage());
	document.getElementById("averageWords").innerHTML = "Average number of words per sentence: " + setAverageWords(getMessage());
	document.getElementById("numberSpaces").innerHTML = "Number of spaces: " + setNumSpaces(getMessage());
}
