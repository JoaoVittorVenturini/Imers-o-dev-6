const listaFilmes = [
  "https://upload.wikimedia.org/wikipedia/pt/1/14/Spide-Man_Poster.jpg",
  "https://m.media-amazon.com/images/M/MV5BMzY2ODk4NmUtOTVmNi00ZTdkLTlmOWYtMmE2OWVhNTU2OTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/thumb/3/37/Spider-Man_3.jpg/250px-Spider-Man_3.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/thumb/5/53/The_Amazing_Spider-Man_Poster.jpg/233px-The_Amazing_Spider-Man_Poster.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/e/eb/The_Amazing_Spider-Man_2.jpg",
  "https://musicart.xboxlive.com/7/94fc5000-0000-0000-0000-000000000002/504/image.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/thumb/8/87/Spider-Man_Homecoming.png/250px-Spider-Man_Homecoming.png",
  "https://upload.wikimedia.org/wikipedia/pt/thumb/0/04/Spider-man-far-from-home-poster.jpg/250px-Spider-man-far-from-home-poster.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/thumb/0/00/Spider-Man_No_Way_Home_poster.jpg/250px-Spider-Man_No_Way_Home_poster.jpg"
]
const nomeFilmes = [
  "Homem-Aranha",
  "Homem-Aranha 2",
  "Homem-Aranha 3",
  "O espetacular Homem-Aranha",
  "O espetacular Homem-Aranha 2",
  "Homem-Aranha no Aranhaverso",
  "Homem-Aranha: De Volta ao Lar",
  "Homem-Aranha: Longe de Casa",
  "Homem-Aranha: Sem Volta para Casa"
]

for (var i = 0; i < listaFilmes.length; i++){
  document.write("<p class'filme'> <img src=" + listaFilmes[i] + ">" + nomeFilmes[i] + "</p>")
}

// transformar o For() em 
// do{ }while() 
// while(){}
// foreach

// aceitar apenas links terminados em .jpg

// mostrar o filme e o link do filme

// condicao para nao reptir filmes

// criar inputs para colocar filmes pelo proprio site