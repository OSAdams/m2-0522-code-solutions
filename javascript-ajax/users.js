const userList = document.querySelector('#user-list');

function getUserList() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.responseType = 'json';
  xhr.addEventListener('load', () => {
    console.log(xhr.status);
    console.log(xhr.response);
    for (let i = 0; i < xhr.response.length; i++) {
      const newListItem = document.createElement('li');
      newListItem.textContent = xhr.response[i].name;
      userList.appendChild(newListItem);
    }
  });
  xhr.send();
}

getUserList();

function testApi(ingredient) {
  const xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  xhr.open('GET', 'https://api.edamam.com/api/recipes/v2?type=public&q=' +
  ingredient +
  '&app_id=0093790f&app_key=%20fc94d61c591a75f0d99c9e4c9c7c7397&health=vegan&imageSize=SMALL');
  xhr.responseType = 'json';
  xhr.addEventListener('load', () => {
    console.log(xhr.status);
    console.log(xhr.response);
  });
  xhr.send();
}

testApi('tofu');

function testApiTwo(ingredient) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.spoonacular.com/recipes/716429/information?apiKey=633237cc8f324710afa989c4ba9993f0&includeNutrition=true');
  xhr.responseType = 'json';
  xhr.addEventListener('load', () => {
    console.log(xhr.status);
    console.log(xhr.response);
  });
  xhr.send();
}

testApiTwo('pasta');

// Note to self: work on strictly vegan results with API

// set window hash so user can hit back button in browser
// home icon in header for easy navitation
