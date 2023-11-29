const a = {x: 1}
const b = {...a}

const c = {};
Object.assign(c, a);
a.x = 2;
console.log(a.x);
console.log(b.x);
console.log(c.x);