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

    }

    create() {

        this.add.image(910,  20, 'bota').setScale(1.0).setOrigin(0.0, 0.0);
        this.add.image(990, 20, 'cont_item_vacio').setScale(1.0).setOrigin(0.0, 0.0);
        this.add.image(1070, 20, 'cont_item_vacio').setScale(1.0).setOrigin(0.0, 0.0);

        // // Crear un nuevo evento
        this.registry.events.on('eventoR', (dato) => {
            console.log('Se ha emitido el evento ', dato);
            this.resortera = this.add.image(1015, 25, "resortera").setOrigin(0,0).setScale(0.42, 0.42).setDepth(7);
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