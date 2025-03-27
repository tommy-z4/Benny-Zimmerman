const carouselItems = document.querySelectorAll(".carousel_item");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

// It will be used to shift the items  by incrementing its
// value every 2 seconds and multiplying it by 100
let i = 1;

// Running the condition every 2 seconds using setInterval
setInterval(() => {
  // Accessing All the carousel Items
  Array.from(carouselItems).forEach((item, index) => {
    // Checking if the value of i is less than the
    // number of carousel items, if it is true,
    // move all the carousel items 100% towards left
    if (i < carouselItems.length) {
      item.style.transform = `translateX(-${i * 100}%)`;
    }
  });

  // If the the value of i is less than the number of
  // Carousel items, then increment the value of i by 1
  // Otherwise set the value of i to 0 if it becomes greater
  // than the number of carousel items
  if (i < carouselItems.length) {
    i++;
  } else {
    i = 0;
  }
}, 3500);














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
