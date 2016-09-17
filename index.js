'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'Ant Jokes';

/**
 * Array containing space facts.
 */
var FACTS = [
    "What do you call a really big ant? ... gi-ant! ",
    "What do you call an ant that hates the environment? ...  pollut-ant. ",
    "What do you call an ant that likes water? ... absorb-ant",
    "What do you call an ant that likes to put out fires? ... fire hydr-ant. ",
    "What do you call a really old ant? ... antique! ",
    "What do you call an ant that likes to sell stuff? ... merch-ant.",
    "What do you call an ant that likes Christmas? ... S-ant-a. ",
    "What do you does an ant need if it smells really bad? ... deodor-ant. ",
    "What do you call an ant that smells really nice? ... fragr-ant."
    "What do you call an ant that has a trunk? ... eleph-ant.",
    "Where do ants come from? ... Atl-ant-a.",
    "What do you call an ant that is kind of shy? ... hesit-ant.",
    "What do you call an ant that lives somewhere? ... habit-ant.",
    "What kind of ant is valuable? ... import-ant.",
    "What do you call a fancy ant? ... eleg-ant.",
    "what do you call a smart ant? ... brilli-ant.",
    "What do you call a baby ant? ... inf-ant.",
    "What do you call a purple ant? ... eggpl-ant.",
    "What do you call an ant that helps a king? ... serv-ant.",
    "What do you call the medicine for ants? ... ant-i-biotics.",
    "What do you call an ant that is in the military? ... serge-ant.",
    "What do you call an ant that grows in soil? ... pl-ant.",
    "What do you call an ant that is having a birthday? ... celebr-ant.",
    "What do you call an ant that is bossy? ... tyr-ant.",
    "What do you call an ant that never changes? ... const-ant.",
    "What do you call an ant that won't stop moving? ... ant-sy.",
    "What do you call a far away ant? ... dist-ant.",
    "What do you call a noteworthy ant? ... signific-ant"
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random space fact from the space facts list
        var factIndex = Math.floor(Math.random() * FACTS.length);
        var randomFact = FACTS[factIndex];

        // Create speech output
        var speechOutput = "Here is your ant joke: " + randomFact;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "Do you want to hear more ant jokes?";
        var reprompt = "Do you want to hear more ant jokes?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'See you later, dude.');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Peace out, yo');
    }
};
