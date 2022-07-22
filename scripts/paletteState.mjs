class DarkMode {
    
}

class WhiteMode {
    
}




class App {
    colorPalette;

    constructor() {
        this.colorPalette = new WhiteMode()
    }

    switchModeTo(newMode) {
        this.colorPalette = newMode
    }
}
