async function goodbye() {
    return "goodbye";
    }

    goodbye().then((result)=> {
        console.log("Promise returned")
    })

    // async function always return promise 