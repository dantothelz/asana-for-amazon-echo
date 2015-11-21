module.exports = {
	execute: function(intent, session, response){
		var text = 'You successfully triggered the create task intent.';
		var cardText = text + ' This text will appear in the card created in the Alexa app. ';
		var heading = 'Create Task Intent Card Heading';
		response.tellWithCard(text, heading, cardText);
	}
};
