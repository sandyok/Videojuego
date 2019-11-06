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
        this.load.image("ch1", "character1.png");
        this.load.image("ch2", "character2.png");
    }

    create() {
        this.ch1 = this.add.image(100,100,"ch1");
        this.ch1.setOrigin(0,0);
        this.ch1.setScale(4,4);
        this.ch1.setFlipX(true);

        this.ch12 = this.add.image(200,100,"ch1");
        this.ch12.setOrigin(0,0);
        this.ch12.setScale(2,2);

        this.ch2 = this.add.image(300,150,"ch2");
        this.ch2.setOrigin(0,0);
        this.ch2.setScale(4,4);

        this.ch22 = this.add.image(450,150,"ch2");
        this.ch22.setOrigin(0,0);
        this.ch22.setScale(2,2);
    }

    update(time, delta) {
        
    }
}

export default Bootloader;