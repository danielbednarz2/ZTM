// flat - Array method
const array = [1,2,3,4,5];
const array2 = [1,[2,3],[4,5]]
const array3 = [1, 2, [3, 4, [5]]]

array.flat();
array2.flat();
array3.flat(2);

// trimStart() and trimEnd() - String methods

// fromEntries

userProfiles = [
    ["commanderTom", 23], 
    ["derekZlander", 40], 
    ["hansel", 30]
]

Object.fromEntries(userProfiles);

// try catch update - don't have to pass error argument into catch