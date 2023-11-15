
const btn = document.querySelector('#btn')
const balise = document.querySelector('#blague')
const rep = document.querySelector('#reponse')

const urlApi = 'https://v2.jokeapi.dev/joke/Any?lang=fr'


function jokeGet() {
    fetch(urlApi).then(resp => {
        if (!resp.ok) {
            throw new Error(`erreur HTTP! statut: ${resp.status}`);
        }
        return resp.json()
    }).then(data => {
        balise.innerHTML = data.setup
        console.log('Question :', data.setup)
        rep.innerHTML = data.delivery
        console.log('Reponse :', data.delivery)
    })
        .catch(error => {
            console.log(error)
        })


}



