const test = (incrementer) => {
    if (incrementer < 0){
    return;
    }
    console.log('first: ' + incrementer);
    test(incrementer - 1);
    console.log('second: ' + incrementer)
    }
    test(2);