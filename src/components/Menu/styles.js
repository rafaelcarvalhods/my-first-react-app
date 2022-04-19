import styled from "styled-components";
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons'


export const BtnSearch = styled(Button).attrs({
    icon: <SearchOutlined />, 
    type: "primary",
    shape: "round"
})``