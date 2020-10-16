
function changeImage() {
        document.getElementById("imgClicked").src="image/avatar-2.png";
}


function modifyElements() {
    let newColor = prompt('Enter a color');
    let newName = prompt('Enter your name');
    document.getElementById("name").innerHTML = newName;
    document.getElementById("name").style.color = "white";
    document.querySelector(".pink-bg").style.background = newColor;
    function changeColor(className) {
        const elements = document.querySelectorAll(className);
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.color = newColor;
        }
    }
    changeColor(".pink-text");
}


const modifyList = () => {
    
}
