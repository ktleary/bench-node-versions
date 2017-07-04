# bench-node-versions
different versions of node iterating over arrays

    node-bench$ node arrays.js 
    arr1 x 2,533,180 ops/sec ±2.18% (77 runs sampled)
    arr2 x 1,916,572 ops/sec ±4.05% (77 runs sampled)
    loop3 x 842,178 ops/sec ±2.07% (80 runs sampled)
    loop4 x 3,518,906 ops/sec ±1.92% (80 runs sampled)
    loop5 x 780,346 ops/sec ±1.93% (76 runs sampled)
    loop6 x 4,034,439 ops/sec ±2.21% (79 runs sampled)
    Fastest is loop6
    node-bench$ node -v
    v6.11.0

    node-bench$ node arrays.js 
    arr1 x 2,786,620 ops/sec ±1.79% (80 runs sampled)
    arr2 x 2,036,402 ops/sec ±2.70% (79 runs sampled)
    loop3 x 1,570,032 ops/sec ±1.39% (83 runs sampled)
    loop4 x 3,593,071 ops/sec ±2.91% (78 runs sampled)
    loop5 x 262,141 ops/sec ±2.60% (62 runs sampled)
    loop6 x 4,872,492 ops/sec ±1.92% (78 runs sampled)
    Fastest is loop6
    node-bench$ node -v
    v7.2.1

    node-bench$ node arrays.js 
    arr1 x 7,123,761 ops/sec ±2.94% (74 runs sampled)
    arr2 x 2,046,782 ops/sec ±3.46% (75 runs sampled)
    loop3 x 1,630,052 ops/sec ±1.25% (82 runs sampled)
    loop4 x 9,526,071 ops/sec ±2.09% (77 runs sampled)
    loop5 x 8,717,823 ops/sec ±1.93% (71 runs sampled)
    loop6 x 9,357,440 ops/sec ±3.15% (77 runs sampled)
    Fastest is loop4,loop6
    node-bench$ node -v
    v8.0.0
