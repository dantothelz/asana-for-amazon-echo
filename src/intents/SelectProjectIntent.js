module.exports = {
	execute: function(intent, session, response){
		var text = 'You successfully triggered the select project intent.';
		var cardText = text + ' This text will appear in the card created in the Alexa app. ';
		var heading = 'Select Project Intent Card Heading';
		response.tellWithCard(text, heading, cardText);
	}
};
