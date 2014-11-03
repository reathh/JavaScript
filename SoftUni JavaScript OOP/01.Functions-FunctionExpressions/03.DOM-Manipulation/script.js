var domModule = (function domModule(){

    function AppendChild(elementToAdd) {
        var elementToBeAddedTo = document.querySelector(arguments[1]);
        elementToBeAddedTo.appendChild(elementToAdd);
    }

    function RemoveChild(elementFromWhichToRemove, elementToRemove) {
        elementFromWhichToRemove = document.querySelector(arguments[0]);
        elementToRemove = document.querySelector(arguments[1]);
        elementFromWhichToRemove.removeChild(elementToRemove);
    }

    function AddHandler(elements, event, expression) {
        elements = document.querySelectorAll(arguments[0]);

        [].forEach.call(elements,function(element) {
            element.addEventListener(event, expression);
        });
    }

    function RetrieveElements(query) {
        var elements = document.querySelectorAll(query);
        return elements;
    }

    return {
        appendChild: AppendChild,
        removeChild: RemoveChild,
        addHandler: AddHandler,
        retrieveElements: RetrieveElements
    }
})();

//Tests from .doc

var liElement = document.createElement("li");
liElement.innerHTML = "Automatically generated li";
// Appends a list item to ul.birds-list
domModule.appendChild(liElement,".birds-list");
// Removes the first li child from the bird list
domModule.removeChild("ul.birds-list","li:first-child");
// Adds a click event to all bird list items
domModule.addHandler("li.bird", 'click', function(){ alert(this.innerHTML) });
// Retrives all elements of class "bird"
var elements = domModule.retrieveElements(".bird");
console.log(elements);