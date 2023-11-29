const printDateAndTime = () => {
    const today = new Date();
    const time = today.getHours() + ":" + today;
    console.log(time);
    };
    printDateAndTime();


    const container = document.createElement("div");
    const heading = document.createElement("h1");
    heading.textContent = "HELLO WORLD"

    const shadow = container.attachShadow({ mode: 'open' });
    shadow.appendChild(heading)
    heading.attachShadow();
    
    document.body.appendChild(container);
