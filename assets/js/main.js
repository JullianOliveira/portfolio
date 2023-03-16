/* animation scrool with IntersectionObserver API*/
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  });

  const hiddenElements = document.querySelectorAll('.hidden-top');
  const hiddenLeftElements = document.querySelectorAll('.hidden-left');
  const hiddenRightElements = document.querySelectorAll('.hidden-right');
  hiddenElements.forEach((hidden) => observer.observe(hidden));
  hiddenLeftElements.forEach((hidden) => observer.observe(hidden));
  hiddenRightElements.forEach((hidden) => observer.observe(hidden));

  /* reponsive menu starts */
  const header = document.querySelector('header');
  const links = document.querySelectorAll('.links-menu');
  const menu = document.querySelector('#menu');

  /* change menu - X button*/
  function headerVisibility() {
    header.classList.toggle('active');
    menu.classList.toggle('fa-x');
  }

  /* close menu-mobile when link is clicked*/
  links.forEach((link) => link.addEventListener('click', () => {
    header.classList.remove('active');
    menu.classList.remove('fa-x');
  }));

  menu.addEventListener('click', headerVisibility);
  /* responsive menu ends*/