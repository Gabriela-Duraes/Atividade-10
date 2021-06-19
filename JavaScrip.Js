let header = document.querySelector('header');
header.innerHTML = '<h1>Atividade 10</h1>';
let main = document.querySelector('main');
main.innerHTML = '<article> <h1Livros que recomendo para amantes da leitura</h1> <p>Livros mencionados:</p> <ul><li><a href="Tkod">The kiss of deception</a></li> <li><a href="#Dot">Dynasty of thieves</a></li> <li><a href="#Soc">Six of Crows</a></li></ul> <br><br><br><br> <h3>The kiss of deception</h3> <p>A força feminina é a grande estrela neste romance de Mary E. Pearson.Tudo parecia perfeito, um verdadeiro conto de fadas – menos para a protagonista dessa história. Morrighan é um reino imerso em tradições, histórias e deveres, e a Primeira Filha da Casa Real, uma garota de 17 anos chamada Lia, decidiu fugir de um casamento arranjado que supostamente selaria a paz entre dois reinos através de uma aliança política. O jovem príncipe escolhido se vê então obrigado a atravessar o continente para encontrá-la a qualquer custo. Mas essa se torna também a missão de um temido assassino. Quem a encontrará primeiro?</p> <img src="LivroThekissofdecepcion.png" id="foto1"/> <button onclick="clicouNoBotaoTkod()">1</button> <button onclick="clicouNoBotaoTkod()">2</button> <button onclick="clicouNoBotaoTkod()">3</button> </article>  <br><br><br><br> <div> <h3>Dynasty of thieves</h3> <p>Dance of Thieves é o primeiro livro de uma duologia e também é um spin off da  trilogia As Crônicas e Ódio, publicado também pela DarksideBooks. A história de Dance of Thieves se passa anos após os acontecimentos da trilogia e seguem um rumo diferente, com personagens também diferentes. Na trilogia acompanhamos a história de uma princesa, e  aqui acompanhamos a história de uma ex ladra e agora uma soldada chamada Kazi, enviada pela rainha de Venda, para verificar algumas ocorrências na Boca do Inferno.</p><img src="Dot.jpg" id="foto2"/> <button onclick="clicouNoBotaoDot()">1</button> <button onclick="clicouNoBotaoDot()">2</button> <button onclick="clicouNoBotaoDot()">3</button> </div></div> <section> <br><br><br><br> <h3>Six of Crows</h3> <p>Seis criminosos, um alvo. Uma recompensa imensurável em troca do resgate de um prisioneiro numa das mais fortificadas prisões de todo aquele mundo. Uma chance de começar de novo para cada um deles, e uma oportunidade de deixar suas marcas na história como foras da lei implacáveis. Six of Crows é a história sobre um grupo de criminosos tentando salvar o seu mundo.</p> <img src="Soc.jpg" id="foto3"/> <button onclick="clicouNoBotaoSoc()">1</button> <button onclick="clicouNoBotaoSoc()">2</button> <button onclick="clicouNoBotaoSoc()">3</button><br><br><br><br></section>'
let article = document.querySelector('article');
article.id = "Tkod";

let div = document.querySelector('div');
div.id = "Dot";

let section = document.querySelector('section');
section.id = "Soc";

let img1 = document.querySelector('img#foto1');
let imagemAtual=0;

function clicouNoBotaoTkod () {
    if (imagemAtual === 0) {
        img1.src="LivroThekissofdecepcion.png";
        imagemAtual = 1;
    } else if (imagemAtual === 1) {
        img1.src="tkod.jpg";
        imagemAtual = 2;
    } else {
        img1.src="Tkod2.jpg";
        imagemAtual = 0;
    }
}

let img2 = document.querySelector('img#foto2');

function clicouNoBotaoDot () {
    if (imagemAtual === 0) {
        img2.src="Dot.jpg";
        imagemAtual = 1;
    } else if (imagemAtual === 1) {
        img2.src="Dot2.jpg";
        imagemAtual = 2;
    } else {
        img2.src="Dot3.jpg";
        imagemAtual = 0;
    }
}

let img3 = document.querySelector('img#foto3');

function clicouNoBotaoSoc () {
    if (imagemAtual === 0) {
        img3.src="Soc.jpeg";
        imagemAtual = 1;
    } else if (imagemAtual === 1) {
        img3.src="Soc.jpg";
        imagemAtual = 2;
    } else {
        img3.src="Soc.jpg";
        imagemAtual = 0;
    }
}