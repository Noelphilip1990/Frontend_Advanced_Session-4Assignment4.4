//1.Example for Generic class and different type objects. 
console.log("Example 1..");
var GenericExample = (function () {
    function GenericExample() {
    }
    GenericExample.prototype.setName = function (arg) {
        this.arg = arg;
    };
    GenericExample.prototype.getName = function () {
        return this.arg;
    };
    return GenericExample;
}());
var g1 = new GenericExample();
g1.setName("Noel");
console.log(g1.getName());
var g2 = new GenericExample();
g2.setName(12345);
console.log(g2.getName());
console.log("===============================================================");
console.log("Example 2..");
var User = (function () {
    function User() {
    }
    User.prototype.getName = function (arg) {
        return arg;
    };
    return User;
}());
var l = new User();
console.log(l.getName({ name: "Johnson" }));
