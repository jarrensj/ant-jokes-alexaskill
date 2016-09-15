'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'Ant Jokes';

/**
 * Array containing space facts.
 */
var FACTS = [
    "What do you call a really big ant? ... a gi-ant! ",
    "What do you call an ant that hates the environment? ...  a pollut-ant. ",
    "What do you call an ant that likes water? ... an absorb-ant",
    "What do you call an ant that likes to put out fires? ... a fire hydr-ant. ",
    "What do you call a really old ant? ... an antique! ",
    "What do you call an ant that likes to sell stuff? ... a merch-ant.",
    "What do you call an ant that likes Christmas? ... S-ant-a. ",
    "What do you call an ant that smells really nice? ... deodor-ant. ",
    "What do you call an ant that has a trunk? ... an eleph-ant.",
    "Where do ants come from? ... Atl-ant-a.",
    "What do you call an ant that is kind of shy? ... reluct-ant... or hesit-ant.",
    "What kind of ant are you? ... signific-ant.",
    "What kind of ant is valuable? ... import-ant.",
    "What do you call a fancy ant? ... eleg-ant.",
    "what do you call a smart ant? ... brilli-ant.",
    "What do you call a baby ant? ... inf-ant.",
    "What do you call a purple ant? ... eggpl-ant.",
    "What do you call an ant that helps a king? ... serv-ant.",
    "What do you call the medicine for ants? ... ant-i-biotics."
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
