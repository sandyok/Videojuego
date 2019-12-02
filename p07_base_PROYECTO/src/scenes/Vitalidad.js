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

        

        // C O N T A I N E R =========================================================================================
        const container = this.add.container(220, 50);
        // Container origen: (0.5, 0.5)
        console.log("Container Origen: (" + container.originX + ", " + container.originY + ")");
        

        // C O N T E N E D O R  =======================================================================================
        this.contenedor = this.add.image(-50, 10, 'contenedor');
        //this.contenedor.setOrigin(0.0, 0.0);
        this.contenedor.setScale(2.05, 2.4);

        // V I T A L I D A D  =======================================================================================
        
        this.cuadro = this.add.image(-31, 4, 'cuadro');
        this.cuadro.setScale(2);

        this.barrita = this.add.image(-145, -6, 'barrita');
        this.barrita.setOrigin(0.0, 0.0);
        this.barrita.setScale(1, 2);


        // T E X T O ==================================================================================================
        // this.texto = this.add.text(-130, 15, 'LIFE', {
        //     fontSize: 18
        // });

        // H A R P E R ==================================================================================================
        this.harper = this.add.image(-168, 9, 'harper').setDepth(2).setScale(1.4);

        // C O C O R O  ==================================================================================================
        this.grupoC = this.physics.add.group({
            key: 'cocoro',
                repeat: 2,
                setXY: {
                        x: 30,
                        y: 25,
                        stepX: 20
                }
        });

        this.grupoC.children.iterate( (cocoro) => {
            cocoro.setScale(0.024);
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
            //this.barraVitalidad,
            this.barrita,
            this.cuadro,
            //this.texto,
            this.harper,
            //this.cocoro
            this.grupoC.getChildren()[0],
            this.grupoC.getChildren()[1],
            this.grupoC.getChildren()[2],
            
            //this.yoshi
        ]);


        // E V E N T O  Disminuir/Aumentar vitalidad ================================================================================
        this.registry.events.on('eventoVitalidad', (dato) => {

            // 2 = 100%, 1 = 50%, 0.2 = 10%, etc...
            var vitalidadActual= this.barrita.scaleX;
           
            if (dato) {
                // Aumenta vitalidad
                console.log("Aumenta un 10%");
                vitalidadActual += 0.2;
                this.barrita.setScale(vitalidadActual, 2);

            } else {
                // Reduce vitalidad
                console.log("Reduce un 10%");
                vitalidadActual -= 0.2;
                this.barrita.setScale(vitalidadActual, 2);
            }
        });
    }

    update(time, delta) {
        // ESTA FUNCION CREA UN CICLO INFINITO
        //console.log(time,delta);

        //var porcentajeBarrita = Number;
        //porcentajeBarrita = 250/delta;
        //console.log(delta);


    }
}

export default Vitalidad;