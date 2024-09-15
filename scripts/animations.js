document.addEventListener('DOMContentLoaded', () => {
    const tl = gsap.timeline()
    const tl1 = gsap.timeline()

    tl.from(".h-left h5", {
        y: -20,
        opacity: 0,
        duration: 0.5,
        delay: 1
    })

    tl.from(".h-right ul li", {
        y: -20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.15
    })

    gsap.from("#header-toggle-icon", {
        y: -20,
        opacity: 0,
        duration: 0.5,
        delay: 1.5
    })

    tl1.from(".cover-content h1", {
        y: -50,
        opacity: 0,
        duration: 0.5,
        delay: 1
    })

    tl1.from(".cover-content h2", {
        y: 50,
        opacity: 0,
        duration: 0.5,
    })

    gsap.to(".experience-pin-page h1", {
        transform: "translateX(-95%)",
        color: '#636363',
        scrollTrigger: {
            trigger: ".experience-pin-page",
            scroller: "body",
            start: "top 0%",
            end: "top -100%",
            scrub: 2,
            pin: true
        }
    })

    gsap.from(".about-left-box", {
        x: -80,
        opacity: 0,
        duration: 0.75,
        scrollTrigger: {
            trigger: ".about-section",
            scroller: "body",
            start: "top 50%"
        }
    })

    gsap.from(".about-right-box", {
        y: 80,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
            trigger: ".about-right-box",
            scroller: "body",
            start: "top 100%"
        }
    })

    gsap.from("#services h2", {
        y: 50,
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
            trigger: "#services h2",
            scroller: "body",
            start: "top 90%"
        }
    })

    gsap.from(".services-boxes .service-box", {
        y: 75,
        opacity: 0,
        duration: 0.75,
        delay: 0.2,
        scrollTrigger: {
            trigger: ".services-boxes",
            scroller: "body",
            start: "top 80%",
        }
    })

    gsap.from(".html", {
        width: 0,
        duration: 0.75,
        delay: 0.2,
        scrollTrigger: {
            trigger: ".expertise-content",
            scroller: "body",
            start: "top 40%",
        }
    })

    gsap.from(".css", {
        width: 0,
        duration: 0.75,
        delay: 0.4,
        scrollTrigger: {
            trigger: ".expertise-content",
            scroller: "body",
            start: "top 40%",
        }
    })

    gsap.from(".js", {
        width: 0,
        duration: 0.75,
        delay: 0.6,
        scrollTrigger: {
            trigger: ".expertise-content",
            scroller: "body",
            start: "top 40%",
        }
    })

    gsap.from("#projects h2", {
        y: 50,
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
            trigger: "#projects h2",
            scroller: "body",
            start: "top 80%"
        }
    })

    gsap.from(".projects-grid .project-box", {
        y: 75,
        opacity: 0,
        duration: 0.75,
        delay: 0.2,
        scrollTrigger: {
            trigger: ".projects-grid",
            scroller: "body",
            start: "top 80%"
        }
    })

    gsap.from("#see-more-btn", {
        y: 50,
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
            trigger: "#see-more-btn",
            scroller: "body",
            start: "top 80%"
        }
    })

    gsap.from(".contact-box", {
        y: 75,
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
            trigger: ".contact-box",
            scroller: "body",
            start: "top 80%"
        }
    })
     
    gsap.from(".contact-data", {
        y: 75,
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
            trigger: ".contact-data",
            scroller: "body",
            start: "top 100%"
        }
    })
})