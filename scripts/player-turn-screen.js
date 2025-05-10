import { Helper } from "./helper.js";

class PlayerTurnScreen {
    static get #root() { return document.getElementById("playerSetupScreenRoot"); }

    static initialize() {
        this.#root.style.display = "none";
    }
}

export { PlayerTurnScreen };