const menuButton = document.querySelector('.menu');
const navLinks = document.querySelector('.nav-links');

menuButton?.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', expanded ? 'false' : 'true');
  navLinks?.classList.toggle('active');
});

navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

const form = document.getElementById('contactForm');
const successMessage = document.getElementById('success');

form?.addEventListener('submit', event => {
  event.preventDefault();
  const name = document.getElementById('name')?.value.trim();
  const email = document.getElementById('email')?.value.trim();
  const message = document.getElementById('message')?.value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all fields before sending your message.');
    return;
  }

  successMessage.textContent = 'Message sent successfully — I will get back to you soon!';
  form.reset();
});
