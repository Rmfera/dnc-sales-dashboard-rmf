import { useState, useEffect } from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';;
// Observe no trecho de código abaixo que o professor colocou a barra (/) no final do baseURL
// Poderia tirar daqui e colocar no arquivo .env
const axiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/`
});

//Este T e P dentro dos símbolos <> quer dizer que vão receber tipagens e ainda diferentes uma da outra
export const usePost = <T, P>(endpoint: string, withAuth?: boolean) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<number | null>(null);

    // Implementação da lógica de requisição POST
    const postData = async (postData: P, config?: AxiosRequestConfig) => {
        setData(null)
        setLoading(true)
        setError(null)

        try {
            const headers = withAuth
                ? {
                    Authorization: `Bearer ${Cookies.get('Authorization')}`,
                    'Content-Type': 'application/json',
                    ...config?.headers,
                }
                : {
                    'Content-Type': 'application/json',
                    ...config?.headers
                }
            const response = await axiosInstance({
                url: endpoint,
                method: 'POST',
                data: postData,
                headers: headers,
                ...config,
            })
            setData(response.data)
            //Este e: any, significa que aceita qualquer tipo de tipagem
        } catch (e: any) {
            setError(e.response.status ?? 500)
        } finally {
            setLoading(false)
        }
    }
    return { data, loading, error, postData }
}

export const useGet = <T>(endpoint: string, config?: AxiosRequestConfig) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<number | null>(null);

    // Implementação da lógica de requisição POST
    const getData = async () => {
        setLoading(true)
        setError(null)

        try {
            const response = await axiosInstance({
                url: endpoint,
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${Cookies.get('Authorization')}`,
                    ...config?.headers
                },
                ...config
            })
            setData(response.data)
            //Este e: any, significa que aceita qualquer tipo de tipagem
        } catch (e: any) {
            setError(e.response.status ?? 500)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getData()
    }, [])
    return { data, loading, error, getData }
}

export const usePut = <T>(endpoint: string) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<number | null>(null);

    // Implementação da lógica de requisição POST
    const putData = async (putData: T, config?: AxiosRequestConfig) => {
        setData(null)
        setLoading(true)
        setError(null)

        try {
            const response = await axiosInstance({
                url: endpoint,
                method: 'PUT',
                data: putData,
                headers: {
                    'Authorization': `Bearer ${Cookies.get('Authorization')}`,
                    'Content-Type': 'application/json',
                    ...config?.headers
                },
                ...config
            })
            setData(response.data)
            //Este e: any, significa que aceita qualquer tipo de tipagem
        } catch (e: any) {
            setError(e.response ?? 500)
        } finally {
            setLoading(false)
        }
    }
    return { data, loading, error, putData }
}

export const useDelete = <T>(endpoint: string) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    // Implementação da lógica de requisição POST
    const deleteData = async (config?: AxiosRequestConfig) => {
        setData(null)
        setLoading(true)
        try {
            const response = await axiosInstance({
                url: endpoint,
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${Cookies.get('Authorization')}`,
                    ...config?.headers
                },
                ...config
            })
            setData(response.data)
            //Este e: any, significa que aceita qualquer tipo de tipagem
        } catch (e: any) {
            throw e.response?.status
        } finally {
            setLoading(false)
        }
    }
    return { data, loading, deleteData }
}