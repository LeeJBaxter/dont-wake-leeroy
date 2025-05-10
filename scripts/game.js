import { Helper } from "./helper.js";
import { TitleScreen } from "./title-screen.js";
import { PlayerSetupScreen } from "./player-setup-screen.js";
import { PlayerTurnScreen } from "./player-turn-screen.js";
import { GameOverScreen } from "./game-over-screen.js";

class Game {
    static async main() {
        TitleScreen.initialize();
        PlayerSetupScreen.initialize();
        PlayerTurnScreen.initialize();
        GameOverScreen.initialize();

        await TitleScreen.display();
    }
}

export { Game };