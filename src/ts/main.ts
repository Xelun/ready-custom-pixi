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

    // Load a custom font
    await APP.loadFont("SCRIPTIN", "/assets/SCRIPTIN.ttf");
    
    // Create a text
    let text = new PIXI.Text("", { fontFamily: "SCRIPTIN", fill: 0x883333, align: "center", fontSize: 30, fontWeight: "bold" });
    text.anchor.set(.5, .5);
    text.x = APP.width * .5;
    text.y = APP.height * .7;
    text.text = APP.width + " x " + APP.height;

    // Change the text and position everytime the app resizes
    APP.onResize((width, height) => {
        text.x = width * .5;
        text.y = height * .7;
        text.text = width + " x " + height;
    });
    
    // Add the text to the scene
    APP.addVisual(text);
}