const cartaz = (data) =>{
    let dadosFilmes = JSON.parse(data.target.response)
    localStorage.setItem ('db_filmes', data.target.response);
    let dadosHTML = '';
    for (let i = 0; i < dadosFilmes.results.length; i++) {
        let filme = dadosFilmes.results[i];
        dadosHTML += `
        <div class="card col-4">
        <img src="https://image.tmdb.org/t/p/w500${filme.poster_path}" class="card-img-top" alt="">
        <div class="card-body">
            <h5 class="card-title">${filme.title}</h5>
            <p class="card-text">${filme.overview}</p>
            <h5>AVALIAÇÃO</h5>
            <a href="/Destaques/destaques.html?id=${filme.id}" class="btn btn-primary">Veja Mais . . .</a>
        </div>
    </div>
        `
    }
    document.getElementById('divListaFilmes').innerHTML = dadosHTML
}
const mostraErro = (data) => {
    alert('Deu erro na página');
}
const init = () => {
    let xhr = new XMLHttpRequest ();
    let url = "https://api.themoviedb.org/3/movie/popular?api_key=167b98fe9cb6efee30f0e73ed92b80df&language=pt-BR"
    xhr.onload = cartaz;
    xhr.onerror = mostraErro;
    xhr.open ('GET', url, true);
    xhr.send ();
}
document.body.onload = init