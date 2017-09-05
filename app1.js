var restify = require('restify');
var YQL     = require('yql');
var builder = require('botbuilder');

const AIMLInterpreter = require('AIMLInterpreter');

var aimlInterpreter = new AIMLInterpreter({ name: 'John', age: '25' });
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/ai.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/alice.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/astrology.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/atomic.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/badanswer.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/biography.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/bot.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/bot_profile.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/client.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/client_profile.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/computers.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/continuation.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/date.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/default.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/drugs.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/emotion.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/food.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/geography.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/gossip.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/history.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/humor.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/imponderables.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/inquiry.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/interjection.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/iu.aiml']);
//aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/junktest.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/knowledge.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/literature.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/loebner10.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/money.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/movies.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/mp0.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/mp1.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/mp2.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/mp3.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/mp4.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/mp5.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/mp6.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/music.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/numbers.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/personality.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/phone.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/pickup.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/politics.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/primeminister.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/primitive-math.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/psychology.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/pyschology.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/reduction.names.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/reduction0.safe.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/reduction1.safe.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/reduction2.safe.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/reduction3.safe.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/reduction4.safe.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/reductions-update.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/religion.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/salutations.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/science.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/sex.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/sports.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/stack.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/stories.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/that.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/update_mccormick.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/update1.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/wallace.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/xfind.aiml']);

var count1;
// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
   console.log('%s listening to %s', server.name, server.url); 
});

// Create chat connector for communicating with the Bot Framework Service
var connector = new builder.ChatConnector({
    //appId: process.env.MICROSOFT_APP_ID,
	appId: "e0746c6b-a262-4158-b3ce-b95d39f75651",
	appPassword: "QE1mNzF7PY50AzfEfBhUjL8"
    //appPassword: process.env.MICROSOFT_APP_PASSWORD
});

// Listen for messages from users 
server.post('/api/messages', connector.listen());

// Receive messages from the user and respond by echoing each message back (prefixed with 'You said:')

/*var bot = new builder.UniversalBot(connector, function (session) 

{
	if (session.message.text.includes("hella"))
	{
	session.send('Brillio product \n\n Brillio creates innovative digital experiences for your customers. We use advanced digital engineering to ensure these experiences run smoothly.\n\n And we enable customer-facing and operational insights with the power of big data analytics.');
	}
	else if (session.message.text.includes("how r u"))
	{
	session.send("I am doing good\n\nHow r u");
	}
	else if (session.message.text.includes("hi"))
	{
	session.send('Hi \n\n How can i help you');
	}
	else if (session.message.text.includes("happy"))
	{
	session.send('Good to see you happy');
	}
	//else
	//{
    //session.send("You said: %s", session.message.text);
	//}
});*/

var bot = new builder.UniversalBot(connector, function (session) {
		session.send('Sorry, I did not understand \'%s\'. Please check your input.', session.message.text);
});

//var bot = new builder.UniversalBot(connector);


/*
var LUIS_MODEL_URL='https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/a3902178-7bb8-4400-ad97-9720a5e6f0c9?subscription-key=77230c4c7ccf4d4e966167ad31a7190c&timezoneOffset=0&verbose=true&q='

var recognizer = new builder.LuisRecognizer(LUIS_MODEL_URL);
bot.recognizer(recognizer);
var intents = new builder.IntentDialog({recognizers:[recognizer]})
.matches('None',(session, args)=>{
 session.send('Hi this is the none intent you said: \'%s\'.',session.message.text)
})
.matches('weather',(session, args)=>{
 session.send('you asked for weather')
})
*/


/*bot.dialog('weather', [
  function(session,args,next){
  session.send('Welcome to the Weather finder! We are analyzing your message: \'%s\'', session.message.text);
  }
  ]).triggerAction({
    matches: 'weather'
});*/

  /*bot.dialog('greeting', [
  function(session,args,next){
  session.send('Hey Brillio  \n\n\nI am your smart auto assistant powered by Hella. Help me with your car details so that I can do a lot better for you. Which Lexus auto do you own?');
  /*if (session.message.text.includes("hi"))
  {
  session.send('Hey Brillio  \n\n\nI am your smart auto assistant powered by Hella. Help me with your car details so that I can do a lot better for you. Which Lexus auto do you own? ');
  }
  //session.send('Welcome to the Weather finder! We are //analyzing your message: \'%s\'', session.message.text);*/
 /* }
  ]).triggerAction({
    matches: 'greeting'
});*/

/*
bot.dialog('greeting', [
  function(session,args,next){
  
  var greetingListEntity = builder.EntityRecognizer.findEntity(args.intent.entities, 'greetingList');
  
  if(greetingListEntity)
  
  //if (modelEntity === 'Lexus' ||  modelEntity === 'lexus')
	{
	//session.send('model %s', args[0])
	builder.Prompts.text(session, 'Hey Brillio  \n\n\nI am your smart auto assistant powered by Hella. Help me with your car details so that I can do a lot better for you. Which Lexus auto do you own?');
	}
	else
	{
	  //user
	  //session.send('model %s', args[0])
	  //session.send('model %s', modelEntity)
	  //builder.Prompts.text(session,modelEntity);
	builder.Prompts.text(session, 'please enter valid input');
	}
   count1=1; 
  //session.send('Let me know your car number');
  }
  ]).triggerAction({
    matches: 'greeting'
});
*/


 
const aimlPromise = function (question) {
    return new Promise(function (resolve, reject) {
        aimlInterpreter.findAnswerInLoadedAIMLFiles(question, function (answer, wildCardArray, input) {
            return resolve(answer);
//should also handle reject!!! this is demo code only :)
        });
    })
};





/*
bot.dialog('greeting', [
    
    function (session) {
        builder.Prompts.text(session, 'Hi! Ask me something...');
    },
    function (session, results) {
        aimlPromise(results.response).then(res => session.send(` ${res}`));
    }
    
    
  function(session,args,next){
  
  var greetingListEntity = builder.EntityRecognizer.findEntity(args.intent.entities, 'greetingList');
  
  if(greetingListEntity)
  
  //if (modelEntity === 'Lexus' ||  modelEntity === 'lexus')
	{
	//session.send('model %s', args[0])
	builder.Prompts.text(session, 'Hey Brillio  \n\n\nI am your smart auto assistant powered by Hella. Help me with your car details so that I can do a lot better for you. Which Lexus auto do you own?');
	}
	else
	{
	  //user
	  //session.send('model %s', args[0])
	  //session.send('model %s', modelEntity)
	  //builder.Prompts.text(session,modelEntity);
	builder.Prompts.text(session, 'please enter valid input');
	}
   count1=1; 
  //session.send('Let me know your car number');
  }
    
    
  ]).triggerAction({
    matches: 'greeting'
});
*/


var IntentText;


bot.recognizer({
  recognize: function (context, done) {
  var intent = { score: 0.0 };

     // intent = { score: 1.0, intent: context.message.text };
      
      var help1 = context.message.text;
      console.log('inside help')
      console.log(help1)
      console.log('inside inside help')
      IntentText = help1;
      console.log('inside inside help', IntentText)
      
      intent =  { score: 1.0, intent: 'help' };
//        if (context.message.text) {
//            switch (context.message.text.toLowerCase()) {
//                case 'help':
//                    intent = { score: 1.0, intent: 'Help' };
//                    break;
//                case 'goodbye':
//                    intent = { score: 1.0, intent: 'Goodbye' };
//                    break;
//            }
//        }
        done(null, intent);
    }
});



bot.dialog('alicedialog', [
  //  session.endDialog("This bot will echo back anything you say. Say 'goodbye' to quit.");

    function (session,args,next) {
        console.log('test session', args,next)
        
        aimlPromise(IntentText).then(res => session.send(` ${res}`));
        
//        builder.Prompts.text(session, 'Hi! Ask me something... ');
        /*if(IntentText.toLowerCase() == 'hi' || IntentText.toLowerCase() == 'hello') {
            session.send('Hi! Ask me something... ');
        } else {
            aimlPromise(IntentText).then(res => session.send(` ${res}`));
        }*/
    },
    
  
        function (session, results) {
        console.log('first')
        console.log(results)
        console.log(results,'session, results')
      console.log('second')
        
  //      console.log(results,'session, res')
    
    
}]).triggerAction({ matches: 'help' });





