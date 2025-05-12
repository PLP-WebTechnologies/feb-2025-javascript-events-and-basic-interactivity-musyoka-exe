// DOM Elements
document.addEventListener("DOMContentLoaded", function () {
  // 🎈 Event Handling
  const clickBtn = document.getElementById("clickBtn");
  const clickOutput = document.getElementById("clickOutput");

  clickBtn.addEventListener("click", function () {
    clickOutput.textContent = "You clicked the button!";
  });

  const hoverBox = document.getElementById("hoverBox");
  hoverBox.addEventListener("mouseenter", function () {
    hoverBox.style.backgroundColor = "#f9c74f";
  });
  hoverBox.addEventListener("mouseleave", function () {
    hoverBox.style.backgroundColor = "#f9844a";
  });

  const keyInput = document.getElementById("keyInput");
  const keyFeedback = document.getElementById("keyFeedback");

  keyInput.addEventListener("input", function () {
    keyFeedback.textContent = `You typed: ${keyInput.value}`;
  });

  const secretBtn = document.getElementById("secretActionBtn");
  const secretMessage = document.getElementById("secretMessage");
  let pressTimer;

  secretBtn.addEventListener("mousedown", function () {
    pressTimer = setTimeout(function () {
      secretMessage.textContent = "Long press detected! 🤫";
    }, 1000);
  });

  secretBtn.addEventListener("mouseup", function () {
    clearTimeout(pressTimer);
    secretMessage.textContent = "Double-click or hold me!";
  });

  secretBtn.addEventListener("dblclick", function () {
    secretMessage.textContent = "Double-clicked! 🔥";
  });

  // 🎮 Interactive Elements
  const toggleBtn = document.getElementById("toggleBtn");
  let isRed = false;
  toggleBtn.addEventListener("click", function () {
    toggleBtn.style.backgroundColor = isRed ? "#43aa8b" : "#f94144";
    toggleBtn.textContent = isRed ? "Toggle Color" : "Back to Green";
    isRed = !isRed;
  });

  // Image Gallery
  const images = [
    "https://via.placeholder.com/300x200?text=Image+1 ",
    "https://via.placeholder.com/300x200?text=Image+2 ",
    "https://via.placeholder.com/300x200?text=Image+3 "
  ];
  let currentIndex = 0;
  const galleryImg = document.getElementById("galleryImg");
  const nextBtn = document.getElementById("nextBtn");

  nextBtn.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % images.length;
    galleryImg.src = images[currentIndex];
  });

  // Tabs
  const tabLinks = document.querySelectorAll(".tab-link");
  const tabContents = document.querySelectorAll(".tab-content");

  tabLinks.forEach(link => {
    link.addEventListener("click", function () {
      const target = this.getAttribute("data-tab");

      tabLinks.forEach(l => l.classList.remove("active"));
      tabContents.forEach(c => c.classList.remove("active"));

      this.classList.add("active");
      document.getElementById(target).classList.add("active");
    });
  });

  // 📋 Form Validation
  const form = document.getElementById("myForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  nameInput.addEventListener("input", () => { nameError.style.display = "none"; });
  emailInput.addEventListener("input", () => { emailError.style.display = "none"; });
  passwordInput.addEventListener("input", () => { passwordError.style.display = "none"; });

  form.addEventListener("submit", function (e) {
    let isValid = true;

    if (nameInput.value.trim() === "") {
      e.preventDefault();
      nameError.style.display = "block";
      isValid = false;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(emailInput.value)) {
      e.preventDefault();
      emailError.style.display = "block";
      isValid = false;
    }

    if (passwordInput.value.length < 8) {
      e.preventDefault();
      passwordError.style.display = "block";
      isValid = false;
    }

    if (isValid) {
      alert("Form submitted successfully!");
    }
  });
});
