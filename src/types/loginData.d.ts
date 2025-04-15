// Esta parte é a resposta, ou seja, o jwt_token
export interface LoginData {
    jwt_token: string
}

// Significa o que eu preciso enviar na request do login para eu ter uma resposta, ou seja, é o envio
export interface LoginPostData {
    email: string
    password: string
}