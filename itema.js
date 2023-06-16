
console.log('item a')
fetch('https://reqres.in/api/users') .then(response => response.json()) .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('comportamento inesperado:', error);
  });

  
