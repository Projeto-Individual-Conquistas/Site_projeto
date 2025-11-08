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

function go() {
  num_carrocel++
  if (num_carrocel >= carrocel_index.length) {
    num_carrocel = 0;
  }
  carrocel();
}

function back() {
 
  imagem_meio.innerHTML = `${carrocel_index[num_carrocel--]}`
  if (num_carrocel < 0) {
     imagem_meio.innerHTML = `${carrocel_index[carrocel_max]}`
  }
  carrocel();
}

setInterval(go, 5000);
