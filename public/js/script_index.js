var carrocel_index = [
  `<img src="./assets/img_carrocel-0.png" alt="">`,
  `<img src="./assets/img_carrocel-1.png" alt="">`,
  `<img src="./assets/img_carrocel-2.png" alt="">`
]
var num_carrocel = 0;
var carrocel_max = carrocel_index.length - 1;
function carrocel() {

  if (num_carrocel < carrocel_index.length) {
    imagem_meio.innerHTML = `${carrocel_index[num_carrocel]}`
  } else if (num_carrocel >= carrocel_index.length) {
    num_carrocel = 0;
  } else if (num_carrocel < 0) {
    num_carrocel = 0;
  }
  num_carrocel++
}

setInterval(carrocel, 5000);

