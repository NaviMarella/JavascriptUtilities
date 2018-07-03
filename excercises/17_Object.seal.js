/*
The Object.seal() method seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable. Values of present properties can still be changed as long as they are writable.
Syntax:-
Object.seal(obj)

Return value:
Returns the reference of the object.

Attempting to delete or add properties to a sealed object, or to convert a data property to accessor
or vice versa, will fail, either silently or by throwing a TypeError (most commonly, although not exclusively, when in strict mode code).


Note:- The prototype chain remains untouched. However, the __proto__  property is sealed as well.
*/

// Example 1

//Seal an object to prevent the age property from being added.

const sealedObject = {
    name: 'Navs'
}

var newObj = Object.seal(sealedObject);

sealedObject.name = 'Vin';
sealedObject.age = 18;
// sealedObject will be equal to { name: 'Vin' }

newObj === sealedObject // true
Objec.isSealed(sealedObject) // true

// Allows to modify existing property on sealed object
sealedObject.name = 'Ronaldo'

// Doesn't allow to add a new property
sealedObject.isVisible = true;

// Doesnt allow to delete exisitng property
delete sealedObject.name;



/*
   Import take away -- freeze() vs seal()

   Existing properties in objects frozen with Object.freeze() are made immutable.
   Objects sealed with Object.seal() can have their existing properties changed.
 */