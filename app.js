/* Created by Tivotal */

const text = document.querySelector(".text-two");

const textType = () => {
  setTimeout(() => {
    text.textContent = "Freelancer";
  }, 0);

  setTimeout(() => {
    text.textContent = "YouTuber";
  }, 4000);

  setTimeout(() => {
    text.textContent = "Developer";
  }, 8000);
};

textType();
setInterval(textType, 12000);
