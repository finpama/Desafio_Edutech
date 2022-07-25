import createCssParser from "./cssParser";

function createNavbarSetup() {

    function start() {
        console.log('[navbarSetup] Setting navbar...');

        const cssParser = createCssParser();

        const button = '#navButton';
        const list = '#navList';

        cssParser.useObjectSheet(button, { display: 'flex' });
        cssParser.useObjectSheet(list, { display: 'none' });

        navButton.addEventListener('click', function () {

            if (cssParser.searchProp(list, 'display') === 'none') {
                cssParser.useObjectSheet(list, {display: 'flex'});

                cssParser.useObjectSheet(button, {
                    transform: 'rotate(180deg)',
                    padding: '0 0 0 .4rem'
                });

            } else {
                cssParser.useObjectSheet(list, {display: 'none'});

                cssParser.useObjectSheet(button, {
                    transform: 'rotate(0)',
                    padding: '0'
                });

            }
        });
        
        console.log('[navbarSetup] Navbar ready!');
    }

    return {
        start
    }
}

export default createNavbarSetup;
