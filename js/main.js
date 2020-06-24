alert("Boa navegação")



function mudarBotaoDeMostrar(botaoPraMostrar, botaoPraEsconder){
    console.log(botaoPraMostrar, botaoPraEsconder)
    botaoPraMostrar.style.display="block";
    botaoPraEsconder.style.display="none";
}

function verMais(){
    let botaoVerMais = document.getElementById("btn-ver-mais");
    let botaoVerMenos = document.getElementById("btn-ver-menos");

    document.getElementById("mostrarMais").innerHTML =
          `<a href="https://meusanimes.com/assistir-gratis/fullmetal-alchemist-dublado-online" target="_blank">
          Full Metal Alchemist <br> </a>
          <a href="https://meusanimes.com/assistir-gratis/nanatsu-no-taizai-online" target="_blank">
          Nanatsu no Taizai </a><br>
          <a href="https://meusanimes.com/assistir-anime/naruto-shippuden-episodios-legendado-online" target="_blank"> 
          Naruto <br> </a>
          <a href="https://www.superanimes.org/anime/noragami" target="_blank">
          Noragami <br> </a>
          <a href="https://meusanimes.com/assistir-anime/one-piece-online-hd" target="_blank">
          One Piece <br> </a>
          <a href="https://meusanimes.com/assistir-gratis/one-punch-man-online" target="_blank">
          One Punch Man <br> </a>
          <a href="https://www.superanimes.org/cartoon/samurai-jack" target="_blank">
          Samurai Jack <br> </a>
          <a href="https://meusanimes.com/assistir-gratis/samurai-x-dublado-online" target="_blank">
          Samurai x <br> </a>
          <a href="https://meusanimes.com/assistir-gratis/shingeki-no-kyojin-online" target="_blank">
          Shingeki no Kyojin <br> </a> 
          <a href="https://meusanimes.com/assistir-gratis/shigatsu-wa-kimi-no-uso" target="_blank">
          Shigastu wa kimi no uso </a><br   
          <a href="https://meusanimes.com/assistir-gratis/pokemon-2019-online" target="_blank">
          Pokemon </a><br> 

          `;
    
    mudarBotaoDeMostrar(botaoVerMenos, botaoVerMais);
}

function verMenos(){
    let botaoVerMais = document.getElementById("btn-ver-mais");
    let botaoVerMenos = document.getElementById("btn-ver-menos");

    document.getElementById("mostrarMais").innerHTML = ``;
    mudarBotaoDeMostrar(botaoVerMais, botaoVerMenos);
}


   if (document.getElementById("meusAnimes") < 1) {
      document.getElementById("meusAnimesConteudo").innerHTML = "Você ainda não possui nenhum anime";
   }