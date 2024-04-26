import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { ConfigProvider, Input, Steps} from 'antd';
import { Link } from 'react-router-dom';

const Formulario = () => (
  <>
    <div className="name">
          <span className="react">ContrataAí</span>
    </div>
    
    <br /><br />
    <div className="text">
            Formulário
        </div>
    <br />
    <Input placeholder="Ex: Jorge Lara" prefix={<UserOutlined />} />
    <br />
    <Input placeholder="Ex: Jorge Lara" prefix={<UserOutlined />} />
    <br />
    <Input placeholder="Ex: Jorge Lara" prefix={<UserOutlined />} />
    <br />

    <br />
    <br />
    <div className="actions">
      <div className="action">
        <div className="avançar">
          <Link to="/cadastro/concluido">
            Concluir
          </Link>
        </div>
      </div>
    </div>
  </>
);
export default Formulario;