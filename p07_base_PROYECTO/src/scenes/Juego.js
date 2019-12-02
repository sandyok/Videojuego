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

        /* PERSONAJES  ==================== */
            // Harper
            this.load.image("harper", "Harper/presentacionH.png");
            // Sprite Harper Caminando
            this.load.spritesheet("harper_walking", "Harper/nuevoCorriendo.png", {frameWidth: 24, frameHeight: 43});
            // Sprite Harper Saltando
            this.load.spritesheet("harper_jumping", "Harper/saltoHarper.png", {frameWidth: 24, frameHeight: 43});
        
        // Enemigo encapuchado
        this.load.spritesheet("encapuchado", "Enemigos/encapuchado.png", {frameWidth: 28, frameHeight: 47});


        // Bloques
        this.load.image("bloque", "Bloques/bloque.png");

        /* ITEMS VITALIDAD */
        // Frutas
        this.load.image("pera", "Frutas/pera.png");
        this.load.image("manzana", "Frutas/manzana.png");
        this.load.image("naranja", "Frutas/naranja.png");
        this.load.image("frutaAlgo", "Frutas/algo.png");

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
        this.anims.create({key: 'harper_walking', repeat: -1, frameRate:16, frames:this.anims.generateFrameNames("harper_walking",{start:0,end:12})});

        // Harper saltando
        this.harper_jumping = this.physics.add.sprite(50, 420, "harper_jumping", 0);
        this.harper_jumping.setOrigin(0,0);
        this.harper_jumping.setScale(2,2);
        this.harper_jumping.setDepth(2);
        this.harper_jumping.setVisible(true);
        this.anims.create({key: 'harper_jumping', repeat: 0, frameRate:11, frames:this.anims.generateFrameNames("harper_jumping",{start:0,end:6})});

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
        this.physics.add.collider(this.encapuchado,this.grupoBloques);

        // Declarar set
        this.data.set('resorteras', 3);
        this.data.set('piedras', 5);
        console.log(this.data.list);

        /* ITEMS VITALIDAD ------------------------------------------------------------------------------------------------------ */
        // Frutas
        this.fruta_pera = this.physics.add.staticImage(1600,1195,"pera").setScale(.4,.4).setOffset(20,23).setSize(23,38).setName("good");
        this.fruta_manzana = this.physics.add.staticImage(2400,1195,"manzana").setScale(.4,.4).setOffset(20,23).setSize(23,38).setName("good");
        this.fruta_naranja = this.physics.add.staticImage(800,1195,"naranja").setScale(.4,.4).setOffset(20,23).setSize(23,38).setName("good");
        this.fruta_malo1 = this.physics.add.staticImage(2000,1195,"frutaAlgo").setScale(.4,.4).setOffset(20,23).setSize(23,38).setName("bad");

        this.grupoFrutas = this.physics.add.staticGroup();
        this.grupoFrutas.add(this.fruta_manzana);
        this.grupoFrutas.add(this.fruta_malo1);
        this.grupoFrutas.add(this.fruta_pera);
        this.grupoFrutas.add(this.fruta_naranja);
        
        this.grupoFrutas.children.iterate( (fruta) => {        
            fruta.setScale(.4);
        });
  
        this.physics.add.overlap(this.harper_walking, this.grupoFrutas, this.collectFruta, null, this);

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
        } );

        var contador = 0;

        this.physics.add.collider(this.grupoBloques, this.grupoPiedras);
        this.physics.add.overlap(this.harper_walking, this.grupoPiedras, () => {
            this.grupoPiedras.getChildren()[0].destroy();

            this.registry.events.emit('eventoP', contador);
            this.data.list.piedras -= 1;
            contador = contador+1;
            console.log("Hay una piedra menos disponible");
        });

        // C U R S O R E S --------------------------------------------------------------------------------------------------------
        this.cursor = this.input.keyboard.createCursorKeys();

        // RIGHT ------------------------------------------------------------------------------------------------------------------
        this.cursor.right.on('down', () => {
            this.harper_walking.setFlipX(false);
            this.harper_walking.anims.play("harper_walking");
        });
        
        // LEFT -------------------------------------------------------------------------------------------------------------------
        this.cursor.left.on('down', () => {
            this.harper_walking.setFlipX(true);
            this.harper_walking.anims.play("harper_walking");
            
        });

        // ARRIBA -----------------------------------------------------------------------------------------------------------------
        this.myCam = this.cameras.main;
        this.myCam.setBounds(0,0,1150*5,2592);
        this.myCam.startFollow(this.harper_walking);

        // this.grupo.getChildren()[0].setSize();
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

    // FUNCION para correr
    correrHarper(){
        if(this.cursor.right.isDown){
            this.harper_walking.setVisible(true);
            this.harper_jumping.setVisible(false);
            this.harper_walking.body.setVelocityX(200);
            this.harper_jumping.body.setVelocityX(200);

        }else 
            if(this.cursor.left.isDown){
                this.harper_walking.setVisible(true);
                this.harper_jumping.setVisible(false);
                this.harper_walking.body.setVelocityX(-200);
                this.harper_jumping.body.setVelocityX(-200);
            } else{
                this.harper_walking.anims.stop("harper_walking");
                this.harper_walking.setFrame(0);
                //this.harper_jumping.anims.stop("harper_jumping");
                //this.harper_jumping.setFrame(0);
        }
    }

    // FUNCION para saltar
    saltarHarper(){
        if(this.cursor.up.isDown){
            
            this.harper_walking.setVisible(false);
            this.harper_jumping.setVisible(true);
            this.harper_walking.setVelocityY(-300);
            this.harper_jumping.setVelocityY(-300);
            
            this.harper_jumping.anims.play("harper_jumping");
        }
        if(this.cursor.up.isUp){
            
            this.harper_walking.setVisible(true);
            this.harper_jumping.setVisible(false);
        }
    }

    // FUNCTION para que el encapuchado camine encapuchadamente gg
    caminaEncapuchado (){
        
    }

    update(time, delta) {
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
                //console.log("----" + (1.5/delta));                
            }
            else {
                this.encapuchado.setFlipX(true);
            }            
        } 
        else {

            auxMovement += (1.2/delta)+1;
            if (auxMovement < 500 ) {

                this.encapuchado.setX(auxMovement);
                //console.log("-----------------> " + (1.5/delta));                
            }
            else {
                this.encapuchado.setFlipX(false);
            }

            
        }
        //console.log(auxMovement);


    }
}

export default Juego;