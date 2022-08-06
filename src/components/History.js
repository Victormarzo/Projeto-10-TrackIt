import styled from "styled-components"
import Text from "./Text"
import Title from "./Title"
export default function History(){


    return(
        <Conteudo>

        <Title>Histórico</Title>
        <Space></Space>
        <Text>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Text>
        </Conteudo>
        
    )
}
const Conteudo=styled.div`
    width: 100vw;
    
    
`
const Space=styled.div`
    height:18px
`