var AlexaSkill = require('./AlexaSkill');
var config = require('./app_config.json');
var APP_ID = config.appId;

var IntentOneHandler = function(intent, session, response){
    var text = 'You successfully triggered Intent One.';
    var cardText = text + ' This text will appear in the card created in the Alexa app. ';
    var heading = 'Test App Sample Card Heading';

    response.tellWithCard(text, heading, cardText);
};

var SkillController = function(){
  AlexaSkill.call(this, APP_ID);
};

SkillController.prototype = Object.create(AlexaSkill.prototype);
SkillController.prototype.constructor = SkillController;

SkillController.prototype.eventHandlers.onLaunch = function(launchRequest, session, response){
  var output = 'Welcome to this test app. This is a prompt for you to interact with the app. You can say something now, and Alexa will try to match it with one of the app\'s intents';
  var reprompt = 'You hesitated too long, and so this is now a second prompt, or reprompt, for you to interact with the test app.';

  response.ask(output, reprompt);
};

SkillController.prototype.intentHandlers = {
  IntentOne: function(intent, session, response){
    IntentOneHandler(intent, session, response);
  },

  IntentTwo: function(intent, session, response){
    var speechOutput = 'The second intent was triggered.';
    response.ask(speechOutput);
  }
};

exports.handler = function(event, context) {
    var skill = new SkillController();
    skill.execute(event, context);
};
