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
         // Fondo
         this.load.image("fondo_capa_0", "Bosque_Capas/bosque_capa_0.png");
         this.load.image("fondo_capa_1", "Bosque_Capas/bosque_capa_1.png");
         this.load.image("fondo_capa_2", "Bosque_Capas/bosque_capa_2.png");
         this.load.image("fondo_capa_3", "Bosque_Capas/bosque_capa_3.png");
         this.load.image("fondo_capa_4", "Bosque_Capas/bosque_capa_4.png");

         // Harper
         this.load.image("harper", "Harper/harper.png");

         // Sprite Harper Caminando
         this.load.spritesheet("harper_walking", "Harper/walk.png", {frameWidth: 19, frameHeight: 45});

         // Bloques
         this.load.image("bloqueEnmedio", "Bloques/bloqueENMEDIO.png");

        // Resortera
        this.load.image("resortera", "Bloques/resortera.png");
    
        // Piedra
        this.load.image("piedra", "Bloques/piedra.png");

        // Contenedor (Escena Vitalidad)
        this.load.image("contenedor", "Vitalidad/contenedor.png");
        this.load.image('barraVitalidad', "Vitalidad/barraVitalidad.png");
        this.load.image('harper', "Vitalidad/harper.png");
        this.load.image('cocoro', "Vitalidad/cocoro.png");
        

        // Contenedor(es) de items
        this.load.image('bota', "Cont_Items/bota.png");
        this.load.image('cont_item_vacio', "Cont_Items/cont_item_vacio.png");
        this.load.image('cont_item_btn', "Cont_Items/cont_item_btn.png");
        


    }

    create() {
        
        this.fondo_0 = this.add.tileSprite(0,0,1150,648,"fondo_capa_0");
        this.fondo_0.setScale(3);
        this.fondo_0.setOrigin(0,0);
        this.fondo_0.setScrollFactor(0);

        this.fondo_1 = this.add.tileSprite(0,0,1150,648,"fondo_capa_1");
        this.fondo_0.setScale(3);
        this.fondo_1.setOrigin(0,0);
        this.fondo_1.setScrollFactor(0);

        this.fondo_2 = this.add.tileSprite(0,0,1150,648,"fondo_capa_2");
        this.fondo_2.setOrigin(0,0);
        this.fondo_2.setScrollFactor(0);

        this.fondo_3 = this.add.tileSprite(0,0,1150,648,"fondo_capa_3");
        this.fondo_3.setOrigin(0,0);
        this.fondo_3.setScrollFactor(0);

        this.fondo_4 = this.add.tileSprite(0,0,1150,648,"fondo_capa_4");
        this.fondo_4.setOrigin(0,0);
        this.fondo_4.setScrollFactor(0);

        // Escenas
        this.scene.launch('Vitalidad');
        this.scene.launch('Items');

        // Harper Caminando
        this.harper_walking = this.physics.add.sprite(50, 420, "harper_walking", 0);
        this.harper_walking.setOrigin(0,0);
        this.harper_walking.setScale(2,2);
        this.harper_walking.setDepth(2);
        this.harper_walking.setVisible(true);
        this.anims.create({key: 'harper_walking', repeat: -1, frameRate:8, frames:this.anims.generateFrameNames("harper_walking",{start:0,end:3})});

        // Harper imagen
        //this.harper = this.physics.add.image(50,480,"harper").setOrigin(0,0).setScale(2,2);

        // Bloques
        this.grupo = this.physics.add.staticGroup({
            key: 'bloqueEnmedio',
                repeat: 20,
                setXY: {
                        x: 120,
                        y: 600,
                        stepX: 200
                }
        });

        this.grupo.children.iterate( (bloqueEnmedio) => {
            bloqueEnmedio.setScale(5);

            // Cambiamos el tamano del colisionador
            bloqueEnmedio.setSize(200, 245);
            bloqueEnmedio.setOffset(-100, -15);
        } );

        this.physics.add.collider(this.grupo, this.harper_walking);

        // // Declarar set
        this.data.set('resorteras', 3);
        this.data.set('piedras', 5);
        console.log(this.data.list);


        // Resortera
        this.resortera = this.physics.add.image(200, 280, "resortera").setOrigin(0,0).setScale(0.3, 0.3);
        
        this.physics.add.collider(this.grupo, this.resortera); 
        this.physics.add.collider(this.harper_walking, this.resortera, () => {

            this.resortera.destroy();
            this.registry.events.emit('eventoR', true);
            //this.resortera = this.add.image(938, 120, "resortera").setOrigin(0,0).setScale(0.42, 0.42).setDepth(7);

            // Incrementar (disminuir) el valor de algun set
            this.data.list.resorteras -= 1;
            console.log("Hay una resortera menos disponible");
            
        });

        


        // Piedras 
        //this.piedraI = this.physics.add.image(300, 280, "piedra").setOrigin(0,0).setScale(0.1, 0.1);

        this.grupoPiedras = this.physics.add.staticGroup({
            key: 'piedra',
                repeat: 1,
                setXY: {
                        x: 320,
                        y: 560,
                        stepX: 100
                }
        });

        this.grupoPiedras.children.iterate( (piedra) => {
            piedra.setScale(0.1, 0.1);

            // // Cambiamos el tamano del colisionador
            piedra.setSize(20, 25);
            piedra.setOffset(125, 125);
        } );

        //var contador = ;

        this.physics.add.collider(this.grupo, this.grupoPiedras);
        this.physics.add.collider(this.harper_walking, this.grupoPiedras, (contador) => {

            //this.piedraI.destroy();
            //this.grupoPiedras.remove(this.grupoPiedras.getChildren()[0]);
            this.grupoPiedras.getChildren()[0].destroy();
            //this.piedraI = this.add.image(120, 30, "piedra").setOrigin(0,0).setScale(0.15, 0.15);
            //console.log("Colision con: ");
            //this.grupoPiedras.getChildren()[1].destroy();

            this.registry.events.emit('eventoP', contador);
            this.data.list.piedras -= 1;
            //contador = contador+1;
            console.log("Hay una piedra menos disponible");
        });

        //this.physics.add.collider(this.grupo, this.piedraI);

        // this.physics.add.collider(this.harper_walking, this.piedraI, () => {

        //     this.piedraI.destroy();
        //     //this.piedraI = this.add.image(120, 30, "piedra").setOrigin(0,0).setScale(0.15, 0.15);
        //     console.log("Colision con: ");
        //     //this.grupoPiedras.getChildren()[1].destroy();

        //     this.registry.events.emit('eventoP', true);
        //     this.data.list.piedras -= 1;
        //     console.log("Hay una piedra menos disponible");
        // });

        // // this.piedraII = this.physics.add.image(400, 280, "piedra").setOrigin(0,0).setScale(0.1, 0.1);

        // // this.physics.add.collider(this.grupo, this.piedraII);

        // // this.physics.add.collider(this.harper_walking, this.piedraII, () => {

        // //     this.piedraII.destroy();
        // //     // T E X T O ==================================================================================================
        // //     this.texto = this.add.text(154, 55, 'X2', {
        // //         fontSize: 18
        // //     });

        // // });

        
        //this.contenedor = this.add.image(10, 10, "contenedor").setOrigin(0,0).setScale(2.5, 2.5);

        

        // C U R S O R E S --------------------------------------------------------------------------------------------------------
        this.cursor = this.input.keyboard.createCursorKeys();

        // RIGHT -------------------------------------------------------------------------------------------------------------------
        this.cursor.right.on('down', () => {
            this.harper_walking.setFlipX(false);
            this.harper_walking.anims.play("harper_walking");
            this.harper_walking.body.setVelocityX(200);
        });

        this.cursor.right.on('up', () => {
            this.harper_walking.anims.stop('harper_walking');
            this.harper_walking.setFrame(0);
            this.harper_walking.body.setVelocityX(-800);
            this.harper_walking.body.stop();
        });
        
        // lEFT -------------------------------------------------------------------------------------------------------------------
        this.cursor.left.on('down', () => {
            this.harper_walking.setFlipX(true);
            this.harper_walking.anims.play("harper_walking");
            this.harper_walking.body.setVelocityX(-200);
        });

        this.cursor.left.on('up', () => {
            this.harper_walking.anims.stop('harper_walking');
            this.harper_walking.setFrame(0);
            this.harper_walking.body.setVelocityX(-800);
            this.harper_walking.body.stop();
        });

        //
        // ARRIBA
        this.cursor.up.on('down', () => {
            this.harper_walking.body.setVelocityY(-800);
        });



        this.myCam = this.cameras.main;
        this.myCam.setBounds(0,0,1150*3,648);
        this.myCam.startFollow(this.harper_walking);


        //

        //this.grupo.getChildren()[0].setSize();


        


    }

    update(time, delta) {
      
          // scroll the texture of the tilesprites proportionally to the camera scroll
          this.fondo_0.tilePositionX = this.myCam.scrollX * .3;
          this.fondo_1.tilePositionX = this.myCam.scrollX * .3;
          this.fondo_2.tilePositionX = this.myCam.scrollX * .4;
          this.fondo_3.tilePositionX = this.myCam.scrollX * .4;
          this.fondo_4.tilePositionX = this.myCam.scrollX * .5;
        
        
          if (this.cursor.left.isUp) {
            
            //this.harper_walking.anims.stop('harper_walking');
      
          } else if (this.cursor.right.isUp) {
            //this.harper_walking.anims.stop('harper_walking'); 
          }

      
    }
}

export default Juego;