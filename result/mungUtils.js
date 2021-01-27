export function makeSeenArray(arrayOfObjects){
    const seenArray = [];
    
    for (let i = 0; i <arrayOfObjects.length; i++){
        seenArray.push(arrayOfObjects[i].seen);
    }
    
    return seenArray;
}

export function makeCaughtArray(arrayOfObjects){
    const caughtArray = [];
    
    for (let i = 0; i <arrayOfObjects.length; i++){
        caughtArray.push(arrayOfObjects[i].caught);
    }
    
    return caughtArray;
}

export function makeNameArray(arrayOfObjects){
    
    const nameArray = [];
    for (let i = 0; i <arrayOfObjects.length; i++){
        nameArray.push(arrayOfObjects[i].name);
    }
    
    return nameArray;
}

//lets do some more munging on different set types of data!!
