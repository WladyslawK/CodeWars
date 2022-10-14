    //requests "GET", "https://jsonplaceholder.typicode.com/users"

    let request = new XMLHttpRequest()
    request.open("GET", "https://jsonplaceholder.typicode.com/users")
    request.send()
    request.onload = () => {
        if(request.status === 200){
            const result = JSON.parse(request.response)
            console.log(result)
            let container = document.getElementById("users")
    
            for(let i = 0; i < result.length; i++){
                const child = document.createElement("div")
                child.innerText = result[i].name
                container.appendChild(child)
            }
            //container.innerHTML = result.map(user => user.name)
        }else{
            console.log(`error ${request.status}, ${request.statusText}`)
        }
    }
    
    let fetchResult
    const fetchContainer = document.getElementById("fetch")
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        return response.json()
    }).then(data => {
        for(let i = 0; i < data.length; i++){
            const child = document.createElement("div")
            child.innerText = data[i].address.city
            fetchContainer.appendChild(child)
        }})
    
    
    async function getUsers(){
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        return data
    }
    
    
    const asyncConntainer = document.getElementById("async") 
    getUsers().then(data => {
        for(let i = 0; i < data.length; i++){
            const child = document.createElement("div")
            child.innerText = data[i].email
            asyncConntainer.appendChild(child)
        }
    })
    
        
    
    
           