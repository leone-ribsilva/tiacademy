let word = prompt('Digite uma palavra!')
;(function exploreWord() {
    newWord = word.toUpperCase()
    document.write(`Esta palavra tem ${word.length} caracteres <br><br>`)
    document.write(`A palavra ${word} mudou para ${newWord} <br><br>`)
    document.write(
        `A letra ${newWord[2]} é o 3º caractere da palavra ${newWord} <br><br>`
    )
    let letterChange = newWord.replace(newWord[2], 'X')
    document.write(`A palavra ${newWord} mudou para ${letterChange} <br><br>`)
})(word)
