interface Usuario {
    nome: string;
    email: string;
    address?: string;
}

function getUser(): Usuario{
    return {
        nome: 'Luan',
        email: 'luan@luan.com'
    }
}

function setUser(usuario: Usuario){
    // ...
}