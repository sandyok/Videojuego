class Items extends Phaser.Scene{
    
    constructor(){
        super({
            key: 'Items'
        });
    }

    init() {
        console.log('Scene =Items= running');
    }
    
    preload() {

        //this.load.text();

    }


    

    create() {

        //this.add.image(910,  20, 'bota').setScale(1.0).setOrigin(0.0, 0.0);
        //this.add.image(830, 20, 'cont_item_vacio').setScale(1.0).setOrigin(0.0, 0.0);
        this.add.image(910, 20, 'cont_item_vacio').setScale(1.0).setOrigin(0.0, 0.0);
        this.add.image(990, 20, 'cont_item_vacio').setScale(1.0).setOrigin(0.0, 0.0);
        this.add.image(1070, 20, 'cont_item_vacio').setScale(1.0).setOrigin(0.0, 0.0);
        
        
        // // Evento Resortera
        this.registry.events.on('eventoR', (dato) => {
            console.log('Se ha emitido el evento ', dato);
            this.resortera = this.add.image(1013, 28, "resortera").setOrigin(0,0).setScale(0.40, 0.40).setDepth(7);
        });


        // // Texto
        var text = '';
        text = this.make.text(100, 100, "phaser", { font: "bold 40px Arial", fill: "#000000" });
        //text.set (0.5);


        // // Evento Piedras
        this.registry.events.on('eventoP', (dato) => {
            console.log('Se ha emitido el evento ', dato);
            this.piedraI = this.add.image(1085, 30, "piedra").setOrigin(0,0).setScale(0.15, 0.15);
            //this.resortera = this.add.image(1015, 25, "resortera").setOrigin(0,0).setScale(0.42, 0.42).setDepth(7);

            if (dato == 0) {
                

            } else {
                
                this.texto = this.add.text(1115, 60, 'X'+(dato+1)), {
                    fontSize: 18
                };

                // if (dato == 1) {
                //     this.texto.add.text(1115, 60, 'X'+(dato+1));
                // } else {
                //     this.texto.add.text('X'+(dato+1));
                // }
                
            }

        });        

        //Resortera
        //this.resortera = this.physics.add.image(220, 280, "resortera").setOrigin(0,0).setScale(0.3, 0.3);

    }

    colocarItem() {

        console.log("Llamaste a funcion");

    }

    update(time, delta) {
        // ESTA FUNCION CREA UN CICLO INFINITO
        //console.log(time);
    }
}

export default Items;