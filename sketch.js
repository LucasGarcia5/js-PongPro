//oi :)

//variaveis bolinha
let xbolinha = 375;
let ybolinha = 200;
let diametro = 25;
let raio = diametro / 2;
let velocidadexbolinha = 5;
let velocidadeybolinha = 5;

//variaveis raquete
let xraquete = 10;
let yraquete = 200;
let larguraraquete = 10;
let alturaraquete = 150;
let colidiu = false;

//variaveis oponete
let xoponente = 730;
let yoponente = 200;
let velocidadeoponente;

let oponentejogavel = false; 
//para jogar com 2 pessoas troque "false" para "true"


//pontos
let meuspontos = 0;
let pontosoponente = 0;

function setup() {
  createCanvas(750, 500);

}

function draw() {
  background(0);
  // colisaoraquete();

  //bolinha
  mostrarbolinha();
  movimentobolinha();
  colisao();

  //raquete
  mostrarraquete(xraquete, yraquete);
  movimentarraquete();
  colisaoraquetes(xraquete, yraquete);

  //oponente
  colisaoraquetes(xoponente, yoponente);
  mostrarraquete(xoponente, yoponente);
  movimentooponente();
  jogaroponente();

  //ponto
  placar();
}

//function bolinha
function mostrarbolinha() {
  circle(xbolinha, ybolinha, diametro);
}

function movimentobolinha() {
  xbolinha += velocidadexbolinha;
  ybolinha += velocidadeybolinha;
}

function colisao() {
  if (xbolinha + raio > width || xbolinha - raio < 0) {
    velocidadexbolinha *= -1;
  }
  if (ybolinha + raio > height || ybolinha - raio < 0) {
    velocidadeybolinha *= -1;
  }
}

//fuction raquete
function mostrarraquete(x, y) {
  rect(x, y, larguraraquete, alturaraquete);
}

function movimentarraquete() {
  if (keyIsDown(87)) {
    yraquete -= 10;
  }
  if (keyIsDown(83)) {
    yraquete += 10;
  }
}

function colisaoraquetes(x, y) {
  colidiu = collideRectCircle(
    x,
    y,
    larguraraquete,
    alturaraquete,
    xbolinha,
    ybolinha,
    diametro
  );
  if (colidiu) {
    velocidadexbolinha *= -1;
  }
}

//
function colisaoraquete() {
  if (
    xbolinha - raio < xraquete + larguraraquete &&
    ybolinha - raio < yraquete + alturaraquete &&
    ybolinha + raio > yraquete
  ) {
    velocidadexbolinha *= -1;
  }
}

//fuction oponente
function movimentooponente() {
  if (oponentejogavel == false) {
    velocidadeoponente = ybolinha - yoponente - larguraraquete / 2 - 30;
    yoponente += velocidadeoponente;
  }
}

function jogaroponente() {
  if (oponentejogavel == true && keyIsDown(UP_ARROW)) {
    yoponente -= 10;
  }
  if (oponentejogavel == true && keyIsDown(DOWN_ARROW)) {
    yoponente += 10;
  }
}

function placar() {
  textAlign(CENTER);
  textSize(35);
  rect(265, 15, 70, 50, 10);
  text(meuspontos, 300, 50);
  rect(415, 15, 70, 50, 10);
  text(pontosoponente, 450, 50);

  if (xbolinha > 739) {
    meuspontos += 1;
    
  }
  if (xbolinha < 11) {
    pontosoponente += 1;
  
  }
}
