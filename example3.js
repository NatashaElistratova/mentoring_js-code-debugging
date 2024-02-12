const obj1 = { 
    a: 'test', 
    b: { 
        c: 1, 
        d: { e: 2 } 
    } 
};

const obj2 = { 
    a: 'test', 
    b: 1,
    c: null, 
};

const getNestedProperty = (obj) => {
    return obj.b.d.e;
}

console.log(getNestedProperty(obj1));
console.log(getNestedProperty(obj2));