class Vitalidad extends Phaser.Scene{
    
    constructor(){
        super({
            key: 'Vitalidad'
        });
    }

    init() {
        console.log('Scene =Vitalidad= running');
    }

    preload() {

    }

    create() {

        //this.add.image(10, 10, 'contenedor').setOrigin(0,0).setScale(2.5, 2.5);

        // C O N T A I N E R =========================================================================================
        const container = this.add.container(220, 50);
        // Container origen: (0.5, 0.5)
        console.log("Container Origen: (" + container.originX + ", " + container.originY + ")");
        

        // C O N T E N E D O R  =======================================================================================
        this.contenedor = this.add.image(10, 10, 'contenedor');
        //this.contenedor.setOrigin(0.0, 0.0);
        this.contenedor.setScale(3);
        // Contenedor origen: (0.5, 0.5)
        //console.log("Contenedor Origen: (" + this.contenedor.originX + ", " + this.contenedor.originY + ")");

        // V I T A L I D A D  =======================================================================================
        this.barraVitalidad = this.add.image(30, 10, 'barraVitalidad');
        //this.barraVitalidad.setOrigin(0.0, 0.0);
        this.barraVitalidad.setScale(3);

        // T E X T O ==================================================================================================
        this.texto = this.add.text(-130, 19, 'LIFE', {
            fontSize: 18
        });
        // Texto origen: (0, 0)
        //console.log("Texto Origen: (" + this.texto.originX + ", " + this.texto.originY + ")");

        // H A R P E R ==================================================================================================
        this.harper = this.add.image(-175, 10, 'harper')
            .setDepth(2)
            .setScale(1.5);
        // Yoshi origen: (0.5, 0.5)
        //console.log("Yoshi Origen: (" + this.yoshi.originX + ", " + this.yoshi.originY + ")");

        // C O C O R O  ==================================================================================================
        this.grupoC = this.physics.add.group({
            key: 'cocoro',
                repeat: 2,
                setXY: {
                        x: 155,
                        y: 35,
                        stepX: 20
                }
        });

        this.grupoC.children.iterate( (cocoro) => {
            cocoro.setScale(0.03);
            cocoro.body.setAllowGravity(false);
        } );
        
        // this.cocoro = this.add.image(5, 10, 'cocoro')
        //     .setDepth(2)
        //     .setScale(0.03);
        // Yoshi origen: (0.5, 0.5)
        //console.log("Yoshi Origen: (" + this.yoshi.originX + ", " + this.yoshi.originY + ")");

        // -> Agregamos los objetos al contenedor
        container.add([
            this.contenedor,
            this.barraVitalidad,
            this.texto,
            this.harper,
            //this.cocoro
            this.grupoC.getChildren()[0],
            this.grupoC.getChildren()[1],
            this.grupoC.getChildren()[2],
            
            //this.yoshi
        ]);


    }

    update(time, delta) {
        // ESTA FUNCION CREA UN CICLO INFINITO
        //console.log(time);
    }
}

export default Vitalidad;