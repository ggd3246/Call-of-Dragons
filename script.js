let currentIndex = 0;
const slides = document.getElementById('slideContainer');
const totalSlides = slides.children.length;

// Показываем нужный слайд с плавным переходом
function showSlide(index) {
  if (index >= totalSlides) currentIndex = 0;
  else if (index < 0) currentIndex = totalSlides - 1;
  else currentIndex = index;

  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Переключение вперёд и назад
function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

// 🔄 Автосмена слайдов каждые 5 секунд
setInterval(nextSlide, 5000);

// 🔘 Кнопка переключения видимости блоков
const button = document.getElementById('button');
const site1 = document.getElementById('site1');
const sasnavka1 = document.getElementById('sasnavka1');

button.addEventListener("click", () => {
  sasnavka1.style.display = "none";
  site1.style.display = "block";
});
