class Helper {
    static getRandomElement(array) {
        const length = array.length;
        const index = Math.floor(Math.random() * length);
        return array[index];
    }

    static async waitForButtonClick(...buttons) {
        return await new Promise((resolve) => {
            for (let button of buttons) {
                button.onclick = () => resolve(button);
            }
        });
    }
}

export { Helper };