export function navbarSetup(button, navList) {
        button.addEventListener('click', function () {

            if (navList.style.display === 'none') {
                navList.style.display = 'inline-block'

            } else {
                navList.style.display = 'none'
            }
        });

}
