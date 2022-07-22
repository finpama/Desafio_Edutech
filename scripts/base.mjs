import createApp from './app.mjs';

const app = createApp()

try {
    app.start()
    
} catch (err) {
    console.log('[app] Uncaught error');
    console.error(err);
}
