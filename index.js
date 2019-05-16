'use strict';

function getUserHandle(sel) {
  fetch(`https://api.github.com/users/${sel}/repos`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson));
}

function displayResults(responseJson) {
  $('#results').empty();
  console.log(responseJson);
  $('#results').html(
    `<p>${responseJson.name}"</p>
     <p>${responseJson.html_url}"</p> 
    `  
  )
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
