gsap.registerPlugin(ScrollTrigger);
window.onload = function () {
    setTimeout(() => {
        ScrollTrigger.create({
            trigger: "#first_project_content",
            start: "top 30px",
            end: "+="+($("#first_project_img").height()-$("#first_project_content").height()),
            pin: true
        });
        ScrollTrigger.create({
            trigger: "#project__1__content",
            start: "top 100px",
            end: "+="+($("#project__1__img").height()-$("#project__1__content").height()),
            pin: true
        });
        ScrollTrigger.create({
            trigger: "#project__2__content",
            start: "top 100px",
            end: "+="+($("#project__2__img").height()-$("#project__2__content").height()),
            pin: true
        });
    }, 300);
}