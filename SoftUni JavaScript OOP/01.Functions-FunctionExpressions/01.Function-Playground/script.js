function TheFunc() {
    console.log("How many arguments: " + arguments.length);
    for (var argument in arguments) {
        argument = arguments[argument];
        console.log("Type of " + argument + ": " + typeof(argument));
        console.log("////This////");
        console.log(this);
        console.log("////End This////");
    }
}
globalScope = 'globalScope';
var scope = 'scope';
TheFunc.call(null, 'asd', 5,2);
TheFunc.call(this, 3.42, {name: 'pencho'});
TheFunc.call({name: 'goshko'}, "peshko");