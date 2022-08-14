import createPalette from "./colorPalette.mjs";
import createCssParser from "./cssParser";

function createAcessibilityButtonSetup() {
    const cssParser = createCssParser()
    const palette = createPalette();

    function start() {
        function render() {
            if (buttons.darkBtt.state === false && buttons.contrastBtt.state === false) {

                //modo claro
                cssParser.useObjectSheet('.text', {color: palette.Req('whiteMode', 'txt')});
                cssParser.useObjectSheet('.background', {background: palette.Req('whiteMode', 'bg')});

            } else if (buttons.darkBtt.state === true && buttons.contrastBtt.state === false) {

                // modo escuro 
                cssParser.useObjectSheet('.text', {color: palette.Req('darkMode', 'txt')});
                cssParser.useObjectSheet('.background', {background: palette.Req('darkMode', 'bg')});

            } else if (buttons.darkBtt.state === false && buttons.contrastBtt.state === true) {

                // modo contraste
                cssParser.useObjectSheet('.text', {color: palette.Req('whiteContrast', 'txt')});
                cssParser.useObjectSheet('.background', {background: palette.Req('whiteContrast', 'bg')});

            } else if (buttons.darkBtt.state === true && buttons.contrastBtt.state === true) {

                // contraste escuro
                cssParser.useObjectSheet('.text', {color: palette.Req('darkContrast', 'txt')});
                cssParser.useObjectSheet('.background', {background: palette.Req('darkContrast', 'bg')});
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