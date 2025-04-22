export interface ProfileEditableData {
    name: string
    phone: string
}

export interface ProfileData extends ProfileEditableData {
    email: string
}

export interface CreateProfileData {
    // Abaixo são os campos que estarão no nosso cadastro de usuário da aplicação
    name: string
    email: string
    phone: string
    password: string
    message?: string | null
}