import createApp from './app.mjs';

const app = createApp()

try {
    app.start()
    
} catch (err) {
    console.log('[app] Uncatch error');
    console.error(err);
}

// navbarButtonSetup(document.querySelector('#navButton'), document.querySelector('#navList'));

