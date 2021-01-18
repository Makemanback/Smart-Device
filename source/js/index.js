const order = document.querySelector(".order-button");

const changeOrder = () => {
  if (window.innerWidth > 767) {
    order.textContent = "получить бесплатную консультацию";
  } else {
    order.textContent = "получить консультацию";
  }
};

changeOrder();

window.addEventListener('resize', changeOrder);
