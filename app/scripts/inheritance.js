(function () {
    //this.x = 'inny x';
    var obj = {x: 5, y: 10,
        getX: function () {
            console.log(this.x);
        }};
    var otherObj = Object.create(obj);
    obj.x = 6;
    console.log(otherObj);
    otherObj.getX();

    var AnotherObj = function () {
        this.x = 'anotherX';
    }

    AnotherObj.prototype = otherObj;
    AnotherObj.prototype.x = 8;
    console.log(new AnotherObj());
})();