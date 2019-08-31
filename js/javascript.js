/* tron animation - delete ---> */

tronAnimation();


function tronAnimation() {
    var wrapper = document.querySelector(".wrapper");
    var text = document.querySelector(".text");

    var textCont = text.textContent;
    text.style.display = "none";

    for (var i = 0; i < textCont.length; i++) {
        (function(i) {
            setTimeout(function() {
                var texts = document.createTextNode(textCont[i])
                var span = document.createElement('span');
                span.appendChild(texts);

                span.classList.add("wave");
                wrapper.appendChild(span);
            }, 800 * i);
        }(i));
    } 

}
/* <--- tron animation - delete */
