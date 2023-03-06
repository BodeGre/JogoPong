//Variáveis da Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2 ;

//Velocidade da Bolinha
let velocidadeXBolinha = 7;
let velocidadeYBolinha = 7;

//Variaveis da Raquete
let xRaquete = 5;
let yRaquete = 150;
let comprimento = 10;
let altura = 90;

//Variaveis do Oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

//Sons do Jogo
let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

let colidiu = false;

//Placar do Jogo
let meusPontos = 0;
let pontosOponente = 0;


function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete,yRaquete);
  mostraRaquete(xRaqueteOponente,yRaqueteOponente);
  movimentaMinhaRaquete();
  movimentaRaqueteOponente();
  verificaColisaoRaquete(xRaquete,yRaquete);
  verificaColisaoRaquete(xRaqueteOponente,yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
  bolinhaNaoFicaPresa();
  

}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
  if (xBolinha + raio> width ||
     xBolinha - raio< 0){
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio> height ||
     yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete(x,y){
  rect(x, y, comprimento, altura);
}


function movimentaMinhaRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete-=10;
  }
   if(keyIsDown(DOWN_ARROW)){
    yRaquete+=10;
  }
}

function movimentaRaqueteOponente(){
  if(keyIsDown(87)){
    yRaqueteOponente-=10;
  }
   if(keyIsDown(83)){
    yRaqueteOponente+=10;
  }
}

function verificaColisaoRaquete(x,y){
  colidiu = collideRectCircle(x, y, comprimento, altura, xBolinha, yBolinha, raio);
  if(colidiu){
    velocidadeXBolinha*=-1;
    raquetada.play();
  }
}

function incluiPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255,140,0));
  rect(150,10,40,20)
  fill(255);
  text(meusPontos,170,26)
  fill(color(255,140,0));
  rect(450,10,40,20)
  fill(255);
  text(pontosOponente,470,26)  
}

function marcaPonto(){
  if(xBolinha > 590){
    meusPontos +=1;
    ponto.play();
  }
  if(xBolinha < 10){
    pontosOponente +=1;
    ponto.play();
  }
}


function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
    XBolinha = 23
    }
}

  
  
  
  