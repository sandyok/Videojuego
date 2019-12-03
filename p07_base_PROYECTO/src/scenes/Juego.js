class Juego extends Phaser.Scene{
    constructor(){
        super({
            key: 'Juego'
        });
    }

    init() {
        console.log('Scene =Juego= running');
        
        

    }

    
    preload() {
        this.load.path = './assets/';
        /* AMBIENTE DEL JUEGO */
        // Fondo
        this.load.image("fondo_capa_0", "Bosque_Capas/bosque_capa_0.png");
        this.load.image("fondo_capa_1", "Bosque_Capas/bosque_capa_1.png");
        this.load.image("fondo_capa_2", "Bosque_Capas/bosque_capa_2.png");
        this.load.image("fondo_capa_3", "Bosque_Capas/bosque_capa_3.png");
        this.load.image("fondo_capa_4", "Bosque_Capas/bosque_capa_4.png");

        /* MUSICA Y SONIDOS */
        // Musica
        this.load.audio("audio_fondo", "Sonidos/elBosqueTenebroso.mp3")

        /* PERSONAJES */
        // Harper
        this.load.image("harper", "Harper/presentacionH.png");
        // Sprite Harper Caminando
        this.load.spritesheet("harper_walking", "Harper/nuevoCorriendo.png", {frameWidth: 24, frameHeight: 43});
        // Sprite Harper Saltando
        this.load.spritesheet("harper_jumping", "Harper/saltoHarper.png", {frameWidth: 24, frameHeight: 43});
        
        // Enemigo encapuchado
        this.load.spritesheet("encapuchado", "Enemigos/encapuchado.png", {frameWidth: 30, frameHeight: 47});


        // Bloques
        this.load.image("bloque", "Bloques/bloque.png");
        this.load.image("bloqueFloat", "Bloques/bloqueFlotante.png");
        this.load.image("bloqueFloatG", "Bloques/bloqueFlotanteG.png");
        this.load.image("bloqueNormal", "Bloques/bloqueNormal.png");
        this.load.image("bloqueFusion", "Bloques/bloqueFusion.png");

        /* OBSTACULOS */
        this.load.image("tronco", "Objetos/tronco.png");

        /* ITEMS VITALIDAD */
        // Frutas
        this.load.image("pera", "Frutas/pera.png");
        this.load.image("manzana", "Frutas/manzana.png");
        this.load.image("naranja", "Frutas/naranja.png");
        this.load.image("frutaAlgo", "Frutas/algo.png");

        // Cofre con objetos
        this.load.spritesheet("cofre", "Objetos/sprite_cofre.png", {frameWidth: 26, frameHeight: 19});

        /* ITEMS DEFENSA */
        // Resortera
        this.load.image("resortera", "Bloques/resortera.png");
    
        // Piedra
        this.load.image("piedra", "Bloques/piedra.png");

        // Contenedor (Escena Vitalidad)
        this.load.image("contenedor", "Vitalidad/contenedor.png");
        //this.load.image('barraVitalidad', "Vitalidad/barraVitalidad.png");
        this.load.image('barrita', "Vitalidad/barrita.png");
        this.load.image('cuadro', "Vitalidad/cuadro.png");
        this.load.image('harper', "Vitalidad/harper.png");
        this.load.image('cocoro', "Vitalidad/cocoro.png");
        
        // Contenedor(es) de items
        this.load.image('bota', "Cont_Items/bota.png");
        this.load.image('cont_item_vacio', "Cont_Items/cont_item_vacio.png");
        this.load.image('cont_item_btn', "Cont_Items/cont_item_btn.png");


        
    }

    

    create() {

        var cont;
        this.cont = 0;

        this.fondo_0 = this.add.tileSprite(0,0,1152,2592,"fondo_capa_0");
        this.fondo_0.setOrigin(0,0);
        this.fondo_0.setScrollFactor(0);

        this.fondo_1 = this.add.tileSprite(0,0,1152,648,"fondo_capa_1");
        this.fondo_1.setOrigin(0,0);
        this.fondo_1.setScrollFactor(0);

        this.fondo_2 = this.add.tileSprite(0,0,1152,648,"fondo_capa_2");
        this.fondo_2.setOrigin(0,0);
        this.fondo_2.setScrollFactor(0);

        this.fondo_3 = this.add.tileSprite(0,0,1152,648,"fondo_capa_3");
        this.fondo_3.setOrigin(0,0);
        this.fondo_3.setScrollFactor(0);

        this.fondo_4 = this.add.tileSprite(0,0,1152,648,"fondo_capa_4");
        this.fondo_4.setOrigin(0,0);
        this.fondo_4.setScrollFactor(0);

        // Muscia y Sonidos
        this.audio_Fondo = this.sound.add("audio_fondo");
        this.audio_Fondo.play();

        // Escenas
        this.scene.launch('Vitalidad');
        this.scene.launch('Items');

        // Harper Caminando
        this.harper_walking = this.physics.add.sprite(50, 420, "harper_walking", 0);
        this.harper_walking.setOrigin(0,0);
        this.harper_walking.setScale(2,2);
        this.harper_walking.setDepth(2);
        this.harper_walking.setVisible(true);
        this.anims.create({key: 'harper_walking', repeat: -1, frameRate:17, frames:this.anims.generateFrameNames("harper_walking",{start:0,end:12})});
        //this.harper_walking.body.setGravityY(300);
        
        // Harper Saltando
        this.harper_jumping = this.physics.add.sprite(50,420, "harper_jumping",0);
        this.harper_jumping.setOrigin(0,0);
        this.harper_jumping.setScale(2,2);
        this.harper_jumping.setDepth(2);
        this.harper_jumping.setVisible(false);
        this.anims.create({key: 'harper_jumping', repeat: -1, frameRate:8, frames:this.anims.generateFrameNames("harper_jumping",{start:0,end:6})});
        //this.harper_jumping.body.setGravityY(300);

        // Encapuchado caminando
        this.encapuchado = this.physics.add.sprite(400, 820, "encapuchado", 0);
        this.encapuchado.setOrigin(0,0);
        this.encapuchado.setScale(2,2);
        this.encapuchado.setDepth(2);
        this.encapuchado.setVisible(true);
        this.anims.create({key: 'encapuchado', repeat: -1, frameRate:6, frames:this.anims.generateFrameNames("encapuchado",{start:0,end:2})});
        this.encapuchado.anims.play("encapuchado");

        // Bloques
        this.grupoBloques = this.physics.add.staticGroup({
            key: 'bloque',
            repeat: 23,
            setXY: {
                x: 126,
                y: 1250,
                stepX: 244
            }
        });

        this.grupoBloques.children.iterate( (bloque) => {
            bloque.setScale(5);
            // Cambiamos el tamano del colisionador 
            bloque.setOffset(-100, -28);
            bloque.setSize(244,118);
        } );

        this.physics.add.collider(this.harper_walking,this.grupoBloques);
        this.physics.add.collider(this.harper_jumping,this.grupoBloques);
        //this.physics.add.collider(this.encapuchado,this.grupoBloques);

        // Bloques Flotantes Pequeños
        this.grupoBloquesFloat = this.physics.add.staticGroup({
            key: 'bloqueFloat',
            repeat: 2,
            setXY: {
                x: 800,
                y: 1050,
                stepX: 500
            }
        });

        this.grupoBloquesFloat.children.iterate((bloqueFloat) => {
            bloqueFloat.setScale(2);
            bloqueFloat.setOffset(-28,-2);
            bloqueFloat.setSize(100,35);
        });

        this.physics.add.collider(this.harper_walking,this.grupoBloquesFloat);
        this.physics.add.collider(this.harper_jumping,this.grupoBloquesFloat);

        // Bloques Flotantes Grandes
        this.grupoBloquesFloatG = this.physics.add.staticGroup({
            key: 'bloqueFloatG',
            repeat: 2,
            setXY: {
                x: 1040,
                y: 950,
                stepX: 900
            }
        });

        this.grupoBloquesFloatG.children.iterate((bloqueFloatG) => {
            bloqueFloatG.setScale(2);
            bloqueFloatG.setOffset(-50,-2);
            bloqueFloatG.setSize(198,35);
        });

        this.physics.add.collider(this.harper_walking,this.grupoBloquesFloatG);
        this.physics.add.collider(this.harper_jumping,this.grupoBloquesFloatG);

        // Bloques Fusion
        this.grupoBloquesFusion = this.physics.add.staticGroup({
            key: 'bloqueFusion',
            repeat: 23,
            setXY: {
                x: 126,
                y: 1368,
                stepX: 244
            }
        });

        this.grupoBloquesFusion.children.iterate( (bloqueFusion) => {
            bloqueFusion.setScale(5);
            // Cambiamos el tamano del colisionador 
            bloqueFusion.setOffset(-100, -28);
            bloqueFusion.setSize(244,118);
        } );

        this.physics.add.collider(this.harper_walking,this.grupoBloquesFusion);
        this.physics.add.collider(this.harper_jumping,this.grupoBloquesFusion);

        this.grupoBloques.children.entries[7].destroy();
        this.grupoBloquesFusion.children.entries[7].destroy();

        /* ANIMALES ------------------------------------------------------------------------------------------------------------- */
    

        // Declarar set
        this.data.set('resorteras', 3);
        this.data.set('piedras', 5);
        console.log(this.data.list);


        



        /* OBSTACULOS ----------------------------------------------------------------------------------------------------------- */
        // Troncos
        this.grupoTroncos = this.physics.add.staticGroup({
            key: 'tronco',
            repeat: 2,
            setXY: {
                x: 400,
                y: 1175,
                stepX: 100
            }
        });

        this.grupoTroncos.children.iterate((tronco) => {
            tronco.setScale(0.19);
            tronco.setOffset(165,185);
            tronco.setSize(40,50);
        });

        this.physics.add.collider(this.harper_walking,this.grupoTroncos);
        this.physics.add.collider(this.harper_jumping,this.grupoTroncos);

        /* ITEMS VITALIDAD ------------------------------------------------------------------------------------------------------ */
        // Frutas
        // this.fruta_pera = this.physics.add.staticImage(1600,1195,"pera").setScale(.4,.4).setOffset(20,23).setSize(23,38).setName("good");
        // this.fruta_pera_2 = this.physics.add.staticImage(1600,1195,"pera").setScale(.4,.4).setOffset(20,23).setSize(23,38).setName("good");
        // this.fruta_manzana = this.physics.add.staticImage(1040,918,"manzana").setScale(.4,.4).setOffset(20,23).setSize(23,38).setName("good");
        // this.fruta_manzana_2 = this.physics.add.staticImage(2400,1195,"manzana").setScale(.4,.4).setOffset(20,23).setSize(23,38).setName("good");
        // this.fruta_naranja = this.physics.add.staticImage(800,1195,"naranja").setScale(.4,.4).setOffset(20,23).setSize(23,38).setName("good");
        // this.fruta_naranja_2 = this.physics.add.staticImage(800,1195,"naranja").setScale(.4,.4).setOffset(20,23).setSize(23,38).setName("good");
        // this.fruta_malo_1 = this.physics.add.staticImage(2000,1195,"frutaAlgo").setScale(.4,.4).setOffset(20,23).setSize(23,38).setName("bad");
        // this.fruta_malo_2 = this.physics.add.staticImage(2000,1195,"frutaAlgo").setScale(.4,.4).setOffset(20,23).setSize(23,38).setName("bad");

        // this.grupoFrutas = this.physics.add.staticGroup();
        // this.grupoFrutas.add(this.fruta_manzana);
        // this.grupoFrutas.add(this.fruta_malo_1);
        // this.grupoFrutas.add(this.fruta_pera);
        // this.grupoFrutas.add(this.fruta_naranja);
        // this.grupoFrutas.add(this.fruta_manzana_2);
        // this.grupoFrutas.add(this.fruta_malo_2);
        // this.grupoFrutas.add(this.fruta_pera_2);
        // this.grupoFrutas.add(this.fruta_naranja_2);
        
        // this.grupoFrutas.children.iterate( (fruta) => {        
        //     fruta.setScale(.4);
        // });
  
        // this.physics.add.overlap(this.harper_walking, this.grupoFrutas, this.collectFruta, null, this);

        /* ITEMS DEFENSA -------------------------------------------------------------------------------------------------------- */
        // Resortera
        this.resortera = this.physics.add.image(200, 280, "resortera").setOrigin(0,0).setScale(0.3, 0.3);
        
        this.physics.add.collider(this.grupoBloques, this.resortera); 
        this.physics.add.overlap(this.harper_walking, this.resortera, () => {
            this.resortera.destroy();
            this.registry.events.emit('eventoR', true);

            // Incrementar (disminuir) el valor de algun set
            this.data.list.resorteras -= 1;
            console.log("Hay una resortera menos disponible");
        });

        // Piedras
        this.grupoPiedras = this.physics.add.staticGroup({
            key: 'piedra',
                repeat: 3,
                setXY: {
                        x: 320,
                        y: 1195,
                        stepX: 100
                }
        });

        this.grupoPiedras.children.iterate( (piedra) => {
            piedra.setScale(0.1, 0.1);

            // Cambiamos el tamano del colisionador
            piedra.setSize(20, 25);
            piedra.setOffset(125, 125);
        });

        var contador = 0;

        this.physics.add.collider(this.grupoBloques, this.grupoPiedras);
        this.physics.add.overlap(this.harper_walking, this.grupoPiedras, () => {
            this.grupoPiedras.getChildren()[0].destroy();

            this.registry.events.emit('eventoP', contador);
            this.data.list.piedras -= 1;
            contador = contador+ 1;
            console.log("Hay una piedra menos disponible\nContador: " + contador);
        });

        //Cofre
        this.cofre = this.physics.add.staticSprite(100,1160,"cofre",0);
        this.cofre.setOrigin(0,0);
        this.cofre.setScale(2.4);
        this.cofre.setSize(53,38);
        this.cofre.setOffset(14,18);

        this.physics.add.collider(this.cofre,this.grupoBloques);
        this.physics.add.overlap(this.harper_jumping,this.cofre,this.collectCofre,null,this);

        // C U R S O R E S --------------------------------------------------------------------------------------------------------
        this.cursor = this.input.keyboard.createCursorKeys();

        // RIGHT ------------------------------------------------------------------------------------------------------------------
        this.cursor.right.on('down', () => {
            this.harper_walking.setFlipX(false);
            this.harper_walking.anims.play("harper_walking");

            this.harper_jumping.setFlipX(false);
        });
        
        // LEFT -------------------------------------------------------------------------------------------------------------------
        this.cursor.left.on('down', () => {
            this.harper_walking.setFlipX(true);
            this.harper_walking.anims.play("harper_walking");
            this.harper_jumping.setFlipX(true);
        });

        // ARRIBA -----------------------------------------------------------------------------------------------------------------
        this.cursor.up.on('down', () => {
            this.harper_jumping.setVisible(true);
            this.harper_jumping.anims.play("harper_jumping");
            this.harper_walking.setVisible(false);
        });

        this.cursor.up.on('up', () => {
            this.harper_jumping.setVisible(false);
            this.harper_jumping.anims.stop("harper_jumping");
            this.harper_jumping.setFrame(0);
            this.harper_walking.setVisible(true);
        });
        
        this.myCam = this.cameras.main;
        this.myCam.setBounds(0,0,1150*5,2592);
        this.myCam.startFollow(this.harper_walking);
        this.myCam.startFollow(this.harper_jumping);  

        // this.grupo.getChildren()[0].setSize();
        
        this.cursor.space.on('down', () => {
            var aux = Number;
            aux = this.lanzaPiedra(contador);
            if (aux >= 0)
                contador = aux;
            else
                contador = 0;
            
        });



        // // SHOOOTINGGGGG !! =================================================================================================================

        // // Shooting
        // var bullets;
        // var ship;
        // var speed;
        // var stats;
        // var cursors;
        // var lastFired = Number;
        // lastFired = 0;
        

        // var Bullet = new Phaser.Class({

        //     Extends: Phaser.GameObjects.Image,
    
        //     initialize:
    
        //     function Bullet (scene)
        //     {
        //         Phaser.GameObjects.Image.call(this, scene, 10, 0, 'piedra');
    
        //         this.speed = Phaser.Math.GetSpeed(400, 1);
        //         this.setScale(0.1);
        //     },
    

        //     lanzamiento: function (){
        //         this.x += this.speed * 20;
        //         //this.lanzamiento();
        //     },

        //     fire: function (x, y)
        //     {
        //         this.setPosition(x+20, y+20);
    
        //         this.setActive(true);
        //         this.setVisible(true);

        //         this.lanzamiento();

        //     },
    
        //     update: function (time, delta)
        //     {
        //         //console.log(this.y);
        //         //this.y -= this.speed * delta;
        //         //this.x += this.speed * delta;
                
        //         //this.y -= this.velocity.y * delta;

        //         //if ( (this.harper_walking.x - this.x) == 200 )

        //         //console.log("Y: " + this.y);
        //         //console.log("X: " + this.x);
    
        //         if (this.y < 1000)
        //         //console.log(ship);
        //         //if ( (this.x ) == 200 )
        //         {
        //             this.y += this.speed * delta;
        //             this.setActive(false);
        //             this.setVisible(false);
        //         }
        //     },

            
    
        // });
    
        // this.bullets = this.add.group({
        //     classType: Bullet,
        //     maxSize: 1,
        //     runChildUpdate: true
        // });
    
        // //this.ship = this.add.sprite(400, 1100, 'harper').setDepth(1).setVisible(false);
    
        // this.ship = this.harper_walking;    
        // this.cursors = this.input.keyboard.createCursorKeys();
        // this.speed = Phaser.Math.GetSpeed(300, 1);

    }

    // FUNCION para recolectar la FRUTA
    collectFruta(harper,fruta){
        fruta.disableBody(true,true);
        if(fruta.name == "good"){
            // AQUI IRIA LO DE EL AUMENTO EN LA BARRA DE VIDA
            this.registry.events.emit('eventoVitalidad', true);
        }else{
            // CASO CONTRARIO
            this.registry.events.emit('eventoVitalidad', false);
        }
    }

    // Obtener cosas del cofre PENDIENTE
    collectCofre(harper,cofre){
        if((harper.y + harper.body.height * 0.5 < cofre.y) && harper.body.velocity.y > 0 ){
            this.cofre.setFrame(1);
        }
    }

    // FUNCION para correr
    correrHarper(){
        if(this.cursor.right.isDown){
            this.harper_walking.body.setVelocityX(200);
            this.harper_jumping.body.setVelocityX(200);

            //this.harper_walking.x
        }else if(this.cursor.left.isDown){
            this.harper_walking.body.setVelocityX(-200);
            this.harper_jumping.body.setVelocityX(-200);


        }else{
            this.harper_walking.anims.stop("harper_walking");
            this.harper_walking.setFrame(0);
        }
    }

    // FUNCION para saltar
    saltarHarper(){
        if(this.cursor.up.isDown && (this.harper_jumping.body.onFloor() || this.harper_jumping.body.touching.down)){
            this.harper_walking.body.velocity.y=-560;
            this.harper_jumping.body.velocity.y=-560;
        }
    }

    // FUNCTION para que el encapuchado camine encapuchadamente gg
    caminaEncapuchado (){
        
    }


    lanzaPiedra (datoContador) {
     
        if(datoContador > 0) {

            this.piedraL = this.physics.add.image(this.harper_jumping.x, this.harper_jumping.y, "piedra").setOrigin(0,0).setScale(0.1, 0.1);

            if (!this.harper_walking.flipX)
                this.piedraL.body.velocity.x = 800;
            else
                this.piedraL.body.velocity.x = -800;    

            return datoContador -1;
            
        }
        else {
            console.log("Ya no tienes mas piedas!");
        }

       

        
    }

        

    

    update(time, delta) {

        //console.log("Elemento:" + this.lastFired);
        
        // Contador para poder hacer que el jugador no se mueva al dejar de presionar las teclas
        this.cont++;
        if(this.cont>150){
            this.harper_walking.body.setVelocityX(0);
            this.harper_jumping.body.setVelocityX(0);
        }

        this.correrHarper();
        this.saltarHarper();

        // scroll the texture of the tilesprites proportionally to the camera scroll
        this.fondo_0.tilePositionX = this.myCam.scrollX * .1;
        this.fondo_1.tilePositionX = this.myCam.scrollX * .2;
        this.fondo_2.tilePositionX = this.myCam.scrollX * .3;
        this.fondo_3.tilePositionX = this.myCam.scrollX * .4;
        this.fondo_4.tilePositionX = this.myCam.scrollX * .5;

        this.fondo_0.tilePositionY = this.myCam.scrollY;
        this.fondo_1.tilePositionY = this.myCam.scrollY;
        this.fondo_2.tilePositionY = this.myCam.scrollY;
        this.fondo_3.tilePositionY = this.myCam.scrollY;
        this.fondo_4.tilePositionY = this.myCam.scrollY;

        // Control de movimiento del encapuchado
        var auxMovement = Number;
        auxMovement = this.encapuchado.x;

        if ( this.encapuchado.flipX == false ){
            
            auxMovement -= (1.2/delta)+1;
            if (auxMovement > 420 ) {
                this.encapuchado.setX(auxMovement);          
            }
            else {
                this.encapuchado.setFlipX(true);
            }            
        } 
        else {
            auxMovement += (1.2/delta)+1;
            if (auxMovement < 500 ) {
                this.encapuchado.setX(auxMovement);          
            }
            else {
                this.encapuchado.setFlipX(false);
            }
        }

        // // // // Disparar piedra
        // // // if (this.cursors.left.isDown) {
        // // //     //this.ship.x -= this.speed * delta;
        // // // }
        // // // else if (this.cursors.right.isDown) {
        // // //     //this.ship.x += this.speed * delta;
        // // // }
        // // // //console.log(time + "" + this.lastFired);
        // // // if ((this.cursors.space.isDown)) {

        // // //     // console.log("OK");
        // // //     var bullet = this.bullets.get();

        // // //     if (bullet) {

        // // //         bullet.fire(this.ship.x, this.ship.y);
        // // //         this.lastFired += 50;
        // // //     }
        // // // }


    }
}

export default Juego;