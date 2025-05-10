import { Helper } from "./helper";

class GameOverScreen {
    static get #root() { return document.getElementById("playerSetupScreenRoot"); }

    static initialize() {
        this.#root.style.display = "none";
    }
}

export { GameOverScreen };