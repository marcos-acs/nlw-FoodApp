import axios  from "axios"

export const api = axios.create({
    baseURL: "http://10.0.0.102:3333",
    timeout: 700,
    
})

// trocar o endereço ip sempre que for abrir o app, para conectar a api corretamente. 
// npm start para rodar o api 
// npx expo start para rodar o app