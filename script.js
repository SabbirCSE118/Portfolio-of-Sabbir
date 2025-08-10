const form = document.getElementById('contactForm');
  const messagePara = document.querySelector('.form-message');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        messagePara.textContent = "Message sent successfully!";
        messagePara.style.color = "green";
        form.reset();
      } else {
        messagePara.textContent = "❌ Something went wrong. Try again.";
        messagePara.style.color = "red";
      }
    } catch (error) {
      messagePara.textContent = "⚠️ Error sending message.";
      messagePara.style.color = "red";
    }
  });

const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      el.classList.add('active');
    }
  });
});

// Scroll Reveal Animation (already added before)
const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      el.classList.add('active');
    }
  });

  // Footer fade-in
  const footer = document.querySelector('.foot');
  if (footer.getBoundingClientRect().top < window.innerHeight - 50) {
    footer.classList.add('visible');
  }
});

