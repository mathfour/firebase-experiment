/**
 * Created by SilverDash on 5/4/17.
 */


var configThisAlready = {
    apiKey: "AIzaSyCNyA8ecM-65kxrfuwxxMQr1f0Ujoasr7I",
    authDomain: "fir-experiment-74c08.firebaseapp.com",
    databaseURL: "https://fir-experiment-74c08.firebaseio.com/",
    storageBucket: "fir-experiment-74c08.appspot.com"
};
console.log("configThisAlready", configThisAlready);

firebase.initializeApp(configThisAlready);

console.log("configThisAlready", configThisAlready);

// Create a variable to reference the database
var uberDatabase = firebase.database();

console.log("uberDatabase", uberDatabase);
// console.log("uberDatabase", firebase.database());

// bmc:
var referencedDatabase = uberDatabase.ref();

console.log("referencedDatabase", referencedDatabase);
console.log("uberDatabase.ref()", uberDatabase.ref());

var thisUserID = referencedDatabase.push({
    newBit: "this is new",
    moreStuff: "this is more stuff"
}).key;

var thisUserIDLong = firebase.database().ref().push({
    newBit: "this is new",
    moreStuff: "this is more stuff"
}).key;

// bmc: thisUserID is the key for the new entry

console.log("thisUserID", thisUserID);
console.log("thisUserIDLong", thisUserIDLong);

var thisUserDatabase = uberDatabase.ref(thisUserID);

var thisUserDatabaseLong = firebase.database().ref(thisUserID);


console.log("thisUserDatabase", thisUserDatabase);
console.log("thisUserDatabaseLong", thisUserDatabaseLong);

var thisUserMoreStuff = thisUserDatabase.child("moreStuff");
var thisUserMoreStuffLong = firebase.database().ref(thisUserID).child("moreStuff");

console.log("the MoreStuff part for this user is : " + thisUserMoreStuff);
console.log("the MoreStuff Long part for this user is : " + thisUserMoreStuffLong);

// bmc: create a set of data in firebase from the information inputs and outputs
thisUserMoreStuff.push({
    anotherLevel: "next level",
    moreOnAnotherLevel: "even more stuff"
});

// bmc: this next line adds another child called anotherLevel to the child moreStuff
var anotherThing = thisUserDatabase.child("moreStuff").child("anotherLevel");

var anotherThingLong = firebase.database().ref(thisUserID).child("moreStuff").child("anotherLevel");

console.log("anotherThing", anotherThing);
console.log("anotherThingLong", anotherThingLong);


var doesThisWork = firebase.database().ref(thisUserID).child("anotherLevel");
console.log("doesThisWork", doesThisWork);

firebase.database().ref(thisUserID).child("totallDiff").push({
    one: "I can add stuff",
    two: "to children by skipping",
    three: "the other kids"
});


referencedDatabase.on("value", function (snapshot) {
    console.log(snapshot.val());
    console.log(snapshot.val().newBit);
    console.log(snapshot.val().moreStuff);
    console.log(snapshot.val().moreStuff.anotherLevel);
});