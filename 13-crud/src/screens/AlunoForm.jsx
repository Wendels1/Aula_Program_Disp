import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { Text, Button, TextInput } from 'react-native-paper'
import { TextInputMask } from 'react-native-masked-text'

export default function AlunoForm({ navigation, route }) {

    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [dataNascimento, setDataNascimento] = useState('')

    function salvar() {
        const aluno = {
          nome,
          cpf,
          email,
          telefone,
          dataNascimento
        }
    
        if (!aluno.nome || !aluno.cpf || !aluno.email || !aluno.telefone || !aluno.dataNascimento) {
          alert('Preencha todos os campos!!!')
        } else {
          alert(JSON.stringify(aluno))
        }
    
      }

  return (
    <View>
      <Text variant='headlineLarge' style={{ textAlign: 'center', margin: 10 }}>Informe os Dados</Text>

        <TextInput
            label='Nome'
            mode='outlined'
            style={styles.input}
            placeholder='Informe o Nome'
            value={nome}
            onChange={setNome}
        />

        <TextInput
            label='CPF'
            mode='outlined'
            style={styles.input}
            placeholder='Informe o CPF'
            value={cpf}
            onChange={setNome}
            keyboardType='numeric'
            render={(props) => (
                <TextInputMask
                    {...props}
                    type={'cpf'}
                    options={{
                        format: '999.999.999-99'
                    }}
                />
            )}
        />

        <TextInput
            label='E-mail'
            style={styles.input}
            mode='outlined'
            value={email}
            onChangeText={setEmail}
            keyboardType='email-address'
        />
        
        <TextInput
            label='Telefone'
            mode='outlined'
            style={styles.input}
            placeholder='Informe o Telefone'
            value={telefone}
            onChange={setNome}
            render={(props) => (
                <TextInputMask
                    {...props}
                    type={'cel-phone'}
                    options={{
                        maskType: 'BRL',
                        withDDD: true,
                        dddMask: '(99) 9999-9999 '
                    }}
                />
            )}
        />

        <TextInput
            label='Data de Nascimento'
            mode='outlined'
            style={styles.input}
            placeholder='Informe a Data de Nascimento'
            value={dataNascimento}
            onChange={setNome}
            keyboardType='numeric'
            render={(props) => (
                <TextInputMask
                    {...props}
                    type={'datetime'}
                    options={{
                        mask: 'DD/MM/YYYY'
                    }}
                />
            )}
        />


        <Button
            mode='contained'
            icon='content-save'
            style={{ margin: 10 }}
            onPress={salvar}
        >
            Salvar
        </Button>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    input: {
        marginBottom: 10,
        width: '90%',
        marginTop: 10,
    }
})
