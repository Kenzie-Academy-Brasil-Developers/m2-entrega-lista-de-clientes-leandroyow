import {Api} from "./api.js";

class Edicao {

static async pesquisarCliente() {
    let todosClientes = await Api.listarClientes();

    todosClientes.map(element => {
        let selectClientes = document.querySelector("#select");
        let optionCliente = document.createElement("option");

        optionCliente.innerText = element.nome;
        optionCliente.value = element.id;

        selectClientes.append(optionCliente)
    });

    let btnBuscaCliente = document.querySelector("#buscarClientes")
    .addEventListener("click", async (event) => {
       event.preventDefault()
        
        let options = document.querySelector("#select");

        let clienteSelecionado = await fetch(`https://atividade-api-clientes.herokuapp.com/clientes/${options.value}`)
        .then(resp => resp.json())
        .catch(err => console.log(err)) 
    
        const inputNomeCl = document.querySelector("#nomeCl");
        const inputEmailCl = document.querySelector("#emailCl"); 
        const inputIdadeCl = document.querySelector("#idadeCl"); 
        const inputCpfCl = document.querySelector("#cpfCl"); 
        const inputSexoCl = document.querySelector("#sexoCl"); 
        const inputCepCl = document.querySelector("#cepCl"); 
        const inputRuaCl = document.querySelector("#ruaCl"); 
        const inputNumeroDaCasaCl = document.querySelector("#numeroDaCasaCl"); 
        const inputBairroCl = document.querySelector("#bairroCl"); 
        const inputCidadeCl = document.querySelector("#cidadeCl"); 
        const inputEstadoCl = document.querySelector("#estadoCl"); 

        inputNomeCl.value = clienteSelecionado.nome;
        inputEmailCl.value = clienteSelecionado.email;
        inputIdadeCl.value = clienteSelecionado.idade;
        inputCpfCl.value = clienteSelecionado.cpf;
        inputSexoCl.value = clienteSelecionado.sexo;
        inputCepCl.value = clienteSelecionado.endereco.cep;
        inputRuaCl.value = clienteSelecionado.endereco.rua;
        inputNumeroDaCasaCl.value = clienteSelecionado.endereco.numero;
        inputBairroCl.value = clienteSelecionado.endereco.bairro;
        inputCidadeCl.value = clienteSelecionado.endereco.cidade;
        inputEstadoCl.value = clienteSelecionado.endereco.estado;
    })
  }    
static editarDadosCliente() {
    let btnEdit = document.querySelector("#editarDados");
    btnEdit.addEventListener("click", (event) => {
        event.preventDefault();

        const inputNomeCl = document.querySelector("#nomeCl");
        const inputEmailCl = document.querySelector("#emailCl"); 
        const inputIdadeCl = document.querySelector("#idadeCl"); 
        const inputCpfCl = document.querySelector("#cpfCl"); 
        const inputSexoCl = document.querySelector("#sexoCl"); 
        const inputCepCl = document.querySelector("#cepCl"); 
        const inputRuaCl = document.querySelector("#ruaCl"); 
        const inputNumeroDaCasaCl = document.querySelector("#numeroDaCasaCl"); 
        const inputBairroCl = document.querySelector("#bairroCl"); 
        const inputCidadeCl = document.querySelector("#cidadeCl"); 
        const inputEstadoCl = document.querySelector("#estadoCl"); 

        let data = {
            nome: inputNomeCl.value,
            cpf: inputCpfCl.value,
            idade: inputIdadeCl.value,
            sexo: inputSexoCl.value,
            email: inputEmailCl.value,
            endereco: {
                estado: inputEstadoCl.value,
                cidade: inputCidadeCl.value,
                bairro: inputBairroCl.value,
                numero: inputNumeroDaCasaCl.value,
                rua: inputRuaCl.value,
                cep: inputCepCl.value
            } 
        }
       let options = document.querySelector("#select");
       Api.editarCliente(options.value, data);
       alert("Dados alterados com sucesso");

    })
}
}


Edicao.pesquisarCliente();
Edicao.editarDadosCliente();
