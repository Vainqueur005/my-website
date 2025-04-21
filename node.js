const toggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar').querySelector('ul');

toggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});
