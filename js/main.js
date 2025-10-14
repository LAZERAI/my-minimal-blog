const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('light');
  localStorage.setItem('theme', body.classList.contains('light') ? 'light' : 'dark');
});

// Remember theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') body.classList.add('light');
