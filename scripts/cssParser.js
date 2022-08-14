function createCssParser() {
    //cssParser = createCssParser()
    //cssParser.useObjectSheet('className', {display: none});
    //cssParser.searchProp('className', 'display') == 'none';

    function filterElement(susClassElement) {
        let clearElement;

        if (typeof susClassElement === 'string') {
            clearElement = document.querySelector(susClassElement);

            if(!clearElement) {throw new Error(`[cssParser]"${susClassElement}" is not a ClassName or a Id`)};

        } else if (typeof susClassElement === 'object') {
            clearElement = susClassElement;

            if(!clearElement.nodeType) {throw new Error(`[cssParser] "${clearElement.nodeType}" is Not a Node object`)}

        } else {
            throw new Error(`[cssParser] "${typeof susClassElement }" is not an acceptable type of parameter`);
        }

        return clearElement;
    }

    function useObjectSheet(classElement, object) {
        const el = filterElement(classElement);

        for (const prop in object) {
            el.style[prop] = object[prop];
        }
    }

    function searchProp(classElement, prop) {
        const el = filterElement(classElement);

        return el.style[prop];
    }

    return {
        useObjectSheet,
        searchProp
    }
}

export default createCssParser;