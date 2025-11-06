function mudarConteudoDoBotao () {
  botao_resposta1.innerText = '+'
  botao_resposta2.innerText = '+'
  botao_resposta3.innerText = '+'
  botao_resposta4.innerText = '+'
  botao_resposta5.innerText = '+'
  botao_resposta6.innerText = '+'
}

function setarTodosInvisiveis() {
  span_resposta1.style.display = "none";
  span_resposta2.style.display = "none";
  span_resposta3.style.display = "none";
  span_resposta4.style.display = "none";
  span_resposta5.style.display = "none";
  span_resposta6.style.display = "none";
  mudarConteudoDoBotao()
}


setarTodosInvisiveis()

function exibirResposta1() {
    var botao = botao_resposta1
    var resposta1 = span_resposta1.value;
    var display = span_resposta1.style.display;
    if (display == "none") {
      setarTodosInvisiveis();
    span_resposta1.style.display = "block";
    console.log("block");
    botao.innerText = '-'
  } else {
    span_resposta1.style.display = "none";
    console.log("none", display);
    botao.innerText = '+'
  }
}

function exibirResposta2() {
    var botao = botao_resposta2
    var resposta2 = span_resposta2.value;
    var display = span_resposta2.style.display;
    if (display == "none") {
      setarTodosInvisiveis();
    span_resposta2.style.display = "block";
    console.log("block");
    botao.innerText = '-'
  } else {
    span_resposta2.style.display = "none";
    console.log("none", display);
    botao.innerText = '+'
  }
}

function exibirResposta3() {
    var botao = botao_resposta3;
    var resposta3 = span_resposta3.value;
    var display = span_resposta3.style.display;
    if (display == "none") {
      setarTodosInvisiveis();
    span_resposta3.style.display = "block";
    console.log("block");
    botao.innerText = '-'
  } else {
    span_resposta3.style.display = "none";
    console.log("none", display);
    botao.innerText = '+'
  }
}

function exibirResposta4() {
    var botao = botao_resposta4;
    var resposta4 = span_resposta4.value;
    var display = span_resposta4.style.display;
    if (display == "none") {
      setarTodosInvisiveis();
    span_resposta4.style.display = "block";
    console.log("block");
    botao.innerText = '-'
  } else {
    span_resposta4.style.display = "none";
    console.log("none", display);
    botao.innerText = '+'
  }
}

function exibirResposta5() {
    var botao = botao_resposta5;
    var resposta5 = span_resposta5.value;
    var display = span_resposta5.style.display;
    if (display == "none") {
      setarTodosInvisiveis();
    span_resposta5.style.display = "block";
    console.log("block");
    botao.innerText = '-'
  } else {
    span_resposta5.style.display = "none";
    console.log("none", display);
    botao.innerText = '+'
  }
}

function exibirResposta6() {
    var botao = botao_resposta6;
    var resposta6 = span_resposta6.value;
    var display = span_resposta6.style.display;
    if (display == "none") {
      setarTodosInvisiveis();
    span_resposta6.style.display = "block";
    console.log("block");
    botao.innerText = '-'
  } else {
    span_resposta6.style.display = "none";
    console.log("none", display);
    botao.innerText = '+'
  }
}