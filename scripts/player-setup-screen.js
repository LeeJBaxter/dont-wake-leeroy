import { Helper } from "./helper.js";

class PlayerSetupScreen {
    static get #root() { return document.getElementById("playerSetupScreenRoot"); }
    static get #startButton() { return document.getElementById("playerSetupScreenStartButton"); }

    static initialize() {
        this.#root.style.display = "none";
    }
}

export { PlayerSetupScreen };