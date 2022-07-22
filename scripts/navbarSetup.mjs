
function createNavbarSetup() {

    function start() {
        console.log('[navbarSetup] Setting navbar...');

        const navButton = document.querySelector('#navButton');
        const navList = document.querySelector('#navList');

        navButton.style.display = 'inline-block'
        navList.style.display = 'none'

        navButton.addEventListener('click', function () {

            if (navList.style.display === 'none') {
                navList.style.display = 'inline-block'

            } else {
                navList.style.display = 'none'
            }
        });
        
        console.log('[navbarSetup] Navbar ready!');
    }

    return {
        start
    }
}

export default createNavbarSetup;
