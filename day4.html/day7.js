async function fetchData(){
    console.log("async function executed")
    const data = await fetch('https://jsonplaceholder.typecode.com/users');
}






funtionfunc fetchData(){
    console.log("fetch data called")

    let d = null;
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(function(data){
        console.log("promise success",data);
        return data.json()
    })
    .then(function(data){
        console.log("final data[0].username",data[0].username);
        let para = document.getElementById('username')
        for(let i=0; i< data.length; i++){
            let eachuser = document.createElement('h6');
            eachuser.innerHTML = "Welcome" + data[i].username

            para.appendchild(eachuser)
        } 