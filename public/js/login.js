//const cad = document.querySelector("#cadastrar");
const login = document.querySelector("#login")
/*cad.addEventListener("submit", async (event) => {
    event.preventDefault();
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;


    if(!nome || !email || !pass){

        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Preencha todos os campos!",
           
          });

    }else{
        const data = {
      
            nome,
            email,
            pass
        };
       
        try{
            const requisicao = await fetch("/singup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                
                body: JSON.stringify(data)
            })
           
           if(requisicao.ok){
            const resposta = await requisicao.json();
           
                Swal.fire({
                icon: "success",
                title: "Eba...",
                text: resposta.message,
                showDenyButton: true,               
                confirmButtonText: "Login",
                denyButtonText: `Fechar`
              }).then((result) => {
               
                if (result.isConfirmed) {
                    window.location = "/login";
                } else if (result.isDenied) {
                    document.getElementById("nome").value = "";
                    document.getElementById("email").value = "";
                    document.getElementById("pass").value = "";
                }
              });
             
           }else{
            const resposta = await requisicao.json();
          
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: resposta.message,
                
              });

            
           }





        }catch(erro){

            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Ocoreu o Erro"+erro,
               
              });

        }
 
    

    }

});*/

login.addEventListener("submit", async (event) => {
    event.preventDefault();
    const username = document.getElementById("email").value;
    const password = document.getElementById("pass").value;
    const data = {username,password}
    console.log(data)
    try{
        const login = await fetch("/login",{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },

            body: JSON.stringify(data)

        })
        if(login.ok){

            window.location = "/";

        }else{

            const resposta = await login.json();
          
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: resposta.message,
            });
        }
    }catch(erro){
        
        
        console.log(erro)
    }

  



})