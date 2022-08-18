function createCssParser() {
    //cssParser = createCssParser()
    //cssParser.useObjectSheet('className', {display: none});
    //cssParser.searchProp('className', 'display') == 'none';

    function getElements(className) {
        const elements = document.querySelectorAll(className);

        if (!elements.length) {
            throw new Error(`[cssParser] Do not found any nodes with "${className}" class or id`)
        } else {
            return elements
        }
    }

    function useObjectSheet(className, object) {

        const elements = getElements(className)

        for (const el of elements) {

            for (const prop in object) {
                el.style[prop] = object[prop];
            }
        }
    }



    function searchProp(className, prop) {
        const elements = getElements(className)

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