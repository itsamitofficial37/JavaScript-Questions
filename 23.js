// what will be the output 
let map1 = new Map([
    ['a', 1],
    ['b', 1],
    ['c', 1],
    ]);
    let map2 = new Map([
    ['a', 2],
    ['b', 2]
    ]);
    let spreadMap = new Map([...map1, ...map2]);
    console.log(spreadMap);

    // a: 2 b: 2 overide ho jayegi pehli vali values se
    