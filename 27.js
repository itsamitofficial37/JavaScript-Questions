function resolveQuickly(x) {
    return new Promise(resolve => {
    console.log(x)
    });
    }
    async function asyncTest() {
    var x = resolveQuickly(10);
    console.log(5);
    }
    asyncTest();