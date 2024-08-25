// Collection Functions (Arrays or Objects)


function myEach(collection, callback) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i], i, collection);
        }
    } else {
        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
                callback(collection[key], key, collection);
            }
        }
    }
    return collection;
}

function myMap(collection, callback) {
    const result = [];
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            result.push(callback(collection[i], i, collection));
        }
    } else {
        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
                result.push(callback(collection[key], key, collection));
            }
        }
    }
    return result;
}


function myReduce(collection, callback, acc) {
    let startIndex = 0;
    if (acc === undefined) {
        acc = collection[0];
        startIndex = 1;
    }
    
    if (Array.isArray(collection)) {
        for (let i = startIndex; i < collection.length; i++) {
            acc = callback(acc, collection[i], collection);
        }
    } else {
        const keys = Object.keys(collection);
        for (let i = startIndex; i < keys.length; i++) {
            acc = callback(acc, collection[keys[i]], collection);
        }
    }
    return acc;
}


function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i])) return collection[i];
        }
    } else {
        for (let key in collection) {
            if (collection.hasOwnProperty(key) && predicate(collection[key])) return collection[key];
        }
    }
    return undefined;
}


function myFilter(collection, predicate) {
    const result = [];
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i])) result.push(collection[i]);
        }
    } else {
        for (let key in collection) {
            if (collection.hasOwnProperty(key) && predicate(collection[key])) result.push(collection[key]);
        }
    }
    return result;
}

function mySize(collection) {
    if (Array.isArray(collection)) {
        return collection.length;
    } else {
        return Object.keys(collection).length;
    }
}

// Array Functions

function myFirst(array, n) {
    if (n === undefined) {
        return array[0];
    } else {
        return array.slice(0, n);
    }
}

function myLast(array, n) {
    if (n === undefined) {
        return array[array.length - 1];
    } else {
        return array.slice(-n);
    }
}

// Bonus Functions

function mySortBy(array, callback) {
    return array.slice().sort((a, b) => {
        const aValue = callback(a);
        const bValue = callback(b);
        if (aValue < bValue) return -1;
        if (aValue > bValue) return 1;
        return 0;
    });
}

function myFlatten(array, shallow = false, newArr = []) {
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            if (shallow) {
                newArr.push(...array[i]);
            } else {
                myFlatten(array[i], shallow, newArr);
            }
        } else {
            newArr.push(array[i]);
        }
    }
    return newArr;
}

// Object Functions

function myKeys(object) {
    const keys = [];
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            keys.push(key);
        }
    }
    return keys;
}

function myValues(object) {
    const values = [];
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            values.push(object[key]);
        }
    }
    return values;
}
