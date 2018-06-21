document.getElementById('get-jokes').addEventListener('click', getJokes)

function getJokes(e) {
  const number = document.querySelector('input[type="number"]').value
  const UIjokes = document.getElementById('jokes')

  const xhr = new XMLHttpRequest()

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true)

  xhr.onload = function() {
    if(this.status === 200) {
      let jokes = JSON.parse(this.responseText).value
      jokes.forEach(function(joke) {
        UIjokes.innerHTML += `
        <li>Joke ${joke["id"]}: ${joke["joke"]}</li>`
        console.log(joke["joke"])
      })
    }
  }

  xhr.send()

  

  e.preventDefault();  
}