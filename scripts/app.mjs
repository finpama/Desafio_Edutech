import createNavbarSetup from './navbarSetup.mjs'

function createApp() {
    const navbarSetup = createNavbarSetup();

    function start() {
        console.log('[app] Inicialising...');
        navbarSetup.start();
        console.log('[app] Inicialised!');

    }

    return {
        start
    }
}

export default createApp;
