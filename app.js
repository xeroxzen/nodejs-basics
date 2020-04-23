// setTimeout(function(){
//   console.log('3 seconds have passed...')
// }, 3000);
// var time = 0
// setInterval(function(){
//   time += 2;
//   console.log(time + ' seconds have passed')
// }, 2000);

// var stuff = require('./stuff');
//
//
// console.log(stuff.counter(['Andile', 'Jaden', 'Arya']));
// console.log(stuff.adder(3,4));
// console.log(stuff.adder(stuff.pi, 4));

// Require the event module

var events = require('events');
var util = require('util');

var Person = function(name){
  this.name = name;
}

util.inherits(Person, events.EventEmitter);

var andile = new Person('Andile')
var mira = new Person('Mira')
var sasha = new Person('Sasha')
var people = [andile, mira, sasha];

people.forEach(function(person){
  person.on('speak', function(mssg){
    console.log(person.name + ' said: ' + mssg)
  });
});

andile.emit('speak', 'Hey fellas')
mira.emit('speak', 'I am Mira and I am beautiful')


// var myEmitter = new events.EventEmitter();
//
// myEmitter.on('someEvent', function(mssg){
//   console.log(mssg)
// })
//
// myEmitter.emit('someEvent', 'the event was emitted');
