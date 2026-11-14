
/* =========================================
   EQUINOX — JAVASCRIPT
   Engineering Tomorrow. Building Beyond.
========================================= */

"use strict";


/* =========================================
   1. DOM ELEMENTS
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const contactForm = document.getElementById("contactForm");
const cursorGlow = document.querySelector(".cursor-glow");

const yearElement = document.getElementById("year");

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;


/* =========================================
   2. AUTOMATIC FOOTER YEAR
========================================= */

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


/* =========================================
   3. MOBILE NAVIGATION
========================================= */

if (menuToggle && navLinks) {

  menuToggle.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("active");

    menuToggle.classList.toggle("active", isOpen);

    menuToggle.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

  });


  // Close navigation after clicking a link

  navLinks.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

      navLinks.classList.remove("active");

      menuToggle.classList.remove("active");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

    });

  });


  // Close navigation when clicking outside

  document.addEventListener("click", event => {

    const clickedInsideNav =
      navLinks.contains(event.target);

    const clickedToggle =
      menuToggle.contains(event.target);

    if (!clickedInsideNav && !clickedToggle) {

      navLinks.classList.remove("active");

      menuToggle.classList.remove("active");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

    }

  });

}


/* =========================================
   4. SCROLL REVEAL ANIMATION
========================================= */

const revealElements = document.querySelectorAll(".reveal");

if (prefersReducedMotion) {

  revealElements.forEach(element => {
    element.classList.add("visible");
  });

} else if ("IntersectionObserver" in window) {

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          observer.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px"
    }
  );

  revealElements.forEach(element => {
    revealObserver.observe(element);
  });

} else {

  // Fallback for older browsers

  revealElements.forEach(element => {
    element.classList.add("visible");
  });

}


/* =========================================
   5. SMOOTH SCROLLING
========================================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", event => {

    const targetId = link.getAttribute("href");

    if (!targetId || targetId === "#") {
      return;
    }

    const targetElement = document.querySelector(targetId);

    if (targetElement) {

      event.preventDefault();

      targetElement.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start"
      });

    }

  });

});


/* =========================================
   6. CURSOR GLOW EFFECT
========================================= */

if (cursorGlow && !prefersReducedMotion) {

  if (window.matchMedia("(hover: hover)").matches) {

    document.addEventListener("mousemove", event => {

      cursorGlow.style.left = `${event.clientX}px`;

      cursorGlow.style.top = `${event.clientY}px`;

    });

  }

}


/* =========================================
   7. THREE.JS HERO ANIMATION
========================================= */

function initializeHero3D() {

  const container = document.getElementById("hero3d");

  // Check whether the hero container exists

  if (!container) {
    return;
  }

  // Check whether Three.js loaded successfully

  if (typeof THREE === "undefined") {

    console.warn(
      "Three.js is not available. Hero 3D animation disabled."
    );

    return;
  }

  try {

    // Scene

    const scene = new THREE.Scene();

    // Camera

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );

    camera.position.z = 5;


    // Renderer

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });

    renderer.setPixelRatio(
      Math.min(window.devicePixelRatio, 2)
    );

    renderer.setSize(
      container.clientWidth,
      container.clientHeight
    );

    renderer.setClearColor(0x000000, 0);

    container.appendChild(renderer.domElement);


    // Main geometry

    const geometry = new THREE.IcosahedronGeometry(
      1.25,
      2
    );


    // Main material

    const material = new THREE.MeshStandardMaterial({

      color: 0x348cff,

      metalness: 0.65,

      roughness: 0.22,

      wireframe: false

    });


    // Main object

    const mainObject = new THREE.Mesh(
      geometry,
      material
    );

    scene.add(mainObject);


    // Wireframe outer structure

    const wireGeometry = new THREE.IcosahedronGeometry(
      1.45,
      1
    );

    const wireMaterial = new THREE.MeshBasicMaterial({

      color: 0x6fe0e8,

      wireframe: true,

      transparent: true,

      opacity: 0.28

    });

    const wireObject = new THREE.Mesh(
      wireGeometry,
      wireMaterial
    );

    scene.add(wireObject);


    // Inner core

    const coreGeometry = new THREE.IcosahedronGeometry(
      0.48,
      2
    );

    const coreMaterial = new THREE.MeshStandardMaterial({

      color: 0x6fe0e8,

      emissive: 0x1678b9,

      emissiveIntensity: 0.7,

      metalness: 0.6,

      roughness: 0.25

    });

    const core = new THREE.Mesh(
      coreGeometry,
      coreMaterial
    );

    scene.add(core);


    // Orbital rings

    const ringMaterial = new THREE.MeshBasicMaterial({

      color: 0x6fe0e8,

      transparent: true,

      opacity: 0.35

    });


    const ringOne = new THREE.Mesh(

      new THREE.TorusGeometry(
        1.85,
        0.008,
        8,
        120
      ),

      ringMaterial

    );

    ringOne.rotation.x = Math.PI / 2.5;

    scene.add(ringOne);


    const ringTwo = new THREE.Mesh(

      new THREE.TorusGeometry(
        2.05,
        0.008,
        8,
        120
      ),

      ringMaterial.clone()

    );

    ringTwo.rotation.y = Math.PI / 2.5;

    ringTwo.rotation.x = Math.PI / 4;

    scene.add(ringTwo);


    // Lighting

    const ambientLight = new THREE.AmbientLight(
      0xffffff,
      1.2
    );

    scene.add(ambientLight);


    const pointLight = new THREE.PointLight(
      0x48aaff,
      3,
      10
    );

    pointLight.position.set(3, 3, 4);

    scene.add(pointLight);


    const cyanLight = new THREE.PointLight(
      0x6fe0e8,
      2,
      10
    );

    cyanLight.position.set(-3, -2, 3);

    scene.add(cyanLight);


    // Small particles

    const particleGeometry = new THREE.BufferGeometry();

    const particleCount = 350;

    const particlePositions = new Float32Array(
      particleCount * 3
    );

    for (let i = 0; i < particleCount * 3; i++) {

      particlePositions[i] =
        (Math.random() - 0.5) * 8;

    }

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(
        particlePositions,
        3
      )
    );


    const particleMaterial = new THREE.PointsMaterial({

      color: 0x6fe0e8,

      size: 0.018,

      transparent: true,

      opacity: 0.7

    });


    const particles = new THREE.Points(
      particleGeometry,
      particleMaterial
    );

    scene.add(particles);


    // Mouse interaction

    let mouseX = 0;

    let mouseY = 0;

    let targetX = 0;

    let targetY = 0;


    if (!prefersReducedMotion) {

      container.addEventListener("mousemove", event => {

        const rect = container.getBoundingClientRect();

        mouseX =
          ((event.clientX - rect.left) / rect.width) * 2 - 1;

        mouseY =
          -((event.clientY - rect.top) / rect.height) * 2 + 1;

      });

      container.addEventListener("mouseleave", () => {

        mouseX = 0;

        mouseY = 0;

      });

    }


    // Animation loop

    let animationId;

    const clock = new THREE.Clock();

    function animate() {

      animationId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      if (!prefersReducedMotion) {

        targetX += (mouseY * 0.3 - targetX) * 0.025;

        targetY += (mouseX * 0.3 - targetY) * 0.025;


        mainObject.rotation.x += 0.002;

        mainObject.rotation.y += 0.003;


        wireObject.rotation.x -= 0.001;

        wireObject.rotation.y += 0.002;


        core.rotation.x += 0.004;

        core.rotation.y -= 0.003;


        ringOne.rotation.z += 0.002;

        ringTwo.rotation.z -= 0.0015;


        particles.rotation.y += 0.0004;


        mainObject.rotation.x += targetX * 0.01;

        mainObject.rotation.y += targetY * 0.01;

        mainObject.position.y =
          Math.sin(elapsedTime * 0.8) * 0.06;

        core.position.y =
          Math.sin(elapsedTime * 1.2) * 0.04;

      }

      renderer.render(scene, camera);

    }

    animate();


    // Responsive resizing

    const resizeObserver = new ResizeObserver(() => {

      const width = container.clientWidth;

      const height = container.clientHeight;

      if (!width || !height) {
        return;
      }

      camera.aspect = width / height;

      camera.updateProjectionMatrix();

      renderer.setSize(width, height);

      renderer.setPixelRatio(
        Math.min(window.devicePixelRatio, 2)
      );

    });

    resizeObserver.observe(container);


    // Stop rendering when page is hidden

    document.addEventListener("visibilitychange", () => {

      if (document.hidden) {

        cancelAnimationFrame(animationId);

      } else {

        clock.start();

        animate();

      }

    });


  } catch (error) {

    console.error(
      "Unable to initialize Three.js hero:",
      error
    );

  }

}


// Initialize after page loading

if (document.readyState === "loading") {

  document.addEventListener(
    "DOMContentLoaded",
    initializeHero3D
  );

} else {

  initializeHero3D();

}


/* =========================================
   8. PROJECT CARD INTERACTIONS
========================================= */

const projectCards = document.querySelectorAll(".project-card");

if (!prefersReducedMotion) {

  projectCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

      card.style.borderColor =
        "rgba(111, 224, 232, 0.45)";

    });

    card.addEventListener("mouseleave", () => {

      card.style.borderColor = "";

    });

  });

}


/* =========================================
   9. SERVICE CARD INTERACTIONS
========================================= */

const serviceCards = document.querySelectorAll(".service-card");

serviceCards.forEach(card => {

  card.addEventListener("mouseenter", () => {

    const icon = card.querySelector(".service-icon");

    if (icon && !prefersReducedMotion) {

      icon.style.transform = "scale(1.08)";

    }

  });

  card.addEventListener("mouseleave", () => {

    const icon = card.querySelector(".service-icon");

    if (icon) {

      icon.style.transform = "";

    }

  });

});


/* =========================================
   10. CONTACT FORM
========================================= */

if (contactForm) {

  contactForm.addEventListener("submit", event => {

    event.preventDefault();

    const name = document
      .getElementById("name")
      .value.trim();

    const email = document
      .getElementById("email")
      .value.trim();

    const service = document
      .getElementById("service")
      .value;

    const message = document
      .getElementById("message")
      .value.trim();


    // Basic validation

    if (!name || !email || !service || !message) {

      alert("Please complete all required fields.");

      return;

    }


    // Email validation

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

      alert("Please enter a valid email address.");

      return;

    }


    // Prepare email content

    const recipient = "hello@equinox.example";

    const subject = encodeURIComponent(
      `New Project Enquiry - ${service}`
    );

    const body = encodeURIComponent(

      `Hello Equinox Team,

I would like to enquire about your services.

Name: ${name}

Email: ${email}

Service Required: ${service}

Project Details:
${message}

Regards,
${name}`

    );


    // Open visitor's default email application

    const mailtoLink =
      `mailto:${recipient}?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;

  });

}


/* =========================================
   11. HEADER SCROLL EFFECT
========================================= */

const header = document.querySelector(".header");

if (header) {

  window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

      header.style.background =
        "rgba(7, 13, 24, 0.96)";

      header.style.boxShadow =
        "0 10px 30px rgba(0, 0, 0, 0.15)";

    } else {

      header.style.background =
        "rgba(7, 13, 24, 0.88)";

      header.style.boxShadow = "none";

    }

  }, { passive: true });

}


/* =========================================
   12. CONSOLE BRAND MESSAGE
========================================= */

console.log(
  "%c EQUINOX ",
  "background:#6fe0e8;color:#07111d;font-size:20px;font-weight:bold;padding:8px;"
);

console.log(
  "%c Engineering Tomorrow. Building Beyond. ",
  "color:#6fe0e8;font-size:12px;"
);

console.log(
  "Welcome to Equinox. Innovation starts here."
);
