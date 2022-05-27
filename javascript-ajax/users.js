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
