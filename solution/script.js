const ratingButtons = document.querySelectorAll('.rating-button');
const submit = document.getElementById('submit');
var selected = undefined;

ratingButtons.forEach(element => {
    element.addEventListener("click", () => {
        if (selected) {
            selected.classList.remove('selected');
        }
        selected = element;
        element.classList.add('selected');
    });
});

submit.addEventListener("click", () => {
    document.querySelector('.container').classList.toggle("hidden");
    document.querySelector('.thankyou').classList.toggle("hidden");
    document.getElementById('result').innerHTML = selected.innerHTML;
});

