// Add your code here
function submitData(userName,userEmail){
    const userData={
        name:userName,
        email:userEmail
    };
    const configObj={
        method:`POST`,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
        body:JSON.stringify(userData)
    };
    return fetch(`http://localhost:3000/users`,configObj)
        .then(response=>response.json())
        .then(data=>{
            const id=data.id
            document.body.innerHTML+=`<p>${id}</p>`;
        })
    .catch(error=>{
        document.body.innerHTML += `<p>${error.message}</p>`;
    });

}