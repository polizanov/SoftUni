function loadRepos() {
   fetch('https://api.github.com/users/testnakov/repos')
      .then(res => res.json())
      .then(data => {
         document.getElementById("res").textContent = JSON.stringify(data);
      })
      
}