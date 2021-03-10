console.log('Mixed Messages Project')


const mixedMessages = {
    _names: ['Porey', 'Peachy', 'Pui', 'Pandemoni', 'Desdemona'],
    _verbs: ['adores', 'remembers', 'prefers', 'encourages', 'ignores'],
    _nouns: ['apples!', 'treats!', 'groot?', 'snacks', 'capitalism' ],
    getRandomWord(arr) {
        let num = Math.floor(Math.random ()* (arr.length))
        return arr[num]
    },
    generateMessage() {
        const name = this.getRandomWord(this._names)
        const verb = this.getRandomWord(this._verbs)
        const noun = this.getRandomWord(this._nouns)
        return `${name} ${verb} ${noun}`
    },
};


  document.getElementById("btn").addEventListener("click", function (){
    document.getElementById("output").innerHTML =  mixedMessages.generateMessage()
});