// =========================================================
// StrikeNight — interactions : countdown + reveal au scroll
// =========================================================

// ---- Date de l'événement : 20 décembre 2026, 18h30 -------
const EVENT_DATE = new Date('2026-12-20T18:30:00');

function updateCountdown() {
  const now = new Date();
  let diff = EVENT_DATE - now;

  if (diff < 0) diff = 0;

  const days  = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins  = Math.floor((diff / (1000 * 60)) % 60);
  const secs  = Math.floor((diff / 1000) % 60);

  const pad = (n) => String(n).padStart(2, '0');

  const dEl = document.getElementById('cd-days');
  const hEl = document.getElementById('cd-hours');
  const mEl = document.getElementById('cd-mins');
  const sEl = document.getElementById('cd-secs');

  if (dEl) dEl.textContent = pad(days);
  if (hEl) hEl.textContent = pad(hours);
  if (mEl) mEl.textContent = pad(mins);
  if (sEl) sEl.textContent = pad(secs);
}

updateCountdown();
setInterval(updateCountdown, 1000);

// ---- Reveal au scroll (IntersectionObserver) --------------
const revealEls = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealEls.forEach((el) => observer.observe(el));
} else {
  // Fallback : tout afficher directement
  revealEls.forEach((el) => el.classList.add('in-view'));
}
