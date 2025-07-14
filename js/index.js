
  const toggleButton = document.querySelector('.menu-toggle');
  const navList = document.querySelector('.nav-list');

  toggleButton.addEventListener('click', () => {
    navList.classList.toggle('active');
  });
