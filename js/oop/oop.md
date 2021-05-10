# Constructors

Constructors - Functions that create new objects

They define properties and behaviours that will belong to the new object.

Blueprint for the creation of new objects.

function Bird(){
	this.name = 'Abe';
	this.color = 'blue';
	this.numLegs = 2;
}

## Constructor Features

1) Defined with a CAPITALIZED NAME to distinguish them from other functions that are not `constructors`
2) Use the keyword `this` to set properties of the object they will create. Inside the constructor, `this` refers to the new object it will create.
3) Defined properties and behaviors instead of returning a value as other functions might.

 
# Own Properties

In the following example, the Bird constructor defines two properties: name and numLegs:

function Bird(name) {
  this.name  = name;
  this.numLegs = 2;
}

let duck = new Bird("Donald");
let canary = new Bird("Tweety");
name and numLegs are called own properties, because they are defined directly on the instance object. That means that duck and canary each has its own separate copy of these properties. In fact every instance of Bird will have its own copy of these properties. The following code adds all of the own properties of duck to the array ownProps:

let ownProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps);
The console would display the value ["name", "numLegs"].


