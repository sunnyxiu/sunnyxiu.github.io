let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/cat.jpg') {
        myImage.setAttribute('src', 'images/cat2.jpg');
    } else {
        myImage.setAttribute('src', 'images/cat.jpg');
    }
}

let myButton = document.querySelector('button');
myButton.onclick = function() {
    setUserName();
}
let myHeading = document.querySelector('h1');



function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
}