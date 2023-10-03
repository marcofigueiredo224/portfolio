
        document.addEventListener("DOMContentLoaded", function () {
    const sectionsToReveal = document.querySelectorAll(".reveal");

    const revealSection = (section) => {
        section.classList.remove("hidden");
        section.classList.add("visible");
    };

    const hideSection = (section) => {
        section.classList.remove("visible");
        section.classList.add("hidden");
    };

    const handleScroll = () => {
        sectionsToReveal.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight * 0.75) {
                revealSection(section);
            } else {
                hideSection(section);
            }
        });
    };

    
    window.addEventListener("scroll", handleScroll);

     
    handleScroll();
});
