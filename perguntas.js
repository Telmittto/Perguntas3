fetch('https://pastebin.com/raw/bp3XtfZz')
  .then(response => response.text())
  .then(text => {
    const perguntas = text.split('\n');
    const perguntaAleatoria = perguntas[Math.floor(Math.random() * perguntas.length)];
    console.log(perguntaAleatoria);
  });