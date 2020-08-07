import { Alert, Platform } from 'react-native'

const server = Platform.OS === 'ios' ? 'http://localhost:3000' : 'https://tasks-backendd.herokuapp.com'

function showError(err) {
    if (err.response && err.response.data) {
        Alert.alert("Ops! Ocorreu um problema!", `Mensagem: ${err.response.data}`)
    } else {
        Alert.alert("Ops! Ocorreu um problema!", `Mensagem: ${err}`)
    }
}

function showSuccess(msg) {
    Alert.alert("Sucesso!", msg)
}

export  { server, showError, showSuccess }