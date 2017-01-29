click("signin-button",logInUser);
/*ifUserIsLoggedIn(function()
{
  console.log(window.currentUser);

});*/

//get reference to the database service
/*var database=firebase.database();
var usersRef=database.ref("users");*/

/*var databaseRef=database.ref();*/
/*
usersRef.on('value',function(snapshot)
{
  console.log(snapshot.val());

});
usersRef.child("4567").set({
    email: "hiteshkhk99@gmail.com"
  });*/
/*console.log(databaseRef.name);*/


/*var signInButton=document.getElementById('signin-button');
console.log(signInButton);*/

/*signInButton.addEventListener("click",buttonClicked);*/

/*click("signin-button",logInUser);
var user ={
  id: 1,
  name: "Hitesh",
  username: "khk98",
  sayHello: function()
  {
    console.log("Hello " +this.name);
  }
};

var user2 ={
  id: 2,
  name: "Raghav",
  username: "raghu",
  sayHello: function()
  {
    console.log("Hello " +this.name);
  }
};
/*console.log(user.name, user.id);
user.sayHello();
*/
/*
var users=[
  user,
  user2
];

for(var i=0;i<users.length;i++)
{
  var user=users[i];
  console.log(user.id);
  console.log(users[i].sayHello());
}*/
/*
var message=new Object();
message.text="Hello";
console.log(message.text);*/
/*{
  redirect("chat.html");
  //window.location="chat.html";
});*/

//https://github.com/WebKit-DAIICT/js-ref-doc

/*console.log("Hello World");//log method is used to log any messages given as parameter
var name="Hitesh";//any variable can be created without spesifying it's datatype
console.log(name);
var n=5;

if(n<5)
{
  console.log("n less than 5");
}
else {
  console.log("n is either greater or equal to 5 ");
}

var user="khk98";

function sayHello(name)
{
  console.log("Hello "+name);
  console.log(user);//user is globally accesed unless overwritten by the function
}
  sayHello("Hitesh");
  sayHello(500);
  //functons can be passed as parameters in javascript because it treats functions as first class citizens like float, int,etc

  function doWork(work)
  {
    work();
  }

doWork(function() {
  console.log("Working....");
});


/*console.log(document);
var logoElements=document.getElementsByClassName('logo');
var logo=logoElements[0];
logo.textContent="Broo!!";
var logoName=logo.textContent;
*/

/*
console.log(logoName);
*/
