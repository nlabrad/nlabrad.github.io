//select all the selectors with the classes controls input
const inputs = document.querySelectorAll('.controls input'); //this selects all the ones with 

function handleUpdate() {
    //dataset is an object that contains all the data-xxx info from the HTML element, in this case just the sizing
    const suffix = this.dataset.sizing || ''; //some of them don't have a dataset, so in that case the suffix is ''. Otherwise it appends undefined.
    //the one calling this function is the event listener on the controls or inputs, so it's gonna be an object with the element affected

    //change the variable related to the name by giving it the value passed by the event and adding the suffix for the unit
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix); //as long as the name of the range matches a variable it works
}

//forEach of the elements (each input) stored in inputs (nodeList), addEventListener.
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate)); //this eventListener will call handleUpdate when moving the range
inputs.forEach(input => input.addEventListener('change', handleUpdate)); //calls handleUpdate when the change is finished (click release)