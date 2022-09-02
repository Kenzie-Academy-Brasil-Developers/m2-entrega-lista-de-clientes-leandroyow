import { Api } from "./api.js";

class Cadastro {

static novoCliente() {
    
    const btnCadastro = document.querySelector("#CadastrarNovoCliente");
    
    btnCadastro.addEventListener("click", async (event) => {
    event.preventDefault();
    
    const inputNome = document.querySelector("#nome");
    const inputEmail = document.querySelector("#email");
    const inputCpf = document.querySelector("#cpf");
    const inputIdade = document.querySelector("#idade");
    const inputSexo = document.querySelector("#sexo");
    const inputCep = document.querySelector("#cep");
    const inputEstado = document.querySelector("#estado");
    const inputCidade = document.querySelector("#cidade");
    const inputBairro = document.querySelector("#bairro");
    const inputRua = document.querySelector("#rua");
    const inputNumeroDaCasa = document.querySelector("#numeroDaCasa");
    
    let data = {
        nome: inputNome.value,
        email: inputEmail.value,
        sexo: inputSexo.value,
        idade: inputIdade.value,
        cpf: inputCpf.value,
        endereco: {
            estado: inputEstado.value,
            cidade: inputCidade.value,
            bairro: inputBairro.value,
            numero: inputNumeroDaCasa.value,
            rua: inputRua.value,
            cep: inputCep.value
        }
            
    }
    await Api.cadastrarCliente(data);
    document.location.reload()
    alert("Cliente cadastrado com sucesso")
    
    
    
    })
    
   }
}
    
Cadastro.novoCliente();