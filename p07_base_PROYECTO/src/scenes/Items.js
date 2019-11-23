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