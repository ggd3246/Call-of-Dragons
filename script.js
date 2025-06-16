let currentIndex = 0;
const slides = document.getElementById('slideContainer');
const totalSlides = slides.children.length;

// 🔁 Показ нужного слайда с плавным переходом
function showSlide(index) {
  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// ▶️ Переключение вперёд
function nextSlide() {
  showSlide(currentIndex + 1);
}

// ◀️ Переключение назад
function prevSlide() {
  showSlide(currentIndex - 1);
}

// ⏱️ Автоматическая смена слайдов каждые 6 секунд
setInterval(nextSlide, 6000);

// 🌐 Переключение видимости заставки и сайта
const button = document.getElementById('button');
const site1 = document.getElementById('site1');
const sasnavka1 = document.getElementById('sasnavka1');

button.addEventListener("click", () => {
  sasnavka1.style.display = "none";
  site1.style.display = "block";
});

// 🎵 Аудио
const music = document.getElementById('bgMusic');
const play = document.getElementById('toggleSound');
let isPlaying = false;

// 🔘 Кнопка включения/выключения музыки
play.addEventListener('click', () => {
  if (!isPlaying) {
    music.play();
    play.textContent = '🔇 Выключить звук';
    isPlaying = true;
  } else {
    music.pause();
    play.textContent = '🔈 Включить звук';
    isPlaying = false;
  }
});

// 🖱️ Первый запуск музыки при движении мыши
let isStarted = false;

function startMusicOnce() {
  if (!isStarted) {
    const playPromise = music.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        console.log('Музыка запущена после движения мыши');
        isStarted = true;
        window.removeEventListener('mousemove', startMusicOnce);
      }).catch(error => {
        // Ошибка может возникнуть при запрете автозапуска
        console.warn('Автозапуск музыки не удался:', error);
      });
    }
  }
}

window.addEventListener('mousemove', startMusicOnce, { once: true });
