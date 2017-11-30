// Here we require/import the HTTP module
var http = require("http");

//Using the previous example as a guide, create an app that has two web servers.
//One that listens on port 7000 and one that listens on port 7500.
// Here we define a port to listen to
var PORT = 7000;
var PORT2 = 7500;

// Here we create a generic function to handle requests and responses
function handleRequest1(request, response) {

  //The below statement is triggered (client-side) when the user visits the PORT URL
  //The one listening on port 7000 will always tell the user something good about themselves.
  response.end("You look MARVELOUS baby!!! " + request.url);
}

function handleRequest2(request, response) {
    
    //The below statement is triggered (client-side) when the user visits the PORT URL
    //The one listening on 7500 will always tell the user something bad about themselves.
      response.end("Hey, here's a breath mint... Use it! " + request.url);
    }
// Here we use the Node HTTP package to create our server.
// We then pass it the handleRequest function to empower it with functionality.
var server1 = http.createServer(handleRequest1);
var server2 = http.createServer(handleRequest2);


// Here we start our server so that it can begin listening to client requests.
server1.listen(PORT, function() {

  // The below statement is triggered (server-side) when a user visits the PORT URL
  console.log("Server listening on: http://localhost:%s", PORT);

});

server2.listen(PORT2, function() {
    
      // The below statement is triggered (server-side) when a user visits the PORT URL
      console.log("Server listening on: http://localhost:%s", PORT2);
    
    });
//Make sure you create a Github repo and commit this code!
//Bonus

//Look for other ways to expand what your server can do. As possibilities:
//Generate the good/bad phrase randomly from a list of predefined phrases
//Use the twitter package inside the response to also return a random tweet