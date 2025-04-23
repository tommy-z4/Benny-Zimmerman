const carousel = document.getElementById("carousel");
    const items = document.querySelectorAll(".carousel_item");
    const nextBtn = document.getElementById("next");
    const prevBtn = document.getElementById("prev");
    let index = 0;
    let interval;

    function updateSlide(i) {
      index = (i + items.length) % items.length;
      carousel.style.transform = `translateX(-${index * 100}%)`;
    }

    function startAutoSlide() {
      interval = setInterval(() => updateSlide(index + 1), 4500);
    }

    function stopAutoSlide() {
      clearInterval(interval);
      startAutoSlide(); // מחזיר את המעבר האוטומטי אחרי פעולה ידנית
    }

    nextBtn.addEventListener("click", () => {
      updateSlide(index + 1);
      stopAutoSlide();
    });

    prevBtn.addEventListener("click", () => {
      updateSlide(index - 1);
      stopAutoSlide();
    });

    // התחלת מעבר אוטומטי
    startAutoSlide();













document.querySelector('.mainstop').addEventListener('click', function() {
  const checkbox = document.querySelector('#sidebar-active');
  const dropdown = this.querySelector('.dropdown');
  
  // אם ה-checkbox פתוח, נסגור אותו כשנלחץ על תחומי עיסוק
  if (checkbox.checked) {
      checkbox.checked = false; // סוגר את ה-nav
  }
  
  // אם ה-dropdown פתוח, נסגור אותו כשנלחץ על תחומי עיסוק
  if (dropdown && dropdown.style.display === 'block') {
      this.classList.remove('active');
  }
});









window.addEventListener("load", function() {
  document.getElementById("loading-screen").style.display = "none";
});
