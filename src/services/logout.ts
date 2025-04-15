import Cookies from "js-cookie";

export function logout() {
    // Este confirm dentro do if é um recurso do javascript/html pedindo uma confirmação
    // por parte do usuário da aplicação
    if (confirm('Deseja seguir com o logout?') === true) {
        Cookies.remove('Authorization')

        // Este código a seguir é um redirect do próprio JavaScript e limpa os Cookies
        // O Cookie só some mesmo quando acontece um refresh na página
        window.location.href = '/'
    }
}