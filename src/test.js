let first = {
    one: 1,
    two: 2,
    three: 3,
    four: 4
}

function randomise(obj){
    let keys = []
    for(let prop in obj){
        if(obj.hasOwnProperty(prop)){
            keys.push(prop)
        }
    }
    return keys[keys.length * Math.random() << 0]
}

// console.log(randomise(first))