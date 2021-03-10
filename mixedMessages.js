console.log('Mixed Messages Project')

const pronouns = ['I', 'He', 'She', 'It', 'We']

const verbs = ['like', 'hate', 'prefer', 'encourage', 'ignore']

const nouns= ['apples!', 'vinegar!', 'groot?', 'people', 'capitalism' ]

const random5 = arr => {
        let num = Math.floor(Math.random ()* 5)
        return arr[num]
};

console.log(random5(verbs))

const randomPronoun = () => {
    for (let i = 0; i < pronouns.length; i++) {
        console.log(pronouns[i])
    }
};
//