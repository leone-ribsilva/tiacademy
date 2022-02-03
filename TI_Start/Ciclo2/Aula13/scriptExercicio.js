function word() {
    let word = prompt('Digite uma palavra!')
    for (let i = word.length - 1; i >= 0; i--) {
        console.log(word[i])
    }
}
word()
