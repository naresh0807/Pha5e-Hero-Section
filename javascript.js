document.addEventListener("DOMContentLoaded", function () {
    gsap.to(".hero-title", { opacity: 1, y: -20, duration: 1 });
    gsap.to(".hero-subtitle", { opacity: 1, y: -10, duration: 1, delay: 0.5 });
    gsap.to(".hero-btn", { opacity: 1, y: -10, duration: 1, delay: 1 });

    const images = document.querySelectorAll(".hero-img");

    images.forEach(img => {
        img.addEventListener("mousemove", (event) => {
            let rect = img.getBoundingClientRect();
            let x = event.clientX - rect.left - rect.width / 2;
            let y = event.clientY - rect.top - rect.height / 2;
            gsap.to(img, { x: x / 10, y: y / 10, duration: 0.5 });
        });

        img.addEventListener("mouseleave", () => {
            gsap.to(img, { x: 0, y: 0, duration: 0.5 });
        });
    });
});
