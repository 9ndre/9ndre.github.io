document.addEventListener('DOMContentLoaded', () => {
    const flame = document.getElementById('flame');
    const card = document.getElementById('birthday-card');
  
    flame.addEventListener('click', () => {
      if (card.style.display === "none" || !card.style.display) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
  