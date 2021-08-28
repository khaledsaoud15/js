const distentElement = (set1,set2) =>{
    let sum = 0
    set1.map(s1 =>{
        if(!set2.includes(s1)) sum += s1
    })
    set2.map(s2 =>{
        if(!set1.includes(s2)) sum += s2
    })
    return sum
}

console.log(distentElement([3,1,7,9], [2,4,1,9,3]))