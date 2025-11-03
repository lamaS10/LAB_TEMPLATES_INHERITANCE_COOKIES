function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + days*24*60*60*1000);
  document.cookie = `${name}=${value};expires=${d.toUTCString()};path=/`;
}
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
}

function applyTheme(theme) {
  const sun  = document.getElementById('sun-icon');
  const moon = document.getElementById('moon-icon');
  if (!sun || !moon) return;

  if (theme === 'dark') {
    document.body.classList.add('dark-mode');
    moon.classList.add('active');
    sun.classList.remove('active');
  } else {
    document.body.classList.remove('dark-mode');
    sun.classList.add('active');
    moon.classList.remove('active');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const sun  = document.getElementById('sun-icon');
  const moon = document.getElementById('moon-icon');

  let theme = getCookie('theme');

  if (!theme) {
    const prefersDark = window.matchMedia &&
                        window.matchMedia('(prefers-color-scheme: dark)').matches;
    theme = prefersDark ? 'dark' : 'light';
  }

  applyTheme(theme);


  const goLight = () => { setCookie('theme','light',365); applyTheme('light'); };
  const goDark  = () => { setCookie('theme','dark',365);  applyTheme('dark');  };

  if (sun) {
    sun.addEventListener('click', goLight);
    sun.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') goLight(); });
  }
  if (moon) {
    moon.addEventListener('click', goDark);
    moon.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') goDark(); });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const animatedText = document.querySelector(".animate-text");
  if (animatedText) {
    animatedText.addEventListener("click", () => {
      animatedText.style.animation = "none"; 
      void animatedText.offsetWidth; 
      animatedText.style.animation = "growSlideLeft 1.3s cubic-bezier(0.4, 0, 0.2, 1) forwards";
    });
  }
});
