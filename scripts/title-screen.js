import { Helper } from "./helper.js";

class TitleScreen {
    static get #root() { return document.getElementById("titleScreenRoot"); }
    static get #startButton() { return document.getElementById("titleScreenStartButton"); }

    static async display() {
        this.#root.style.display = "grid";
        await Helper.waitForButtonClick(this.#startButton);
        this.#root.style.display = "none";
    }

    static initialize() {
        this.#root.style.display = "none";
    }
}

export { TitleScreen };