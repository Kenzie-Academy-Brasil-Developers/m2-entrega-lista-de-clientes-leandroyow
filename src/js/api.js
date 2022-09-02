class Api {

static baseUrl = "https://atividade-api-clientes.herokuapp.com";
static headers = {
        "Content-Type": "application/json"
};
  
static async listarClientes(){
    
    const data = await fetch (`${this.baseUrl}/clientes`, {
    method: "GET",
    headers:this.headers
    })
    .then(res => res.json())
    .catch(err => console.log(err))
    return data
}

static async cadastrarCliente(data){

    const novoCliente = await fetch(`${this.baseUrl}/clientes`, {
    method: "POST",
    headers: this.headers,
    body: JSON.stringify(data)
    })
    .then(res => res.json())
    .catch(err => console.log(err))

    return novoCliente
}

static async editarCliente(id, data){
    const editar = await fetch(`${this.baseUrl}/clientes/${id}`, {
    method: "PATCH",
    headers: this.headers,
    body: JSON.stringify(data)
    })
    .then(res => res.json())
    .catch(err => console.log(err))

    return editar
}

static async deletarCliente(id){
    const deletar = await fetch(`${this.baseUrl}/clientes/${id}`, {
        method: "DELETE",
        headers: this.headers
    })
    .then(res => res.json())
    .catch(err => console.log(err))

    return deletar
}

}
  
export {Api}