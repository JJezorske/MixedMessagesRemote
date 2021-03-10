console.log('Mixed Messages Project')

const names = ['He', 'They', 'She', 'It', 'We']

const verbs = ['adores', 'remembers', 'prefers', 'encourages', 'ignores']

const nouns= ['apples!', 'vinegar!', 'groot?', 'people', 'capitalism' ]

const random5 = arr => {
        let num = Math.floor(Math.random ()* (arr.length))
        return arr[num]
};

//console.log(random5(verbs))

const randomMessage = (arr1, arr2, arr3) => {
    let name = random5(arr1);
    let verb = random5(arr2);
    let noun = random5(arr3);
    return `${name} ${verb} ${noun}`
};

console.log(randomMessage(names, verbs, nouns))
//