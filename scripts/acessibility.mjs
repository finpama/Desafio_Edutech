import createPalette from "./colorPalette.mjs";
import createCssParser from "./cssParser";

function createAcessibilityButtonSetup() {
    const cssParser = createCssParser()
    const palette = createPalette();

    function start() {

        console.log('[buttonSetup] Setting buttons...')

        const switchTo = function (mode) {
            
            cssParser.useObjectSheet('.background', { background: palette.req(mode, 'bg') });
            cssParser.useObjectSheet('.preTitle', { color: palette.req(mode, 'preTitle') });
            cssParser.useObjectSheet('.title', { color: palette.req(mode, 'title') });
            cssParser.useObjectSheet('.text', { color: palette.req(mode, 'txt') });
            cssParser.useObjectSheet('section.trilhas details.card', { background: palette.req(mode, 'detailsCard') });
        }



        function render() {
            if (buttons.darkBtt.state === false && buttons.contrastBtt.state === false) {

                switchTo('whiteMode')

            } else if (buttons.darkBtt.state === true && buttons.contrastBtt.state === false) {

                switchTo('darkMode')

            } else if (buttons.darkBtt.state === false && buttons.contrastBtt.state === true) {

                switchTo('whiteContrast')

            } else if (buttons.darkBtt.state === true && buttons.contrastBtt.state === true) {

                switchTo('darkContrast')

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

            constructor(classNameId) {
                this.el = document.querySelector(classNameId);
            }

            click() {
                if (this.state) {
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

        console.log('[buttonSetup] Acessibility buttons Ready.');

    }


    return {
        start
    }
}

export default createAcessibilityButtonSetup;