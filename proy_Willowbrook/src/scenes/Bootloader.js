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
    }

    create() {
        this.yoshi = this.add.image(100, 100, 'yoshi');
    }

    update(time, delta) {
        
    }
}

export default Bootloader;