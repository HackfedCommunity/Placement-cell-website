// Adding simple animations or interactivity

document.addEventListener('DOMContentLoaded', () => {
    console.log("SOICT Website Loaded Successfully");

    // You can add further interactions here, like scroll animations or menu effects.
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelector('a[href="#"]').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
