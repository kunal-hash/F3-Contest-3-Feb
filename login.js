let email = document.getElementById("email");
let password = document.getElementById("password");
let form = document.getElementById("my-form");
let button = document.getElementById("btn");

// button.addEventListener("click",(e) =>{
//     e.preventDefault()
// })



form.addEventListener("submit",(e) =>{
    e.preventDefault();
    validate();
}) 
function validate(){
    for(let i=0; i<localStorage.length;i++){
        let data = JSON.parse(localStorage.getItem("allEntries"));
        if(email.value === data[i].email  &&  password.value === data[i].password){
           let dname= data[i].name;
           let arr =[];
           arr.push(dname)
           arr.push(email)
           arr.push(password)

           JSON.stringify(sessionStorage.setItem("arr",arr));
           console.log("login successfull");
           button.setAttribute("onclick",location.href="dashboard.html")
           
        }else if(email.value === data[i].email  ||  password.value === data[i].password){
            console.log("Wrong Credentials");
        }else{
            console.log("not a registered user");
        }
    }
    
}