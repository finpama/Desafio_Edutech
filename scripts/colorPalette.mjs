function createPalette() {

    const colorBase = {
        whiteMode: {
            txt: '#3E3E3E',
            bg: '#E3E3E3',
            title: '#28407C',
            preTitle: '#008E3F'
        },
        darkMode: {
            txt: '#C2C2C2',
            bg: '#0F0F0F',
            title: '#314E98',
            preTitle: '#00AB4C'
        },
        whiteContrast: {
            txt: 'black',
            bg: 'white',
            title: '#001C62',
            preTitle: '#00431E'
        },
        darkContrast: {
            txt: 'white',
            bg: 'black',
            title: '#0049FF',
            preTitle: '#00FF71'
        }
    }

    function set(state, name, prop) {

        for(const key in colorBase) {
            if(key === state) {
                colorBase[key][name] = prop;
                return;
            }
        }

        colorBase[state] = {[name]: prop}
    }

    function req(state, name) {
        if(state){
            if (name) {
                return colorBase[state][name]
            } else {
                return colorBase[state]
            }

        } else {
            return colorBase
        }
    }

    function del(state, name) {
        if(state){
            if (name) {
                delete colorBase[state][name]
            } else {
                delete colorBase[state]
            }

        }
    }
    
    return {
        set,
        req,
        del,
    }
}

export default createPalette;

