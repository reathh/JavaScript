function traverse(selector) {
    var selectorElement = document.querySelector(selector);

    if (selectorElement == null) {
        console.log("No element found with this selector");
        return;
    }
    if (selectorElement.children.length == 0) {
        console.log("Element doesn't have child elements");
        return;
    }

    traverseElement(selectorElement.children[0], 2);

    function traverseElement(element, spacing) {
        var tagName = element.tagName.toLowerCase();
        var id = element.id == "" ? "" : 'id="' + element.id + '" ';
        var className = element.className == "" ? "" : 'class="' + element.className + '"';
        console.log(Array(spacing).join("   ") + tagName + ": " + id + className);

        if (element.children.length > 0) {
            traverseElement(element.children[0], ++spacing);
        }
        else {
            if (element.nextElementSibling != null) {
                traverseElement(element.nextElementSibling, spacing);
            }
            else {
                if (element.parentNode == selectorElement) {
                    return;
                }

                var parentElement = element;
                while (parentElement.parentNode.nextElementSibling == null) {

                    parentElement = parentElement.parentNode;
                    --spacing;

                    if (parentElement.parentNode == selectorElement) {
                        return;
                    }
                }
                traverseElement(parentElement.parentNode.nextElementSibling, --spacing);
            }
        }
    }
}
var whatToTraverse = ".birds";
console.log("Traversing " + whatToTraverse);
traverse(whatToTraverse);