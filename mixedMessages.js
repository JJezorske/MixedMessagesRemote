console.log('Mixed Messages Project')

const names = ['Lopez', 'Peggy', 'Canberra', 'Apple', 'Kiki']

const verbs = ['adores', 'remembers', 'prefers', 'encourages', 'ignores']

const nouns= ['apples!', 'vinegar!', 'groot?', 'BELLS!', 'capitalism' ]

const random5 = arr => {
        let num = Math.floor(Math.random ()* (arr.length))
        return arr[num]
};

const randomMessage = (arr1, arr2, arr3) => {
    let name = random5(arr1);
    let verb = random5(arr2);
    let noun = random5(arr3);
    return `${name} ${verb} ${noun}`
};


document.getElementById("btn").addEventListener("click", function (){
    document.getElementById("output").innerHTML = randomMessage(names, verbs, nouns)
});