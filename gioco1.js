var game;


function gioco1() {

  game = new Phaser.Game(663, 464, Phaser.AUTO, 'gioco1', { preload: preload, create: create, update: update,});

function preload() {

    game.stage.backgroundColor = '#85b5e1';

    game.load.baseURL = './immaginigioco/';
    game.load.crossOrigin = 'anonymous';

    game.load.tilemap('level1', 'level1.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('tiles-1', 'tiles-1.png');
    game.load.spritesheet('dude', 'dude1.png', 32, 48);
    game.load.image('starSmall', 'star.png');
    game.load.image('starBig', 'saw.png');
    game.load.image('indicaz', 'Homepage platform.png');
    game.load.image('but', 'Button1.png');
    game.load.image('key', 'iconachiave.png');
    game.load.image('trap', 'trap.png');
    game.load.image('teschio', 'Orologio rosso.png');
    game.load.image('door', 'door.png');
    game.load.image('back4', 'back4.png');
    game.load.image('orologiotimer', 'Orologio.png');

    game.load.image('Perso', 'platform perso.png');
    game.load.image('Vinto', 'platform vinto.png');
}

var uscita
var map;
var tileset;
var layer;
var player;
var intruso;
var facing = 'right';
var jumpTimer = 0;
var cursors;
var jumpButton;
var bg;
var time;
var timeText;
var timer;
var textover;
var textoversecondline;
var subtext;
var bar;
var liveText;
var textinizia;
var bottone;
var chiave;
var textchiave;
var ingresso;
var subtime;
var image;
var textmancapoco;
var tempotrappola;
var textnotfound;
var scrittanontrovata;
var timerorologioicon;
var avvisochiave;
var Perso;
var Vinto;

function create() {

    Vinto = game.add.sprite(0,0, 'Vinto');
    game.world.bringToTop(Vinto);
    Vinto.alpha = 0;
    Vinto.fixedToCamera = true;



    time = 200;
    ingresso = 0;
    subtime = 0;
    tempotrappola = 0;
    scrittanontrovata = 0;
    avvisochiave = 0;

    Perso = game.add.sprite(0,0, 'Perso');
    Perso.fixedToCamera = true;

    Perso.anchor.y = 0;
    Perso.anchor.x = 0;
    Perso.alpha = 0;


    game.physics.startSystem(Phaser.Physics.ARCADE);

    game.stage.backgroundColor = '#000000';

    bg = game.add.tileSprite(0, 0, 1000, 700, 'back4');
    bg.fixedToCamera = true;

    map = game.add.tilemap('level1');

    map.addTilesetImage('tiles-1');

    map.setCollisionByExclusion([ 13, 14, 15, 16, 46, 47, 48, 49, 50, 51 ]);

    layer = map.createLayer('Tile Layer 1');

    //  Un-comment this on to see the collision tiles
    // layer.debug = true;

    layer.resizeWorld();

    game.physics.arcade.gravity.y = 300;

    uscita = game.add.sprite(782, 1450, 'door'); //uscita
    game.physics.arcade.enable(uscita);
    uscita.body.collideWorldBounds = true;



    player = game.add.sprite(80, 80, 'dude');
    game.physics.enable(player, Phaser.Physics.ARCADE);

    player.body.bounce.y = 0.2;
    player.body.collideWorldBounds = true;
    player.body.setSize(20, 32, 5, 16);

    player.animations.add('left', [0, 1, 2, 3], 10, true);
    player.animations.add('turn', [4], 20, true);
    player.animations.add('right', [5, 6, 7, 8], 10, true);

    game.camera.follow(player);

    cursors = game.input.keyboard.createCursorKeys();
    jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);




    chiave = game.add.sprite(1500, 1380, 'key'); //trappola
    game.physics.arcade.enable(chiave);
    chiave.body.collideWorldBounds = true;
    chiave.anchor.y =0.5;
    chiave.anchor.x = 0.5;
    chiave.scale.y =0.8;
    chiave.scale.x = 0.8;
    chiave.body.collideWorldBounds = true;
    game.add.tween(chiave.scale).to( { x: -0.8, y: 0.8 }, 1500, Phaser.Easing.Linear.None, true, 0, 1500, true);

    textchiave = game.add.text(20, 60, '', { fontSize: '15px', fill: '#f5f5dc' });
    textchiave.fixedToCamera = true;







     trappola = game.add.sprite(520, 800, 'trap'); //trappola
    game.physics.arcade.enable(trappola);
 trappola.body.collideWorldBounds = true;


        trappoladue = game.add.sprite(550, 800, 'trap'); //trappola
    game.physics.arcade.enable(trappoladue);
 trappoladue.body.collideWorldBounds = true;



     trappolatre = game.add.sprite(520, 170, 'trap'); //trappola
    game.physics.arcade.enable(trappolatre);
 trappolatre.body.collideWorldBounds = true;

        trappolaquattro = game.add.sprite(550, 170, 'trap'); //trappola
    game.physics.arcade.enable(trappolaquattro);
 trappolaquattro.body.collideWorldBounds = true;


     trappolacinque = game.add.sprite(580, 560, 'trap'); //trappola
    game.physics.arcade.enable(trappolacinque);
 trappolacinque.body.collideWorldBounds = true;

     trappolasei = game.add.sprite(480, 300, 'trap'); //trappola
    game.physics.arcade.enable(trappolasei);
 trappolasei.body.collideWorldBounds = true;

     trappolasette = game.add.sprite(250, 1200, 'trap'); //trappola
    game.physics.arcade.enable(trappolasette);
 trappolasette.body.collideWorldBounds = true;

     trappolaotto = game.add.sprite(1400, 1500, 'trap'); //trappola
    game.physics.arcade.enable(trappolaotto);
 trappolaotto.body.collideWorldBounds = true;

     trappolanove = game.add.sprite(350, 1500, 'trap'); //trappola
    game.physics.arcade.enable(trappolanove);
 trappolanove.body.collideWorldBounds = true;



    image = game.add.sprite(350, 50, 'teschio'); //trappola
    image.fixedToCamera = true;
    image.alpha = 0;



         game.paused = true;



    timeText = game.add.text(70, 55, '' + time + ' secondi', { fontSize: '25px', fill: '#FFF' });
    timer = game.time.create(true);
    timeText.addColor('#FFFFFF', 14);
    timeText.fixedToCamera = true;
    timer.loop(1000, updateCounter, this);
    timeText.anchor.y =0.5;
    timeText.anchor.x = 0;
    timer.start();



    chiaveicon = game.add.sprite(31, 85, 'key');
    chiaveicon.fixedToCamera = true;
    chiaveicon.alpha = 0;


    timerorologioicon = game.add.sprite(18, 28, 'orologiotimer');
    timerorologioicon.scale.x = 0.9;
    timerorologioicon.scale.y = 0.9;
    timerorologioicon.fixedToCamera = true;

    bar = game.add.graphics();
    bar.beginFill(0x000000, 0.8);
    bar.fixedToCamera = true;





    textnotfound = this.game.add.text(game.camera.x + (game.width/2), game.camera.y + (game.height/2), "", {font: "40px Arial",boundsAlignH: "center", boundsAlignV: "middle", fill: "#ffffff", stroke: '#fff', strokeThickness: 2});
    textnotfound.anchor.setTo(0.5, 0.5);
    textnotfound.fixedToCamera = true;
    textnotfound.alpha=0;





    textover = this.game.add.text(game.camera.x + (game.width/2), game.camera.y + (game.height/2), "", {font: "40px Arial",boundsAlignH: "center", boundsAlignV: "middle", fill: "#ffffff", stroke: '#fff', strokeThickness: 2});
    textover.anchor.setTo(0.5, 0.5);
    textover.fixedToCamera = true;




   textoversecondline = this.game.add.text(game.camera.x + (game.width/2), game.camera.y + (game.height/2) + 50, "", {font: "40px Arial",boundsAlignH: "center", boundsAlignV: "middle", fill: "#ffffff", stroke: '#fff', strokeThickness: 2});
    textoversecondline.anchor.setTo(0.5, 0.5);
    textoversecondline.fixedToCamera = true;





     game.paused = true;



intruso = game.add.sprite(0,0, 'indicaz'); //trappola
    game.physics.arcade.enable(intruso);
       intruso.alpha= 1;


bottone = game.add.sprite(420,355, 'but'); //trappola
 bottone.inputEnabled = true;
 bottone.events.onInputDown.add(removeLogo, this);
  bottone.input.useHandCursor = true;
  bottone.scale.x = 0.4;
  bottone.scale.y = 0.4;







platforms = game.add.physicsGroup();

}





function updateCounter() {

    time--;
    timeText.text = '' + time + ' secondi';
    if (time<=0) {
        timeText.text = ' 0 secondi';
        timer.stop()
        game.world.bringToTop(Perso);
        Perso.alpha = 1;
        game.paused = true;
        erase();
    }

}

function erase () {

    setTimeout(goRight, 2000);


}

function update() {
    game.physics.arcade.collide(layer, uscita);
    game.physics.arcade.collide(layer, chiave);
   game.physics.arcade.overlap(player, chiave, collectchiave, null, this);
    game.physics.arcade.collide(player, layer);
    game.physics.arcade.overlap(player, uscita, victory, null, this);
    game.physics.arcade.collide(layer, trappoladue);
  game.physics.arcade.collide(layer, trappola);
     game.physics.arcade.collide(layer, trappolatre);
  game.physics.arcade.collide(layer, trappolaquattro);
      game.physics.arcade.collide(layer, trappolacinque);
  game.physics.arcade.collide(layer, trappolasei);
     game.physics.arcade.collide(layer, trappolasette);
  game.physics.arcade.collide(layer, trappolaotto);
      game.physics.arcade.collide(layer, trappolanove);
    game.physics.arcade.overlap(player, trappola, torn1, null, this);
     game.physics.arcade.overlap(player, trappoladue, torn2, null, this);
    game.physics.arcade.overlap(player, trappolatre, torn3, null, this);
    game.physics.arcade.overlap(player, trappolaquattro, torn4, null, this);
    game.physics.arcade.overlap(player, trappolacinque, torn6, null, this);
     game.physics.arcade.overlap(player, trappolasei, torn7, null, this);
     game.physics.arcade.overlap(player, trappolasette, torn8, null, this);
     game.physics.arcade.overlap(player, trappolaotto, torn9, null, this);
    game.physics.arcade.overlap(player, trappolanove, torn5, null, this);
    player.body.velocity.x = 0;



    if (time<=20) {
       cambiocolore();
}


    if (cursors.left.isDown)
    {
        player.body.velocity.x = -150;

        if (facing != 'left')
        {
            player.animations.play('left');
            facing = 'left';
        }
    }
    else if (cursors.right.isDown)
    {
        player.body.velocity.x = 150;

        if (facing != 'right')
        {
            player.animations.play('right');
            facing = 'right';
        }
    }
    else
    {
        if (facing != 'idle')
        {
            player.animations.stop();

            if (facing == 'left')
            {
                player.frame = 0;
            }
            else
            {
                player.frame = 5;
            }

            facing = 'idle';
        }
    }

    if (jumpButton.isDown && player.body.onFloor() && game.time.now > jumpTimer)
    {

        player.body.velocity.y = -250;
        jumpTimer = game.time.now + 750;



    }




}

function vinto() {
  game.world.bringToTop(Vinto);
  Vinto.alpha = 1;
}

function victory (player, uscita) {
     if (ingresso==1) {
      vinto();
      timer.stop()
      game.paused = true;
      setTimeout(goLeft, 2000);



     };
     if (ingresso==0) {
  chiavenontrovata();


     }
}


function torn1 (player, trappola) {
    colpito();

}
function torn2 (player, trappoladue) {
    colpito();

}
function torn3 (player, trappolatre) {
    colpito();

}
function torn4 (player, trappolaquattro) {
    colpito();

}
function torn5 (player, trappolacinque) {
    colpito();

}
function torn6 (player, trappolasei) {
    colpito();

}
function torn7 (player, trappolasette) {
    colpito();

}
function torn8 (player, trappolaotto) {
    colpito();

}
function torn9 (player, trappolanove) {
    colpito();

}

function chiavenontrovata (player, uscita) {
    if ( scrittanontrovata ==0) {
        scrittanontrovata = 1;
   game.time.events.add(0, fadenontrovata, this);
         textnotfound.alpha = 1;
}
}

function fadenontrovata () {
      textnotfound.text = 'Non hai ancora trovato la chiave';
   scrittanontrovata = 0;
    textnotfound.alpha = 0;

}


function colpito () {


    if (subtime==0) {
        subtime = 1;
        game.time.events.add(500, fadePicture, this);
        time = time - 2;
        timeText.addColor('#a82926', 0);
        image.alpha = 1;
        image.anchor.y = 0.5;
        image.anchor.x = 0.5;
        game.add.tween(image.scale).to( { x: 1.2, y: 1.2 }, 200, Phaser.Easing.Linear.None, true, 0, 0, true);


         }
}



function fadePicture () {
    image.alpha = 0;
     timeText.addColor('#FFFFFF', 0);
    subtime = 0;
}

function removeLogo () {


    intruso.alpha= 0;
    bottone.kill();

     game.paused = false;

}


function collectchiave (player, chiave)  {
     if (ingresso==0) {
    chiave.kill();
    if (avvisochiave ==0) {
            chiaveicon.alpha = 1;
         ingresso = 1;
        avvisochiave = 1;
     }
}
}

function avvisamichiave (player, chiave) {
    if (avvisochiave == 1) {
    textchiave.text = 'HAI TROVATO LA CHIAVE';
        textchiave.alpha = 1;
    }
}

 function cambiocolore () {
     timeText.fontSize = 35;
    timeText.fontWeight = 'bold';


}


}

gioco1();
