document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('.nav-item');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  navItems.forEach((item) => {
    const target = item.getAttribute('href');
    if (target === currentPage) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  navItems.forEach((item) => {
    item.addEventListener('click', () => {
      navItems.forEach((i) => i.classList.remove('active'));
      item.classList.add('active');
    });
  });
});
