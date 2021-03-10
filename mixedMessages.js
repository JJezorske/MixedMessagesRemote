console.log('Mixed Messages Project')

const mixedMessages = {
    _names: ['Porey', 'Peachy', 'Pui', 'Pandemoni', 'Desdemona'],
    _verbs: ['adores', 'remembers', 'prefers', 'encourages', 'ignores'],
    _nouns: ['apples!', 'treats!', 'groot?', 'snacks', 'capitalism' ],
    getRandomWord(arr) {
        let num = Math.floor(Math.random ()* (arr.length))
        return arr[num]
    },
}

       

//console.log(random5(verbs))

const randomMessage = (arr1, arr2, arr3) => {
    let name = random5(arr1);
    let verb = random5(arr2);
    let noun = random5(arr3);
    return `${name} ${verb} ${noun}`
};

console.log(randomMessage(names, verbs, nouns))
//