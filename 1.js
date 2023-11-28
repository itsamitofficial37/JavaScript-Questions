setTimeout(() => {
    console.log('setTimeout wins');
    },0);
    queueMicrotask(() => {
    console.log('queueMicrotask wins');
    });

    // Tasks from queueMicrotask are called after the callstack
    // is empty and before the event loop is called. Tasks from setTimeout are
    // part of the eventQueue.


    // answer is queueMicroTask wins