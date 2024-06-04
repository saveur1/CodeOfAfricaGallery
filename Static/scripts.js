// Detecting Hover and Performing some actions
window.onload = function() {

    //select all sections
    const image_card = document.querySelectorAll("section");

    for(let i=0; i<image_card.length; i++) {

        //get image tag and link to replace image
        const overlay = image_card[i].querySelector(".overlay");
        const image = image_card[i].querySelector(".image img");

        //replace color image with black and white image on hover
        overlay.addEventListener("mouseenter",function(){
            image.classList.add("hover_enter");
        })

        overlay.addEventListener("mouseleave",function(){
            image.classList.remove("hover_enter");
        })
    }
}