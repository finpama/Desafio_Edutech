import createNavbarSetup from './navbarSetup.mjs'
import createAcessibilityButtonSetup from './acessibility.mjs';

function createApp() {
    const navbarSetup = createNavbarSetup();
    const acessibilityButtonSetup = createAcessibilityButtonSetup()
    
    function start() {
        console.log('[app] Inicialising...');

        navbarSetup.start();
        acessibilityButtonSetup.start()
        
        console.log('[app] Inicialised!');

    }

    return {
        start
    }
}

export default createApp;
