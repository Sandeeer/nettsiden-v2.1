const scrollBar = document.getElementById('scrollBar');

// Funksjon som sjekker fade-in elementer (for scroll)
function checkFadeIn() {
  document.querySelectorAll('.fade-in').forEach(el => {
    if (el.getBoundingClientRect().top <= window.innerHeight - 100) {
      el.classList.add('active');
    }
  });
}

// Scrollbar + fade-in
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  scrollBar.style.height = (scrollTop / docHeight) * 100 + '%';
  checkFadeIn();
});

// Navigasjon
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = link.getAttribute('data-target');

    // Skjul alle
    document.getElementById('home').style.display = 'none';
    document.getElementById('team-content').style.display = 'none';
    document.getElementById('rules-content').style.display = 'none';

    // Vis valgt
    if (target === 'home') {
      document.getElementById('home').style.display = 'block';
    } if (target === 'team') {
  const team = document.getElementById('team-content');
  team.style.display = 'block';
  team.classList.add('section-fade');

  // Trigger animasjonen etter et øyeblikk (for transition skal brukes)
  setTimeout(() => {
    team.classList.add('active');
  }, 50);
    } if (target === 'rules') {
  const team = document.getElementById('rules-content');
  team.style.display = 'block';
  team.classList.add('section-fade');

  // Trigger animasjonen etter et øyeblikk (for transition skal brukes)
  setTimeout(() => {
    team.classList.add('active');
  }, 50);
}

    // Kjør fade-in sjekk rett etter bytte
    checkFadeIn();
  });
});

// Lommelykt
const spotlight = document.querySelector('.spotlight');
document.addEventListener('mousemove', e => {
  spotlight.style.background = `radial-gradient(circle 150px at ${e.clientX}px ${e.clientY}px, rgba(51,153,255,0.1), transparent 80%)`;
});

// Start
checkFadeIn();

const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('nav');
const navList = nav.querySelector('ul');

hamburger.addEventListener('click', () => {
  if (nav.classList.contains('mobile-active')) {
    // Kjør "slideOut"
    navList.style.animation = 'slideOut 0.3s ease-in forwards';
    setTimeout(() => {
      nav.classList.remove('mobile-active');
      navList.style.animation = ''; // tilbakestill
    }, 300);
  } else {
    nav.classList.add('mobile-active');
    navList.style.animation = 'slideIn 0.3s ease-out forwards';
  }
});

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    if (nav.classList.contains('mobile-active')) {
      navList.style.animation = 'slideOut 0.3s ease-in forwards';
      setTimeout(() => {
        nav.classList.remove('mobile-active');
        navList.style.animation = '';
      }, 300);
    }
  });
});

if (target === 'home') {
  document.title = 'SHIFT Rollespill';
} else if (target === 'team') {
  document.title = 'Om teamet | SHIFT';
} else if (target === 'rules') {
  document.title = 'Regler | SHIFT';
}
