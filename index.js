// primeiro precisamos criar o app usando o express
const express = require("express")
const app = express()

//premitir aceitar json na requisição
app.use(express.json())

const filmes = [
    {
        id: 1,
        title: "F1: O filme",
        genre: "Drama",
        image: "https://www.apple.com/br/tv-pr/shows-and-films/f/f1/images/show-home-graphic-header/key-art-03/4x1/Apple_TV_F1_key_art_graphic_header_4_1_show_home.jpg",
        releaseYear: 2025,
        description: "F1 (2025) é um drama de ação sobre Sonny Hayes (Brad Pitt), um ex-piloto dos anos 90 que retorna à Fórmula 1 para ser mentor de um jovem novato, Joshua Pearce, na equipe fictícia APXGP"
    }
]

const series = [
    {
        id: 1,
        title: "The Witcher",
        genre: "Fantasia",
        image: "https://scifibr.wordpress.com/wp-content/uploads/2020/11/the-witcher-s-2-banner.jpg",
        releaseYear: 2019,
        description: "The Withcher narra a história de Geralt de Rívia, um bruxo mutante e mercenário que caça monstros por dinheiro em um mundo de fantasia sombria"
    }
]

///////////////////////////////////  filmes  /////////////////////////////////////////////////////////////////////////////////

//retorna todos os filmes
app.get("/filmes", (req, res) => {
    return res.json(filmes)
})

//filtra seires por generos
app.get("/filmes", function (req, res) {
    const genre = req.query.genre

    // Se não passar query param, retorna todos
    // "!" se algo for falso, realiza a função do if
    if (!genre) {
        return res.json(filmes)
    }

    const filmesFiltrados = filmes.filter(a => a.genre.toLowerCase().includes(genre.toLowerCase())
    )

    res.json(filmesFiltrados)
})

//cria um novo filme com base nas informações
app.post("/filmes", function (req, res) {
    const titleDoNavegador = req.body.title
    const genreDoNavgeador = req.body.genre
    const imageDoNavegador = req.body.image
    const releaseYearDoNavgeador = req.body.releaseYear
    const descriptionDoNavegador = req.body.description


    if (!titleDoNavegador || !genreDoNavgeador || !imageDoNavegador || !releaseYearDoNavgeador || !descriptionDoNavegador) {
        return res.status(400).json({ erro: "Título, gênero, URL, ano de lançamento ou descrição inválidos" })
    }

    if (titleDoNavegador.lenght <= 1) {
        return res.status(400).json({ erro: "Título deve ter mais que 1 caracter" })
    }

    // criando objeto novo com as informações que vieram do cliente
    const novoFilme = {
        id: 2,
        title: titleDoNavegador,
        genre: genreDoNavgeador,
        image: imageDoNavegador,
        releaseYear: releaseYearDoNavgeador,
        description: descriptionDoNavegador
    }
    //adiciona o novo filme no final da lista
    filmes.push(novoFilme)
    res.status(201).send()
})

//buscar filme por id
app.get("/filmes/:id", function (req, res) {
    const id = parseInt(req.params.id) //transforma a requisisão (id) em número

    const filme = filmes.find(a => a.id == id)

    //if de validação verdadeiro ou falso
    //se a variável for nula é igual falso
    //se tiver alguma coisa é verdadeiro
    if (filme) {
        return res.json(filme)
    } else {
        res.status(404).json("Filme não encontrado")
    }

})

///////////////////////////////////  series  /////////////////////////////////////////////////////////////////////////////////

//retorna todas as series
//filtra series por genero
app.get("/series", function (req, res) {
    const genre = req.query.genre

    // Se não passar query param, retorna todos
    // "!" se algo for falso, realiza a função do if
    if (!genre) {
        return res.json(series)
    }

    if (titleDoNavegador.lenght <= 1) {
        return res.status(400).json({ erro: "Título deve ter mais que 1 caracter" })
    }

    const seriesFiltrados = series.filter(a => a.genre.toLowerCase().includes(genre.toLowerCase())
    )

    res.json(seriesFiltrados)
})

//cria uma nova serie com base nas informações
app.post("/series", function (req, res) {
    const titleDoNavegador = req.body.title
    const genreDoNavgeador = req.body.genre
    const imageDoNavegador = req.body.image
    const releaseYearDoNavgeador = req.body.releaseYear
    const descriptionDoNavegador = req.body.description


    if (!titleDoNavegador || !genreDoNavgeador || !imageDoNavegador || !releaseYearDoNavgeador || !descriptionDoNavegador) {
        return res.status(400).json({ erro: "Título, gênero, URL, ano de lançamento ou descrição inválidos" })
    }

    // criando objeto novo com as informações que vieram do cliente
    const novaSerie = {
        id: 2,
        title: titleDoNavegador,
        genre: genreDoNavgeador,
        image: imageDoNavegador,
        releaseYear: releaseYearDoNavgeador,
        description: descriptionDoNavegador
    }
    //adiciona a nova serie no final da lista
    filmes.push(novaSerie)
    res.status(201).send()
})

//buscar serie por id
app.get("/series/:id", function (req, res) {
    const id = parseInt(req.params.id) //transforma a requisisão (id) em número

    const serie = series.find(a => a.id == id)

    //if de validação verdadeiro ou falso
    //se a variável for nula é igual falso
    //se tiver alguma coisa é verdadeiro
    if (serie) {
        return res.json(serie)
    } else {
        res.status(404).json("Serie não encontrada")
    }

})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//segundo passo, colocar o servidor para rodar
app.listen(3000, () => {
    console.log("Servidor rodando em https://localhost:3000")
})