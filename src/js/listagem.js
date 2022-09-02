import { Api } from "./api.js";

class RenderizarClientes {

static async renderizarClientes() {

    let data = await Api.listarClientes();
    data.forEach(element => {
        let clienteNovo = this.montarCardCliente(element)
            let ul = document.querySelector("#listaClientes");
            ul.append(clienteNovo)
        });
}

static montarCardCliente (data) {

    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    
    const li = document.createElement("li");
    li.classList.add("card");
    
    const dadosPessoais = document.createElement("h3");
    const nome = document.createElement("h2");
    const email = document.createElement("p");
    const idade = document.createElement("p");
    const cpf = document.createElement("p");
    const sexo = document.createElement("p");
    
    nome.innerText = data.nome;
    email.innerText = data.email;
    idade.innerText = data.idade;
    cpf.innerText = data.cpf;
    sexo.innerText = data.sexo;
    
    dadosPessoais.innerText = "Dados Pessoais";
    
    div1.append(dadosPessoais, nome, email, idade, cpf, sexo);
    
    const endereco = document.createElement("h3");
    const cep = document.createElement("p");
    const estado = document.createElement("p");
    const cidade = document.createElement("p");
    const bairro = document.createElement("p");
    const rua = document.createElement("p");
    const numero = document.createElement("p");
    
    cep.innerText = data.endereco.cep;
    estado.innerText = data.endereco.estado;
    cidade.innerText = data.endereco.cidade;
    bairro.innerText = data.endereco.bairro;
    rua.innerText = data.endereco.rua;
    numero.innerText = data.endereco.numero;
    
    endereco.innerText = "Endereço";
        
    div2.append(endereco, cep, estado, cidade, bairro, rua, numero);
    
    li.append(div1, div2);

    return li
}

}

RenderizarClientes.renderizarClientes();