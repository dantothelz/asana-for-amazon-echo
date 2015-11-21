module.exports = {
	execute: function(intent, session, response){
		var text = 'You successfully triggered the list projects intent.';
		var cardText = text + ' This text will appear in the card created in the Alexa app. ';
		var heading = 'List Projects Intent Card Heading';
		response.tellWithCard(text, heading, cardText);
	}
};
