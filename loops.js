var Benchmark = require("benchmark");
var suite = new Benchmark.Suite();

// add tests
suite
  .add("loop1", function () {
    for (let i = 0; i < 1000; i++) {
      const j = i * i;
    }
  })
  .add("loop2", function () {
    let i = 0;
    while (i < 1000) {
      const j = i * i;
      i = i + 1;
    }
  })
  .add("loop3", function () {
    let k = 1000;
    while (k > 0) {
      const j = k * k;
      k = k - 1;
    }
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
