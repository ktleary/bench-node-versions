var Benchmark = require("benchmark");
var suite = new Benchmark.Suite();

// add tests
suite
  .add("arr1", function () {
    const arr1 = () => {
      const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
      }
    };
    arr1();
  })
  .add("arr2", function () {
    const arr2 = () => {
      const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      let sum = 0;
      arr.forEach((num) => {
        sum = sum + num;
      });
    };
    arr2();
  })
  .add("loop3", function () {
    const arr3 = () => {
      const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      let sum = 0;
      for (let a in arr) {
        sum = sum + arr[a];
      }
    };
    arr3();
  })
  .add("loop4", function () {
    const arr4 = () => {
      const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      let sum = 0,
        i = 0;
      while (i < arr.length) {
        sum = sum + arr[i];
        i = i + 1;
      }
    };
    arr4();
  })
  .add("loop5", function () {
    const arr5 = () => {
      const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      let sum = 0;
      for (let a of arr) {
        sum = sum + a;
      }
    };
    arr5();
  })
  .add("loop6", function () {
    function arr6() {
      var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9],
        l = arr.length - 1,
        sum = 0;
      while (l >= 0) {
        sum = sum + arr[l];
        l = l - 1;
      }
    }
    arr6();
  })
  .on("cycle", function (event) {
    console.log(String(event.target));
  })
  .on("complete", function () {
    console.log("Fastest is " + this.filter("fastest").map("name"));
  })
  // run async
  .run({
    async: true,
  });
