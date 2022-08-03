import { PixiApp } from "./PixiApp";
import * as PIXI from './pixi';

window.onload = async () => {
    // Create the pixi app
    const APP = new PixiApp({
        resize: true, // Custom funtionality, to resize the app to the size of the HTML

        antialias: false,
        backgroundAlpha: 1,
        backgroundColor: 0x888800,
        sharedTicker: true,
        autoDensity: true,
        clearBeforeRender: true,
    });

    // Load the bunny image
    await APP.loadAsset("Bunny", "/assets/bunny.png");

    // Create the sprite to show the bunny, give it a size and position
    let sprite = PIXI.Sprite.from("Bunny");
    sprite.anchor.set(.5, .5);
    sprite.width = 80;
    sprite.height = 100;
    sprite.x = APP.width * .5;
    sprite.y = APP.height * .5;

    // Change the position of the bunny each time the app is resized
    APP.onResize((width, height) => {
        sprite.x = width * .5;
        sprite.y = height * .5;
    });

    // Rotate the bunny constantly
    APP.onTickerUpdate((dt) => {
        sprite.rotation += dt * .05;
    });

    // Add the bunny to the scene
    APP.addVisual(sprite);
}