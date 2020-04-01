export default class Stepan {
    static createElement(element, parent, attributes = {}) {
        // TODO: check if this is a valid tag name

        const newElement = document.createElement(element);

        if (newElement.toString() === "[object HTMLUnknownElement]") {
            throw new StepanError("Tag name is invalid");
        }
        const {innerHTML, innerText, checked} = attributes;

        for (let attribute in attributes) {
            if (['innerHTML', 'innerText', 'checked'].includes(attribute)) {
                continue;
            }

            newElement.setAttribute(attribute, attributes[attribute]);
        }

        innerHTML && (newElement.innerHTML = innerHTML);
        innerText && (newElement.innerText = innerText);
        checked && (newElement.checked = checked);

        parent.appendChild(newElement);

        return newElement;
    }

    static Component = class {
        constructor(parent) {
            // TODO: 1. Create StepanError class to define all framework errors
            //       2. throw an error if parent is null or undefined, or if it's not a valid DOM object
            if (parent == null) {
                throw new StepanError("Parent tag is null");
            } else if (parent.toString() === "[object HTMLUnknownElement]") {
                throw new StepanError("Tag name is invalid");

            } else {
                this.parent = parent;
            }
        }

        // TODO (Bonus): Ensure that every component returns a top-level root element
    }
}

class StepanError extends Error {
    constructor(message) {
        super(message);
        this.name = "StepanError";
    }
}