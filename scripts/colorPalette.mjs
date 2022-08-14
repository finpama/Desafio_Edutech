
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
            title: '#00247D',
            preTitle: '#005827'
        },
        darkContrast: {
            txt: 'white',
            bg: 'black',
            title: '#0049FF',
            preTitle: '#00FF71'
        }
    }

    function New(state, name, prop) {

        for(const key in colorBase) {
            if(key === state) {
                colorBase[key][name] = prop;
                return;
            }
        }

        colorBase[state] = {[name]: prop}
    }

    function Req(state, name) {
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
    
    return {
        New,
        Req,
    }
}

export default createPalette;

