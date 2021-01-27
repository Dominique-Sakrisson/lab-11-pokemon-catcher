export function makeSeenArray(arrayOfObjects){
    const seenArray = [];
    
    for(let item of arrayOfObjects){
        seenArray.push(item.seen);
    }
    
    return seenArray;
}

export function makeCaughtArray(arrayOfObjects){
    const caughtArray = [];

    for(let item of arrayOfObjects){
        caughtArray.push(item.caught);
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

export function makeHpArray(arrayOfObjects){
    //initiate height array
    const heightArray = [];
    // create empty array for objects
    let orderObj = [];
    
    for (let i = 0; i <arrayOfObjects.length; i++){
        if(arrayOfObjects[i].caught){
            let currentObj= {
                hp: arrayOfObjects[i].hp,
                name: arrayOfObjects[i].name,
            };
            orderObj.push(currentObj);
        }
    }
    //some codey sort method magic
    orderObj.sort((a,b) => (a.hp > b.hp) ? 1 : -1);
  
    //end up with an array of objects where each index has the matching hp and name
    //sorted from lowest to highest by its hp
    const sortedNames = [];
    for(let i =0; i < orderObj.length; i++){
        let currentName = orderObj[i].name;
        sortedNames.push(currentName);
    }
    //search through name array
    //if an element of name array matches heightArray[i]
    //return the index of that name in nameArray
    //make a new array where that name is the first index. and repeat
    //const nameArray =  makeNameArray(arrayOfObjects);
    
    for(let i=0; i < heightArray.length; i++){
      let elToAdd = orderObj[i].name;
      sortedNames.push(elToAdd);
    }

    const results = [sortedNames, orderObj];
    //console.log('sorted names' + sortedNames + ' sorted hp' + orderObj[1].hp);
    return JSON.stringify(orderObj);
}

//lets do some more munging on different set types of data!!
export function makeHeightArray(arrayOfObjects){
    
    const heightArray = [];
    for (let i = 0; i <arrayOfObjects.length; i++){
        heightArray.push(arrayOfObjects[i].height);
    }

    return heightArray;
}

export function makeWeightArray(arrayOfObjects){
    
    const weightArray = [];

    for (let i = 0; i <arrayOfObjects.length; i++){
        weightArray.push(arrayOfObjects[i].weight);
    }
    

    return weightArray;
}