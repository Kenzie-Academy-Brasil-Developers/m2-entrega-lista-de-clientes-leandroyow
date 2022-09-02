import {Api} from "./api.js"
class DeletandoCl {

static async deleteCliente() {

        let todosClientes = await Api.listarClientes();
    
        todosClientes.map(element => {

        let selectClientes = document.querySelector("#selectParaDeletar");
        let optionCliente = document.createElement("option");
    
        optionCliente.innerText = element.nome;
        optionCliente.value = element.id;
    
        selectClientes.append(optionCliente);
        });

        let btnDelete = document.querySelector("#deletarCl")
        .addEventListener("click", async (event) => {
        event.preventDefault();

        let options = document.querySelector("#selectParaDeletar");
        let id = options.value;
        

        await Api.deletarCliente(id)  
        document.location.reload()
        alert(`Os dados do cliente foram excluídos com sucesso`)  
        })
        
    }
}


DeletandoCl.deleteCliente()