// main.js — Dark/Light Mode Toggle
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById('theme-toggle');
  const body = document.body;

  // Apply saved theme if it exists
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    body.classList.add('light');
  } else {
    body.classList.remove('light');
  }

  // Toggle theme on button click
  toggleBtn.addEventListener('click', () => {
    const isLight = body.classList.toggle('light');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });
});
