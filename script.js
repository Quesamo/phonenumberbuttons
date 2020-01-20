

var totalButtons = 0;
const buttonsPerRow = 2000;


// Starts everything else

function start() {
    document.getElementById('startButton').style.display = 'none';
    document.body.style.backgroundImage = 'linear-gradient(to top right, grey, white)';
    createNumberButtons(2000)
}

// Creates the number buttons (ofc)
function createNumberButtons(amount) {
    console.log('Function "createNumberButtons" triggered')

    // If no amount argument is given, defaults to the standard amount per row
    if (amount == undefined) {
        amount = buttonsPerRow
    }

    for (i = 0; i < amount ;i++) {
        totalButtons++
        button = document.createElement('button')
        button.innerHTML = totalButtons
        button.addEventListener('click', updateCurrentNumber)
        document.body.appendChild(button)
        console.log(`Created button number ${totalButtons}`);
    }
}

// Updates the displayed number at the top of the screen
function updateCurrentNumber(event) {
    document.getElementById('currentNumber').innerHTML = event.target.innerHTML
    console.log(`Updated current number to ${event.target.innerHTML}`);
}




// Generates more buttons as the user scrolls down
window.onscroll = function(e) {
    
    console.log("SCROLLIN'")
    if (this.oldScroll < this.scrollY) {//true when scrolling down
        console.log("SCROLLIN' DOWN");
        _.throttle(createNumberButtons(), 100) // Throttle this func
    }
    this.oldScroll = this.scrollY;
}