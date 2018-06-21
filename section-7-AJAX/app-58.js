document.getElementById('button').addEventListener('click', loadData)

function loadData() {
  // create an XHR object
  const xhr = new XMLHttpRequest()

  // console.log(xhr)

  // open
  xhr.open('GET', 'data.txt', true)

  // console.log('READYSTATE: ', xhr.readyState)

  // optional - good for loader animations:
  xhr.onprogress = function() {
    console.log('onprogress READYSTATE: ', xhr.readyState)
  }
  const UIoutput = document.getElementById('output')
  xhr.onload = function() {
    if(this.status === 200) {
      // console.log(this.responseText)
      // UIoutput.textContent = this.responseText
      UIoutput.innerHTML = `<h2>${this.responseText}</h2>`
    }
  }

  // the old way
  // xhr.onreadystatechange = function() {
  //   console.log('READYSTATE: ', xhr.readyState)
  //   if(this.status === 200 && this.readyState === 4) {
  //     console.log(this.responseText);
  //   }
  // }

  xhr.onerror = function() {
    console.log('request error')
  }

  xhr.send()
}