var game2;

function gioco2(){
   game2 = new Phaser.Game(663, 464, Phaser.AUTO, 'gioco2', { preload: preload2, create: create2, update: update2 });

function preload2() {

    game2.load.baseURL = './immaginigioco/';
    game2.load.crossOrigin = 'anonymous';

    game2.load.image('RosaBlu', 'rosaBlu.png');
    game2.load.image('Cesto', 'Cesto.png');
    game2.load.image('RosaRossa', 'rosaRossa.png');
    game2.load.image('Sfondo', 'Sfondo.png');
    game2.load.image('Perso', 'rose perso.png');
    game2.load.image('Vinto', 'rosevintonuovo_Tavola disegno 1 copia 2.png');
    game2.load.image('Cuore', 'cuore.png');
    game2.load.image('button', 'Button2.png');
    game2.load.image('indicazioni', 'Homepage rose.png');
    game2.load.image('punteggio', 'rosa punteggio.png');




}


var Cesto;
var RosaBlu;
var RosaBlu2;
var RosaBlu3;
var RosaRossa;
var RosaRossa2;
var RosaRossa3;
var RosaRossa4;
var RosaRossa5;
var RosaRossa6;
var s;
var indicazioni;
var Perso;
var vintosfondo;

function create2() {

    game2.paused = true;



    s = game2.add.tileSprite(0, 0, 1500, 700, 'Sfondo');

    Cuore = game2.add.sprite(110, 38, 'Cuore');
    Cuore.anchor.y = 0.5;
    Cuore.anchor.x = 0.5;
    Cuore.scale.x = 0.5;
    Cuore.scale.y = 0.5;

    Punteggio = game2.add.sprite(40, 40, 'punteggio');
    Punteggio.anchor.y = 0.5;
    Punteggio.anchor.x = 0.5;
    Punteggio.scale.x = 0.7;
    Punteggio.scale.y = 0.7;

    ContatoreBlu = 3;
    ContatorebluText = game2.add.text(104, 29, ContatoreBlu + "", { font: "20px Arial", fill: "white", align: "left" });
    game2.world.bringToTop(ContatorebluText);

    ContatoreRossa = 0;
    ContatorerossaText = game2.add.text(36, 30, ContatoreRossa, { font: "20px Arial", fill: "white", align: "left" });
    game2.world.bringToTop(ContatorerossaText);

    game2.time.events.repeat(Phaser.Timer.SECOND, 1, appareRossa, this);
    game2.time.events.repeat(Phaser.Timer.SECOND * 2 , 1, appareRossa2, this);
    game2.time.events.repeat(Phaser.Timer.SECOND * 3, 1, appareRossa3, this);
    game2.time.events.repeat(Phaser.Timer.SECOND * 4, 1, appareRossa4, this);
    game2.time.events.repeat(Phaser.Timer.SECOND * 5, 1, appareRossa5, this);
    game2.time.events.repeat(Phaser.Timer.SECOND * 6, 1, appareRossa6, this);
    game2.time.events.repeat(Phaser.Timer.SECOND * 1.2, 1, appareBlu1, this);
    game2.time.events.repeat(Phaser.Timer.SECOND * 2.3, 1, appareBlu2, this);
    game2.time.events.repeat(Phaser.Timer.SECOND * 3.1, 1, appareBlu3, this);

    Perso = game2.add.sprite(0, 0, 'Perso');
    Perso.alpha = 0;

    vintosfondo = game2.add.sprite(0, 0, 'Vinto');
    vintosfondo.alpha = 0;





    game2.stage.backgroundColor = '#2d2d2d';

    game2.physics.startSystem(Phaser.Physics.ARCADE);



    Cesto = game2.add.sprite(500,340, 'Cesto');
    Cesto.alpha = 0;
    game2.physics.arcade.enable(Cesto);
    Cesto.body.immovable = true;

    indicazioni = game2.add.sprite(0,0, 'indicazioni');
    game2.physics.arcade.enable(indicazioni);
    indicazioni.alpha= 1;


     bottone = game2.add.sprite(420,390, 'button');
     bottone.scale.x = 0.4;
     bottone.scale.y = 0.4;

     bottone.inputEnabled = true;
     bottone.events.onInputDown.add(start, this);
     bottone.input.useHandCursor = true;

}

function start () {

    bottone.kill();
    game2.paused = false;
    indicazioni.kill();

}

function perso(){
  //Perso = game2.add.text(60, 140, "HAI PERSO! \n Rosaspina si è avvelenata", { font: "42px Arial", fill: "white", align: "center", });
  game2.paused = true;
  /*if(RosaRossa.inputEnabled == true) {
  RosaRossa.input.enabled = false;}
  if(RosaRossa2.inputEnabled == true) {
  RosaRossa2.input.enabled = false;}
  if(RosaRossa3.inputEnabled == true) {
  RosaRossa3.input.enabled = false;}
  if(RosaRossa3 !== "undefined") {
  RosaRossa4.input.enabled = false;}
  if(RosaRossa5 !== "undefined") {
  RosaRossa5.input.enabled = false;}
  if(RosaRossa6 !== "undefined") {
  RosaRossa6.input.enabled = false;}*/
  RosaBlu.input.enabled = false;
  RosaBlu2.input.enabled = false;
  RosaBlu3.input.enabled = false;
  sfondoperso();
  setTimeout(goRight, 2000);
}

function vinto(){
  //Perso = game2.add.text(60, 140, "HAI VINTO! \n Rosaspina ha raccolto  \n  tutte le rose", { font: "42px Arial", fill: "white", align: "center" });
  game2.paused = true;
  RosaRossa.input.enabled = false;
  RosaRossa2.input.enabled = false;
  RosaRossa3.input.enabled = false;
  RosaRossa4.input.enabled = false;
  RosaRossa5.input.enabled = false;
  RosaRossa6.input.enabled = false;
  RosaBlu.input.enabled = false;
  RosaBlu2.input.enabled = false;
  RosaBlu3.input.enabled = false;
  sfondovinto();
  setTimeout(goLeft, 2000);
}


function appareBlu1(){

  RosaBlu = game2.add.sprite(game2.world.randomX*0.5, game2.world.randomY*0.5, 'RosaBlu');
  RosaBlu.scale.x = 0.17;
  RosaBlu.scale.y = 0.17;
  game2.physics.arcade.enable(RosaBlu);
  RosaBlu.events.onDragStart.add(startDrag, this);
  RosaBlu.events.onDragStop.add(stopDrag, this);
  RosaBlu.inputEnabled = true;
  RosaBlu.input.enableDrag();
  RosaBlu.alpha = 1;
  RosaBlu.body.collideWorldBounds = false;
  move();
  game2.world.bringToTop(Cuore);
  game2.world.bringToTop(Punteggio);
  game2.world.bringToTop(ContatorebluText);
  game2.world.bringToTop(ContatorerossaText);

}

function appareBlu2(){

  RosaBlu2 = game2.add.sprite(game2.world.randomX*0.5, game2.world.randomY*0.5, 'RosaBlu');
  RosaBlu2.scale.x = 0.17;
  RosaBlu2.scale.y = 0.17;
  game2.physics.arcade.enable(RosaBlu2);
  RosaBlu2.events.onDragStart.add(startDrag2, this);
  RosaBlu2.events.onDragStop.add(stopDrag2, this);
  RosaBlu2.inputEnabled = true;
  RosaBlu2.input.enableDrag();
  RosaBlu2.alpha = 1;
  RosaBlu2.body.collideWorldBounds = false;
  move2();
  game2.world.bringToTop(Cuore);
  game2.world.bringToTop(Punteggio);
  game2.world.bringToTop(ContatorebluText);
  game2.world.bringToTop(ContatorerossaText);


}

function appareBlu3(){

  RosaBlu3 = game2.add.sprite(game2.world.randomX*0.5, game2.world.randomY*0.5, 'RosaBlu');
  RosaBlu3.scale.x = 0.17;
  RosaBlu3.scale.y = 0.17;
  game2.physics.arcade.enable(RosaBlu3);
  RosaBlu3.events.onDragStart.add(startDrag3, this);
  RosaBlu3.events.onDragStop.add(stopDrag3, this);
  RosaBlu3.inputEnabled = true;
  RosaBlu3.input.enableDrag();
  RosaBlu3.alpha = 1;
  RosaBlu3.body.collideWorldBounds = false;
  move3();
  game2.world.bringToTop(Cuore);
  game2.world.bringToTop(Punteggio);
  game2.world.bringToTop(ContatorebluText);
  game2.world.bringToTop(ContatorerossaText);


}

function appareRossa() {

  RosaRossa = game2.add.sprite(game2.world.randomX*0.7, game2.world.randomY*0.7, 'RosaRossa');
  RosaRossa.scale.x = 0.17;
  RosaRossa.scale.y = 0.17;
  RosaRossa.inputEnabled = true;
  RosaRossa.input.enableDrag();
  RosaRossa.events.onDragStop.add(onDragStop, this);
  RosaRossa.alpha = 1;
  game2.world.bringToTop(Cuore);
  game2.world.bringToTop(Punteggio);
  game2.world.bringToTop(ContatorebluText);
  game2.world.bringToTop(ContatorerossaText);



}

function appareRossa2() {

  RosaRossa2 = game2.add.sprite(game2.world.randomX*0.7, game2.world.randomY*0.7, 'RosaRossa');
  RosaRossa2.scale.x = 0.17;
  RosaRossa2.scale.y = 0.17;
  RosaRossa2.inputEnabled = true;
  RosaRossa2.input.enableDrag();
  RosaRossa2.events.onDragStop.add(onDragStop2, this);
  RosaRossa2.alpha = 1;
  game2.world.bringToTop(Cuore);
  game2.world.bringToTop(Punteggio);
  game2.world.bringToTop(ContatorebluText);
  game2.world.bringToTop(ContatorerossaText);



}

function appareRossa3() {

  RosaRossa3 = game2.add.sprite(game2.world.randomX*0.7, game2.world.randomY*0.7, 'RosaRossa');
  RosaRossa3.scale.x = 0.17;
  RosaRossa3.scale.y = 0.17;
  RosaRossa3.inputEnabled = true;
  RosaRossa3.input.enableDrag();
  RosaRossa3.events.onDragStop.add(onDragStop3, this);
  RosaRossa3.alpha = 1;
  game2.world.bringToTop(Cuore);
  game2.world.bringToTop(Punteggio);
  game2.world.bringToTop(ContatorebluText);
  game2.world.bringToTop(ContatorerossaText);



}

function appareRossa4() {

  RosaRossa4 = game2.add.sprite(game2.world.randomX*0.7, game2.world.randomY*0.7, 'RosaRossa');
  RosaRossa4.scale.x = 0.17;
  RosaRossa4.scale.y = 0.17;
  RosaRossa4.inputEnabled = true;
  RosaRossa4.input.enableDrag();
  RosaRossa4.events.onDragStop.add(onDragStop4, this);
  RosaRossa4.alpha = 1;
  game2.world.bringToTop(Cuore);
  game2.world.bringToTop(Punteggio);
  game2.world.bringToTop(ContatorebluText);
  game2.world.bringToTop(ContatorerossaText);



}

function appareRossa5() {

  RosaRossa5 = game2.add.sprite(game2.world.randomX*0.7, game2.world.randomY*0.7, 'RosaRossa');
  RosaRossa5.scale.x = 0.17;
  RosaRossa5.scale.y = 0.17;
  RosaRossa5.inputEnabled = true;
  RosaRossa5.input.enableDrag();
  RosaRossa5.events.onDragStop.add(onDragStop5, this);
  RosaRossa5.alpha = 1;
  game2.world.bringToTop(Cuore);
  game2.world.bringToTop(Punteggio);
  game2.world.bringToTop(ContatorebluText);
  game2.world.bringToTop(ContatorerossaText);



}

function appareRossa6() {

  RosaRossa6 = game2.add.sprite(game2.world.randomX*0.7, game2.world.randomY*0.7, 'RosaRossa');
  RosaRossa6.scale.x = 0.17;
  RosaRossa6.scale.y = 0.17;
  RosaRossa6.inputEnabled = true;
  RosaRossa6.input.enableDrag();
  RosaRossa6.events.onDragStop.add(onDragStop5, this);
  RosaRossa6.alpha = 1;
  game2.world.bringToTop(Cuore);
  game2.world.bringToTop(Punteggio);
  game2.world.bringToTop(ContatorebluText);
  game2.world.bringToTop(ContatorerossaText);



}

function onDragStop(sprite, pointer) {

    if (pointer.y > 340 && pointer.x > 500)
    {
        console.log('input disabled on', sprite.key);
        sprite.input.enabled = false;
        ContatoreRossa++;
        ContatorerossaText.text = ContatoreRossa + "";
        appareRossa();

    }
}

function onDragStop2(sprite, pointer) {

    if (pointer.y > 340 && pointer.x > 500)
    {
        console.log('input disabled on', sprite.key);
        sprite.input.enabled = false;
        ContatoreRossa++;
        ContatorerossaText.text = ContatoreRossa + "";
        appareRossa2();

    }
}

function onDragStop3(sprite, pointer) {

    if (pointer.y > 340 && pointer.x > 500)
    {
        console.log('input disabled on', sprite.key);
        sprite.input.enabled = false;
        ContatoreRossa++;
        ContatorerossaText.text = ContatoreRossa + "";
        appareRossa3();

    }
}

function onDragStop4(sprite, pointer) {

    if (pointer.y > 340 && pointer.x > 500)
    {
        console.log('input disabled on', sprite.key);
        sprite.input.enabled = false;
        ContatoreRossa++;
        ContatorerossaText.text = ContatoreRossa + "";
        appareRossa4();

    }
}

function onDragStop5(sprite, pointer) {

    if (pointer.y > 340 && pointer.x > 500)
    {
        console.log('input disabled on', sprite.key);
        sprite.input.enabled = false;
        ContatoreRossa++;
        ContatorerossaText.text = ContatoreRossa + "";
        appareRossa5();

    }
}

function onDragStop6(sprite, pointer) {

    if (pointer.y > 340 && pointer.x > 500)
    {
        console.log('input disabled on', sprite.key);
        sprite.input.enabled = false;
        ContatoreRossa++;
        ContatorerossaText.text = ContatoreRossa + "";
        appareRossa6();

    }
}


function startDrag() {

    RosaBlu.body.moves = false;


}

function startDrag2() {


    RosaBlu2.body.moves = false;


}

function startDrag3() {


    RosaBlu3.body.moves = false;


}

function stopDrag() {


    move();
    RosaBlu.body.moves = true;

}

function stopDrag2() {


    move2();
    RosaBlu2.body.moves = true;

}

function stopDrag3() {


    move3();
    RosaBlu3.body.moves = true;

}


function update2 () {


    game2.physics.arcade.overlap(RosaBlu, Cesto, collisione, null, this);
    game2.physics.arcade.overlap(RosaBlu2, Cesto, collisione2, null, this);
    game2.physics.arcade.overlap(RosaBlu3, Cesto, collisione3, null, this);

    if(ContatoreBlu <= 0){
      perso();
    }

    if(ContatoreRossa >= 10){
      vinto()
    }

}



function move() {
    var speed = 1;
    var random = Math.random()*80 +50;
    var angle = game2.physics.arcade.angleBetween(RosaBlu, Cesto);;
    RosaBlu.body.rotation = angle + game2.math.degToRad(90);
    RosaBlu.body.velocity.x =  Math.cos(angle) * speed * random;
    RosaBlu.body.velocity.y =  Math.sin(angle) * speed * random;

}

function move2() {
    var speed = 1;
    var random = Math.random()*80 + 50;
    var angle = game2.physics.arcade.angleBetween(RosaBlu2, Cesto);;
    RosaBlu2.body.rotation = angle + game2.math.degToRad(90);
    RosaBlu2.body.velocity.x =  Math.cos(angle) * speed * random;
    RosaBlu2.body.velocity.y =  Math.sin(angle) * speed * random;

}

function move3() {
    var speed = 1;
    var random = Math.random()*80 + 50;
    var angle = game2.physics.arcade.angleBetween(RosaBlu3, Cesto);;
    RosaBlu3.body.rotation = angle + game2.math.degToRad(90);
    RosaBlu3.body.velocity.x =  Math.cos(angle) * speed * random;
    RosaBlu3.body.velocity.y =  Math.sin(angle) * speed * random;

}

function collisione() {
  RosaBlu.kill();
  ContatoreBlu = ContatoreBlu - 1;
  ContatorebluText.text = ContatoreBlu + "";
  game2.add.tween(Cuore.scale).to( { x: 0.8, y: 0.8 }, 200, Phaser.Easing.Linear.None, true, 0, 0, true);

  appareBlu1();
}

function collisione2() {
  RosaBlu2.kill();
  ContatoreBlu = ContatoreBlu - 1;
  ContatorebluText.text = ContatoreBlu + "";
  game2.add.tween(Cuore.scale).to( { x: 0.8, y: 0.8 }, 200, Phaser.Easing.Linear.None, true, 0, 0, true);
  appareBlu2();
}

function collisione3() {
  RosaBlu3.kill();
  ContatoreBlu = ContatoreBlu - 1;
  ContatorebluText.text = ContatoreBlu + "";
  game2.add.tween(Cuore.scale).to( { x: 0.8, y: 0.8 }, 200, Phaser.Easing.Linear.None, true, 0, 0, true);
  appareBlu3();

}

function sfondoperso(){

  game2.world.bringToTop(Perso);
  Perso.alpha = 1;
}

function sfondovinto(){
  game2.world.bringToTop(vintosfondo);
  game2.world.bringToTop(Perso);
  vintosfondo.alpha = 1;
}
}

gioco2();
