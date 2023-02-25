    let form = document.getElementById("my-form");
    let Name = document.getElementById("name");
    let Email = document.getElementById("email");
    let Password = document.getElementById("password");
    let Confpass = document.getElementById("conf-pass");
    let button = document.getElementById("btn");
    


form.addEventListener("submit",(e) =>{
    e.preventDefault();
    validate();

})  

// const validate = () =>{
//     const NameVal = Name.value.trim();
//     const EmailVal = Email.value.trim();
//     const PasswordVal = Password.value.trim();
//     const ConfpassVal = Confpass.value.trim();  
    
//     if(NameVal == ""){
//         document.getElementById("namemsg").innerHTML="Name couldn't be blank"
//     }
// }

button.addEventListener("click",submit)

function submit(){
    
    var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
    if(existingEntries == null) existingEntries = [];
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var entry = {
        "name": name,
        "email": email,
        "password":password
    };

    // Save allEntries back to local storage
    existingEntries.push(entry);
    localStorage.setItem("allEntries", JSON.stringify(existingEntries));
    location.reload()
};
    