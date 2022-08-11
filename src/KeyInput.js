class KeyInput {
    constructor() {
        this.key = {};
        window.addEventListener('keydown', this.down.bind(this));
        window.addEventListener('keyup', this.up.bind(this));
    }
    isPressed(keyCode) {
        return this.key[keyCode] ? this.key[keyCode] : false;
    }
    down(e) {
        if (this.key[e.keyCode]) return;
        this.keys[e.keyCode] = true;
        console.log("KeyDown", e.key, e.keyCode);
    }
    up(e) {
        this.keys[e.keyCode] = false;
        console.log("KeyDown", e.key, e.keyCode);
    }
}


const keyInput = new KeyInput();

export default keyInput;
// export function hello() {
//     window.addEventListener("keydown", function (event) {
//         if (event.defaultPrevented) {
//             return; // Do nothing if the event was already processed
//         }

//         switch (event.key) {
//             case "ArrowDown":
//                 console.log("ArrowDown");
//                 // code for "down arrow" key press.
//                 break;
//             case "ArrowUp":
//                 // code for "up arrow" key press.
//                 break;
//             case "ArrowLeft":
//                 // code for "left arrow" key press.
//                 break;
//             case "ArrowRight":
//                 // code for "right arrow" key press.
//                 break;
//             default:
//                 return; // Quit when this doesn't handle the key event.
//         }

//         // Cancel the default action to avoid it being handled twice
//         event.preventDefault();
//     }, true);
//     // the last option dispatches the event to the listener first,
//     // then dispatches event to window
// }