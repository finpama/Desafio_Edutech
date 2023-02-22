function createCssParser() {
    //cssParser = createCssParser()
    //cssParser.useObjectSheet('className', {display: none});
    //cssParser.searchProp('className', 'display') == 'none';

    function getElements(className) {
        const elements = document.querySelectorAll(className);

        return elements
    }

    function useObjectSheet(className, object) {

        const elements = getElements(className)

        if (elements == undefined) return

        for (const el of elements) {

            for (const prop in object) {
                el.style[prop] = object[prop];
            }
        }
    }



    function searchProp(className, prop) {
        const elements = getElements(className)

        if (elements == undefined) return
        
        for (const el of elements) {

            return el.style[prop];
        }
    }

    return {
        useObjectSheet,
        searchProp
    }
}

export default createCssParser;