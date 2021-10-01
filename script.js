let container1 = document.getElementById('container1');
let container2 = document.getElementById('container2');
let input = document.getElementById('input');
let searchButton = document.getElementById('search');

searchButton.addEventListener('click', gitHubRepos)

async function gitHubRepos() {
    try {
        let user = input.value;
        const response = await fetch(`https://api.github.com/users/${user}/repos`);
        const data = await response.json();
        console.log(data);
        repoDetails(data);
    }
    catch(err) {
        console.log(err, 'Cannot fetch data');
    }
}

const repoDetails = (repoData) => {
       const output = repoData.map((element) => {
       return `<div class='box'>
        <div> Repo Name: ${element.name}</div>
        <div> Language: ${element.language}</div>
        <div> Forks Count: ${element.forks_count}</div>
        <div> Star Count: ${element.stargazers_count}</div>
        <div> Repo Name: ${element.html_url}</div>
        </div>`
       }) 
    container2.innerHTML = output;
}