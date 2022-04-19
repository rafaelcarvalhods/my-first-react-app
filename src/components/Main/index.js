import { Button } from 'antd'
import { MdPostAdd } from "react-icons/md";
import { Container } from './styles';
import { StyledButton } from './styles';

const Main = () => (
    <Container>
        <h2>Listagem</h2>
        <StyledButton>Cadastrar item
        </StyledButton>
        <Button icon={<MdPostAdd />}>Cadastrar item</Button>
    </Container>
)

export default Main;