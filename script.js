let inputsContainers = document.querySelectorAll(".input-container");

document.getElementById("submit-btn").onclick = function (e) {
    inputsContainers.forEach(function (elem) {
        if (elem.firstElementChild.value.length > 0 && !elem.firstElementChild.validity.typeMismatch) {
            elem.children[1].style.display = "none";
            elem.children[2].style.display = "none";
        }
        else {
            elem.children[1].style.display = "initial";
            elem.children[2].style.display = "initial";
            e.preventDefault();
        }
    });
}
inputsContainers.forEach(function (elem) {
    elem.firstElementChild.onblur = function () {
        if (elem.firstElementChild.value.length == 0 || elem.firstElementChild.validity.typeMismatch) {
            {
                elem.children[1].style.display = "initial";
                elem.children[2].style.display = "initial";
                if (elem.firstElementChild.validity.typeMismatch) {
                    elem.firstElementChild.style.color = "#ff7a7a";
                }
            }
        }
    }
    elem.firstElementChild.onfocus = function () {
                elem.children[1].style.display = "none";
                elem.children[2].style.display = "none";
                elem.firstElementChild.style.color = "#3e3c49";
    }
});