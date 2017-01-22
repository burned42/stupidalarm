var gameOver = function (game) {
};

gameOver.prototype = {
    init: function (time) {
        time = time + " sec.";
        var score = this.game.add.text(this.game.width - 8, this.game.height - 8, time, {font: '24px Arial', fill: '#ffffff'});
        score.anchor.setTo(1, 1);
    },
    create: function() {
        var endGame = this.game.add.emitter(this.game.world.centerX, this.world.centerY, 10);
        endGame.makeParticles("zzz");
        endGame.setAlpha(1, 0, 5000);
        endGame.setRotation(0, 0);
        endGame.setScale(0.3, 1, 0.3, 1, 4000, Phaser.Easing.Quartic.Out);
        endGame.gravity = -100;
        endGame.start(false, 3000, 10);
        endGame.emitX = this.game.width * 0.5;
        endGame.emitY = this.game.height * 0.5;
        game.add.tween(endGame).to( { emitX: 800-64 }, 1000, Phaser.Easing.Sinusoidal.InOut, true, 0, Number.MAX_VALUE, true);
        game.add.tween(endGame).to( { emitY: 200 }, 4000, Phaser.Easing.Sinusoidal.InOut, true, 0, Number.MAX_VALUE, true);

        var bigchar = this.game.add.sprite(this.game.width * 0.5, this.game.height - 130, 'bigCharacterSleeping', 0);
        bigchar.anchor.setTo(0.5, 0.5);

        this.game.add.button(this.game.width * 0.1, this.game.height * 0.6, 'replay', this.playGame, this);

        space = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    },
    update: function () {
        if (space.isDown) {
            this.playGame();
        }
    },
    playGame: function () {
        this.game.state.start("StupidAlarm");
    }
};