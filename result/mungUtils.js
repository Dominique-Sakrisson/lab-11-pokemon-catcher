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
    
    caughtArray.sort();
    return caughtArray.reverse();
}

export function makeNameArray(arrayOfObjects){
    
    const nameArray = [];
    for (let i = 0; i <arrayOfObjects.length; i++){
        nameArray.push(arrayOfObjects[i].name);
    }
    
    return nameArray;
}

//lets do some more munging on different set types of data!!
export function makeHpArray(arrayOfObjects){
    
    const hpArray = [];
    for (let i = 0; i <arrayOfObjects.length; i++){
        hpArray.push(arrayOfObjects[i].hp);
    }
    

    return hpArray;
}

export function makeWeightArray(arrayOfObjects){
    
    const weightArray = [];
    for (let i = 0; i <arrayOfObjects.length; i++){
        weightArray.push(arrayOfObjects[i].hp);
    }
    weightArray.sort();

    return weightArray.reverse();
}
export function makeHeightArray(arrayOfObjects){
    //initiate height array
    const heightArray = [];

    let orderObj = [];
    //create object to extract name and hp from
    for (let i = 0; i <arrayOfObjects.length; i++){
        let currentObj= {
            hp: arrayOfObjects[i].hp,
            name: arrayOfObjects[i].name,
        };
        orderObj.push(currentObj);
    }


    orderObj.sort((a,b) => (a.hp > b.hp) ? 1 : -1);
    console.log(orderObj);
    //search through name array
    //if an element of name array matches heightArray[i]
    //return the index of that name in nameArray
    //make a new array where that name is the first index. and repeat
    const nameArray =  makeNameArray(arrayOfObjects);
    const sortedNames= [];
    

    for(let i=0; i < heightArray.length; i++){
      let elToAdd = orderObj[i].name;
      console.log(elToAdd);
      sortedNames.push(elToAdd);
    
    }
    console.log('sorted names' + sortedNames + ' sorted hp' + orderObj.hp);
    return heightArray.reverse();
}