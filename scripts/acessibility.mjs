import createPalette from "./colorPalette.mjs";
import createCssParser from "./cssParser";

function createAcessibilityButtonSetup() {
    const cssParser = createCssParser()
    const palette = createPalette();

    function start() {

        const modes = {
            whiteMode() {
                cssParser.useObjectSheet('.background', {background: palette.req('whiteMode', 'bg')});
                cssParser.useObjectSheet('.preTitle', {color: palette.req('whiteMode', 'preTitle')});
                cssParser.useObjectSheet('.title', {color: palette.req('whiteMode', 'title')});
                cssParser.useObjectSheet('.text', {color: palette.req('whiteMode', 'txt')});
            },

            darkMode() {
                cssParser.useObjectSheet('.background', {background: palette.req('darkMode', 'bg')});
                cssParser.useObjectSheet('.preTitle', {color: palette.req('darkMode', 'preTitle')});
                cssParser.useObjectSheet('.title', {color: palette.req('darkMode', 'title')});
                cssParser.useObjectSheet('.text', {color: palette.req('darkMode', 'txt')});

            },

            whiteContrast() {
                cssParser.useObjectSheet('.background', {background: palette.req('whiteContrast', 'bg')});
                cssParser.useObjectSheet('.preTitle', {color: palette.req('whiteContrast', 'preTitle')});
                cssParser.useObjectSheet('.title', {color: palette.req('whiteContrast', 'title')});
                cssParser.useObjectSheet('.text', {color: palette.req('whiteContrast', 'txt')});
            },

            darkContrast() {
                cssParser.useObjectSheet('.background', {background: palette.req('darkContrast', 'bg')});
                cssParser.useObjectSheet('.preTitle', {color: palette.req('darkContrast', 'preTitle')});
                cssParser.useObjectSheet('.title', {color: palette.req('darkContrast', 'title')});
                cssParser.useObjectSheet('.text', {color: palette.req('darkContrast', 'txt')});
            }
        }



        function render() {
            if (buttons.darkBtt.state === false && buttons.contrastBtt.state === false) {

                modes.whiteMode()

            } else if (buttons.darkBtt.state === true && buttons.contrastBtt.state === false) {

                modes.darkMode()
                
            } else if (buttons.darkBtt.state === false && buttons.contrastBtt.state === true) {

                modes.whiteContrast()
                
            } else if (buttons.darkBtt.state === true && buttons.contrastBtt.state === true) {

                modes.darkContrast()
                
            }

            for (const key in buttons) {
                const button = buttons[key];
                
                if (button.state) {
                    button.el.style.opacity = 0.5

                } else {
                    button.el.style.opacity = 1
                }
            }
        }


        class Button {
            state = false;

            constructor(classNameId){
                this.el = document.querySelector(classNameId);
            }

            click() {
                if(this.state){
                    this.state = false;

                } else {
                    this.state = true;
                }
                
                render();
            }
        }

        const buttons = {
            darkBtt: new Button('.darkMode'),
            contrastBtt: new Button('.contrastMode')
        }

        for (const key in buttons) {
            const button = buttons[key];

            button.el.addEventListener('click', () => {
                button.click();
            });
        }

        render()

    }


    return {
        start
    }
}

export default createAcessibilityButtonSetup;