// Adding simple animations or interactivity

document.addEventListener('DOMContentLoaded', () => {
    console.log("SOICT Website Loaded Successfully");

    // You can add further interactions here, like scroll animations or menu effects.
});

function scrollToTarget(target) {
    const element = target === '#' ? document.body : document.querySelector(target);
    element.scrollIntoView({ behavior: 'smooth' });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        scrollToTarget(this.getAttribute('href'));
    });
});