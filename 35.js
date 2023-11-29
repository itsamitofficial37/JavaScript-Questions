// event listener   event target vs event current target 

function handleClick(element) {
    console.log(`Clicked ${element}`);
    console.log('event.target:', event.target.id);
    console.log('event.currentTarget:', event.currentTarget.id);
  }