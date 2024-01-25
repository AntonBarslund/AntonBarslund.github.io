document.addEventListener('click', function(event) {
    var targetElement = event.target;

    // Check if the clicked element or any of its ancestors is the target div
    while (targetElement) {
        if (targetElement.id === 'focuspost') {
            // Clicked inside the div or its descendants, do nothing
            return;
        }
        targetElement = targetElement.parentElement;
    }

    // Clicked outside the div, trigger your function
    outsideClickFunction();
});

function outsideClickFunction() {
    const yourDiv = document.getElementById('focuspost');
    const displayState = window.getComputedStyle(yourDiv).display;
    const focusPost = document.getElementById("focuspost");

    if (displayState === "block"){
        //focusPost.style.display = "none";

    }
    
    // Add your custom logic here
}

function openpost(pic, id){
    const close = document.getElementById('close');
    const focusPost = document.getElementById("focuspost");
    const focuspic = document.querySelector("#focuspic img");

    focuspic.src = pic;
    focuspic.alt = id;

    focusPost.style.display = "flex";
    close.style.zIndex = "1";
    
}

function closepost(){
    const close = document.getElementById('close');
    const focusPost = document.getElementById("focuspost");

    focusPost.style.display = "none";
    close.style.zIndex = "-1";
}