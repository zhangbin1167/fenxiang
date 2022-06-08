function Queue() {
    this.arr = [];

}

//1 enter queue方法
Queue.prototype.enqueue = function (element) {
    this.arr.push(element);
    return this
}
//2、 delete queue方法
Queue.prototype.delqueue = function (element) {
    return this.arr.shift();
}
//3、 查看队列第一个元素
Queue.prototype.first = function () {
    return this.arr[0];
}

//4、 查看队列是否为空

Queue.prototype.kong = function () {
    return this.itemslength == 0;
}
//5、 查看队列中元素的个数
Queue.prototype.size = function () {
    return this.arr.length;
}

//6、toString方法：将数组中的所有元素以字符串格式导出
Queue.prototype.toString = function () {
    return this.arr.toString();
}



//击鼓传花
var brr = ["小李", "小王", "小刘", "小张", "小孙", "小周"];
function passGame(qrr, num) {

    var a = new Queue();

    for (var i = 0; i < qrr.length; i++) {
        a.enqueue(qrr[i])
    }


    // while (a.size() > 1) {
    //     for (var j = 0; j < num - 1; j++) {
    //         a.enqueue(a.delqueue())
    //     }
    //     a.delqueue();

    // }


    var hrr = [];
    while (a.size() > 1) {
        for (var j = 0; j < num - 1; j++) {
            a.enqueue(a.delqueue())
        }
        a.delqueue();

    }




    console.log("获胜者:" + a.toString());

    return a.toString()

}
var b = passGame(brr, 1);
console.log(b + "位置为" + brr.indexOf(b));