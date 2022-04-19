import { Menu as AntdMenu } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { BtnSearch } from './styles';

const Menu = () => (
    <AntdMenu mode="horizontal">
        <AntdMenu.Item key="home">
          Home
        </AntdMenu.Item>
        <AntdMenu.Item key="team">
          Equipe
        </AntdMenu.Item>
        <AntdMenu.Item key="uboutus">
          Sobre
        </AntdMenu.Item>
        <AntdMenu.Item key="contact">
          Contato
        </AntdMenu.Item>
        <AntdMenu.Item key="search">
            <BtnSearch />
        </AntdMenu.Item>
    </AntdMenu>
)

export default Menu;