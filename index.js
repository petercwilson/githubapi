'use strict';

function getUserHandle(sel) {
  fetch(`https://api.github.com/users/${sel}/repos`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson));
}

function displayResults(responseJson) {
  $('#results').empty();
  console.log(responseJson);
  for (let i=0; i < responseJson.length; i++) {
  $('#results').append(
    `<p>Repo name: ${responseJson[i].name}</p>
     <p>Repo url: ${responseJson[i].html_url}</p>
     <br /> 
    `  
  )
  }
  $('#results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let sel =  $('#userInput').val();
    getUserHandle(sel);
  });
}

$(watchForm);
