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

// 🔄 Автосмена слайдол каждые 5 секунд
setInterval(nextSlide, 6000);

// 🔘 Кнопка переключения видимости блоков
const button = document.getElementById('button');
const site1 = document.getElementById('site1');
const sasnavka1 = document.getElementById('sasnavka1');

button.addEventListener("click", () => {
  sasnavka1.style.display = "none";
  site1.style.display = "block";
});

const music = document.getElementById('bgMusic');
const play = document.getElementById('toggleSound');
let isPlaying = false;

play.addEventListener('click', () => {
  if (!isPlaying) {
    music.play();
    play.textContent = '🔇 Выключить звук';
    play.setAttribute('data-text', '🔇 Выключить звук');
    isPlaying = true;
  } else {
    music.pause();
    play.textContent = '🔈 Включить звук';
    play.setAttribute('data-text', '🔈 Включить звук');
    isPlaying = false;
  }
});

 
  let isStarted = false;

  // Первый раз при движении мыши — запускаем музыку
  function startMusicOnce() {
    if (!isStarted) {
      const playPromise = music.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          console.log('Музыка запущена после движения мыши');
          isStarted = true;
          // Удаляем обработчик, чтобы не запускалось повторно
          window.removeEventListener('mousemove', startMusicOnce);
        }).catch(error => {
         
        });
      }
    }
  }

  window.addEventListener('mousemove', startMusicOnce, { once: true });