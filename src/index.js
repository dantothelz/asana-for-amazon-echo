var AlexaSkill = require('./AlexaSkill');
var config = require('./app_config.json');
var APP_ID = config.appId;

var SkillController = function(){
  AlexaSkill.call(this, APP_ID);
};

SkillController.prototype = Object.create(AlexaSkill.prototype);
SkillController.prototype.constructor = SkillController;

SkillController.prototype.eventHandlers.onLaunch = function(launchRequest, session, response){
  var output = 'Welcome to Asana for Amazon Echo. This is a prompt for you to interact with the app. You can say something now, and Alexa will try to match it with one of the app\'s intents';
  var reprompt = 'You hesitated too long, so here is a second prompt, or reprompt, for you to interact with the app.';

  response.ask(output, reprompt);
};

SkillController.prototype.intentHandlers = {
  CreateTaskIntent: function(intent, session, response){
    var IntentHandler = require("./intents/CreateTaskIntent");
    IntentHandler.execute(intent, session, response);
  },
  ListTaskIntent: function(intent, session, response){
    var IntentHandler = require("./intents/ListTaskIntent");
    IntentHandler.execute(intent, session, response);
  }
  SelectProjectIntent: function(intent, session, response){
    var IntentHandler = require("./intents/SelectProjectIntent");
    IntentHandler.execute(intent, session, response);
  },
  ListProjectsIntent: function(intent, session, response){
    var IntentHandler = require("./intents/ListProjectsIntent");
    IntentHandler.execute(intent, session, response);
  }
};

exports.handler = function(event, context) {
    var skill = new SkillController();
    skill.execute(event, context);
};
