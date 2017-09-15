var restify = require('restify');
var builder = require('botbuilder');
var request = require('request');
var apiai = require('apiai');
var app = apiai("246c44caf97540f6a617d1f021fa8d4a");

//const AIMLInterpreter = require('AIMLInterpreter');
// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
   console.log('%s listening to %s', server.name, server.url); 
});

// Create chat connector for communicating with the Bot Framework Service

var connector = new builder.ChatConnector({
    appId: 'e0746c6b-a262-4158-b3ce-b95d39f75651',
    appPassword: 'QE1mNzF7PY50AzfEfBhUjL8'
});

// Listen for messages from users 
server.post('/api/messages', connector.listen());



var bot = new builder.UniversalBot(connector);

var model = 'https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/924f8dab-56bf-418c-bde6-038b408314a6?subscription-key=cacc8875f67b434eb7c2ced401a21f2c&verbose=true&timezoneOffset=0&q=';

var recognizer= new builder.LuisRecognizer(model);
var intents = new builder.IntentDialog({ recognizers: [recognizer] });
/*flags*/


var a1=0;
var b1=0;
var c1=0;
var d1=0;
var e1=0;


var a2=0;
var b2=0;
var c2=0;
var d2=0;
var e2=0;


bot.dialog('/', intents);

 

    intents.matches('MainFlow', [
  
    function (session, args) {
    // var intent = args.intent;
     //    var ent_1 = builder.EntityRecognizer.findEntity(intent.entities, 'ServiceType');
       console.log(args.entities);
           
            if(builder.EntityRecognizer.findEntity(args.entities, 'Service')){
           
            
            if(builder.EntityRecognizer.findEntity(args.entities, 'ServiceType')){
        console.log("c1 set")
            b1=1; //c1=0; b2 = 0;
            }
            else if(builder.EntityRecognizer.findEntity(args.entities, 'Alternative')){
            
            e1=1; 
            }
            
            else{
            a1=0; //a2=0;
            }
            
            }
            else if(builder.EntityRecognizer.findEntity(args.entities, 'CarNumbers')){
            
            a1=1; //b1=0; b2 = 0;
            
            }

       if(builder.EntityRecognizer.findEntity(args.entities, 'builtin.datetimeV2.date') || builder.EntityRecognizer.findEntity(args.entities, 'builtin.datetimeV2.datetime')){
           
            c1=1; //d1=0; d2 = 0;
            
            }
       if(builder.EntityRecognizer.findEntity(args.entities, 'ServiceDetails')){
        
            d1=1; //e1=0; e2 = 0;
            }
       if(builder.EntityRecognizer.findEntity(args.entities, 'Alternative')){
            
            e1=1; 
            }
            console.log(a1,b1,c1,d1,e1);
       prioritizer(session, args);
       

}
    ]
    );

  intents.matches('None', [
   function (session, args) {
    console.log("Inside1")
   apiCall(session, args);
   }
    ]
    );





  function prioritizer (session, args){
  if(a1==1 && b1==1 && c1==1 && d1==1 && e1==1){
  a1=0;
b1=0;
c1=0;
d1=0;
e1=0;
f1=0;
  session.send( "Great!");
  session.send( "I have a scheduled a service for you on the requested date. Please feel free to reach me out if you need any other help related to booking a service.");
  return;
  }
  else if(a1==0 || b1==0 || c1==0 || d1==0 || e1==0){
 
  if(a1==0){

  session.send( "I can help you to book a service quickly provided I get few necessary information.");
  session.send( "Let me know your car number!"); 

  }

else if(b1==0){

  session.send( "Just a second!");
  session.send( "Hey John! Hope you are riding your Lexus RC F well. Good to see you back after six months.");
  session.send( "Let me know whether you wish to go for a routine service or an auxiliary service this time?");

  }

else if(c1==0){

  session.send( "Alright!");
  session.send( "Let me know the date and time you are comfortable with.."); 

  }

else if(d1==0){

  session.send( "Fine! Noted it.");
  session.send( "Generally people go for oil change, battery check-up, general servicing during a routine service.");
  session.send("What are your preferences?");

  }
  
    else if(e1==0){

  session.send( "Okay!");
  session.send( "While we service your car, do you prefer a Loaner car or Shuttle sevrice alternative?"); 

 
  }
      }
    return;

  }

  
function apiCall(session, args){
console.log("Inside")
var a = session.message.text;
var request = app.textRequest(a, {
    sessionId: '1234567891'
});

request.on('response', function(response) {
    var a = response;

    session.send(a["result"]["fulfillment"]["speech"]);
});

request.on('error', function(error) {
    console.log(error);
});

request.end();

return;



}

