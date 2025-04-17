document.addEventListener("DOMContentLoaded", () => {
    const cube = document.querySelector(".cube");
  
    const updateCubeRotation = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const sectionIndex = Math.round(scrollPosition / windowHeight);
  
      const rotations = [
        "rotateX(-20deg) rotateY(20deg)",      // Face avant rouge
        "rotateY(70deg)",                   // Face droite jaune
        "rotateY(-70deg)",                  // Face gauche vert
        "rotateX(75deg)",                   // Face haut
        "rotateX(-105deg)",                  // Face bas
        "rotateY(200deg)",                  // Face arrière final
      ];
  
      cube.style.transition = "transform 1s ease-in-out";
      cube.style.transform = rotations[sectionIndex] || "rotateX(0deg) rotateY(0deg)";
    };
  
    window.addEventListener("scroll", updateCubeRotation);
  });

  document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-visible");
            } else {
                entry.target.classList.remove("animate-visible"); // Supprime la classe si l'élément sort de l'écran
            }
        });
    }, { threshold: 0.2 }); // Se déclenche lorsque 20% de l'élément est visible

    animatedElements.forEach(el => observer.observe(el));
});

function toggleMenu() {
  const menu = document.querySelector('.menu-links');
  const menuCube = document.querySelector('.menu-cube-container');

  // Bascule l'affichage du menu
  menu.classList.toggle('active');
  
  // Applique la rotation du cube du menu
  menuCube.classList.toggle('active');
}




