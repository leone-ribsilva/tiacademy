let nomes = ['Léo', 'Rosa', 'Leone', 'Juline', 'Aline']
const vNomes = (name, newName, index) => {
    document.write(
        `A quantidade de elementos do Array é...: ${nomes.length} <br>`
    )
    document.write(
        `Você escolheu o índice...: ${index} que é ${name[index]}<br>`
    )
    document.write(`O nome ${newName} foi inserido no array <br>`)
    name.push(newName)
    document.write(
        `A quantidade de elementos do novo array é ${name.length}<br><br>`
    )
}
vNomes(nomes, '<b>Pitoka</b>', 2)
vNomes(nomes, '<b>Miúxa</b>', 3)
vNomes(nomes, '<b>Patrícia</b>', 0)
