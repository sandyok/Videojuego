class Bootloader extends Phaser.Scene{
    constructor(){
        super({
            key: 'Bootloader'
        });
    }

    init() {
        console.log('Escena Bootloader');
    }
    
    preload() {
        this.load.path = './assets/';
        this.load.image(['yoshif', 'yoshi']);
         // Menu
         this.load.image("menu_capa_0", "Bosque_Capas/Inicio_bosque_capa_0.png");
         this.load.image("menu_capa_1", "Bosque_Capas/Inicio_bosque_capa_1.png");
         this.load.image("menu_capa_2", "Bosque_Capas/Inicio_bosque_capa_2.png");
         this.load.image("menu_capa_3", "Bosque_Capas/Inicio_bosque_capa_3.png");
         this.load.image("menu_capa_4", "Bosque_Capas/Inicio_bosque_capa_4.png");
 
         // Botones
         this.load.image("btn_Jugar", "Botones/btn_Jugar3.png");
         this.load.image("btn_Ajustes", "Botones/btn_Ajustes3.png");
         this.load.image("btn_Ayuda", "Botones/btn_Ayuda3.png");
 
         this.load.spritesheet("firefly", "spritesheet_firefly.png",{frameWidth: 480, frameHeight: 160});
    }

    create() {
        // Capas del fondo
        this.menu_capa_0 = this.add.image(0,0,"menu_capa_0").setOrigin(0,0).setScale(3,3).setDepth(0);
        this.menu_capa_1 = this.add.image(0,0,"menu_capa_1").setOrigin(0,0).setScale(3,3).setDepth(1);
        this.menu_capa_2 = this.add.image(0,0,"menu_capa_2").setOrigin(0,0).setScale(3,3).setDepth(2);
        this.menu_capa_3 = this.add.image(0,0,"menu_capa_3").setOrigin(0,0).setScale(3,3).setDepth(3);
        this.menu_capa_4 = this.add.image(0,0,"menu_capa_4").setOrigin(0,0).setScale(3,3).setDepth(4);

         // Animacion de las luciernágas
         this.anims.create({key: "firefly", repeat: -1, frameRate:5, frames:this.anims.generateFrameNames("firefly",{start:0,end:16})});
        
         this.grupo = this.add.group();
         this.grupo.createMultiple(
         [
             {             
                 key: 'firefly',   
                 repeat: 2,         
                 setXY: {                 
                     x: 150,                 
                     y: 150,
                     stepX: 480,        
                 }
             },
             {             
                 key: 'firefly',   
                 repeat: 2,         
                 setXY: {                 
                     x: 150,                 
                     y: 300,
                     stepX: 480,        
                 }
             },
             {             
                 key: 'firefly',   
                 repeat: 2,         
                 setXY: {                 
                     x: 150,                 
                     y: 450,
                     stepX: 480,        
                 }
             }
         ]    
         );
 
         this.grupo.playAnimation('firefly');
 
         this.grupo.children.iterate( (firefly) => {            
             firefly.setScale(2);  
             firefly.setDepth(3);
             firefly.setAlpha(0.8);
         });
         this.grupo.children.entries[4].setScale(1.4);
         this.grupo.children.entries[4].setDepth(1);
         this.grupo.children.entries[6].setScale(1.8);
         this.grupo.children.entries[6].setDepth(3);

         // Contenedor de Opciones
        const container = this.add.container(630,350).setDepth(5);

        // Constante de eventos del boton
        const eventos_btn = Phaser.Input.Events;

        // Botones
        this.btn_Jugar = this.add.image(-60, -80, "btn_Jugar").setScale(.12,.12).setDepth(5).setInteractive();
        this.btn_Ajustes = this.add.image(-60, 0, "btn_Ajustes").setScale(.12,.12).setDepth(5).setInteractive();
        this.btn_Ayuda = this.add.image(-60, 70, "btn_Ayuda").setScale(.12,.12).setDepth(5).setInteractive();

        console.log(container);

        container.add([
            this.btn_Jugar,
            this.btn_Ajustes,
            this.btn_Ayuda
        ]);

        // Boton Jugar evento
        this.input.on(eventos_btn.GAMEOBJECT_OVER, (pointer, gameObject) => {
            gameObject.setScale(.14);
        });

        this.input.on(eventos_btn.GAMEOBJECT_OUT, (pointer, gameObject) => {
            gameObject.setScale(.12);
        });

        // Accion de botones
        this.btn_Jugar.on(eventos_btn.POINTER_DOWN, () => this.iniciarJuego());
        this.btn_Ajustes.on(eventos_btn.POINTER_DOWN, () => this.ajustesJuego());
        this.btn_Ayuda.on(eventos_btn.POINTER_DOWN, () => this.ayudaJuego());
    }

    iniciarJuego(){
        console.log("Iniciando Juego...");
    }

    ajustesJuego(){
        console.log("Ajustes Juego");
    }

    ayudaJuego(){
        console.log("Ayuda Juego");
    }

    update(time, delta) {
        
    }
}

export default Bootloader;