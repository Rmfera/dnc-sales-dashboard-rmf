import { ChangeEvent, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'
import Cookies from 'js-cookie'
// COMPONENTS
import { Box, Container, Grid } from '@mui/material'
import {
  BannerImage,
  FormComponent,
  Logo,
  StyledH1,
  StyledP,
} from '@/components'

// HOOKS
import { useFormValidation, usePost } from '@/hooks'

// UTILS
import { jwtExpirationDateConverter, pxToRem } from '@/utils'

// TYPES
import { DecodedJWT, MessageProps, LoginData, LoginPostData } from '@/types'

// REDUX
import { useSelector } from 'react-redux'
import { RootState } from '@/redux'
function Login() {
  const navigate = useNavigate()
  const { email, message } = useSelector(
    (state: RootState) => state.createProfile
  )
  const inputs = [
    { type: 'email', placeholder: 'Email' },
    { type: 'password', placeholder: 'Senha' },
  ]

  const { data, loading, error, postData } = usePost<LoginData, LoginPostData>(
    'login'
  )
  const { formValues, formValid, handleChange } = useFormValidation(inputs)

  const handleMessage = (): MessageProps => {
    // O trecho de código a seguir, ou seja, ?? quer dizer que se tiver mensagem mostra senão deixa vazio
    if (!error) return { msg: message ?? '', type: 'success' }
    switch (error) {
      case 401:
        return {
          msg: 'Email e/ou senha inválidos',
          type: 'error',
        }
      default:
        return {
          msg: 'Não foi possível realizar a operação. Entre em contato com nosso suporte.',
          type: 'error',
        }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await postData({
      email: String(formValues[0]),
      password: String(formValues[1]),
    })
  }

  // Este valor dentro de colchetes quer dizer que este useEffect irá rodar
  // sempre que tiver alguma alteração nesta variável data
  useEffect(() => {
    if (data?.jwt_token) {
      const decoded: DecodedJWT = jwtDecode(data?.jwt_token)
      Cookies.set('Authorization', data?.jwt_token, {
        expires: jwtExpirationDateConverter(decoded.exp),
        secure: true,
      })
      // console.log('DATA:', data)
    }
    if (Cookies.get('Authorization')) navigate('/home')
  }, [data, navigate])
  useEffect(() => {
    if (email) {
      // Se tiver email vindo do redux, passa o valor do email vindo do redux para o formulário
      // Aí já vai chamar o handleChange para validar o email para ver se ele está correto
      handleChange(0, email)
    }
  }, [email])

  return (
    <>
      <Box>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{ alignItems: 'center', display: 'flex', height: '100vh' }}
          >
            <Container maxWidth="sm">
              <Box sx={{ marginBottom: pxToRem(24) }}>
                <Logo height={41} width={100} />
              </Box>
              <Box sx={{ marginBottom: pxToRem(24) }}>
                <StyledH1>Bem-vindo</StyledH1>
                <StyledP>Digite sua senha para logar</StyledP>
              </Box>
              <FormComponent
                // O professor modificou o código abaixo, ou seja, ele utilizou a renderização dinâmica fazendo
                // o uso de map
                inputs={inputs.map((input, index) => ({
                  type: input.type,
                  placeholder: input.placeholder,
                  value: formValues[index] || '',
                  onChange: (e: ChangeEvent<HTMLInputElement>) =>
                    handleChange(index, (e.target as HTMLInputElement).value),
                }))}
                buttons={[
                  {
                    className: 'primary',
                    disabled: !formValid || loading,
                    type: 'submit',
                    onClick: handleSubmit,
                    children: loading ? 'Aguarde...' : 'Login',
                  },
                ]}
                message={handleMessage()}
              />
            </Container>
          </Grid>
          <Grid item sm={6} sx={{ display: { xs: 'none', sm: 'block' } }}>
            <BannerImage />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
export default Login
