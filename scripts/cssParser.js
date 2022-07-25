function createCssParser() {
    //cssParser = createCssParser()
    //cssParser.useObjectSheet('className', {display: none});
    //cssParser.searchProp('className', 'display') == 'none';

    function useObjectSheet(className, object) {
        const el = document.querySelector(className)

        for (const prop in object) {
            el.style[prop] = object[prop]
        }
    }

    function searchProp(className, prop) {
        const el = document.querySelector(className);

        return el.style[prop]
    }

    return {
        useObjectSheet,
        searchProp
    }
}

export default createCssParser;