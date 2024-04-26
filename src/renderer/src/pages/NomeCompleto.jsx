import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { ConfigProvider, Input, Steps} from 'antd';
import { Link } from 'react-router-dom';

const NomeCompleto = () => (
  <>
    <div className="name">
          <span className="react">ContrataAí</span>
    </div>
    <br />
    <div>
      <ConfigProvider
        theme={{
          token: {
            colorSplit: '#515c67',
          },
        }}
      >
        <Steps
        size="small"
        current={0}
        items={[
          {
            
          },
          {
            
          },
          {
          
          },
        ]}
      />
      </ConfigProvider>
    </div>
    <br /><br />
    <div className="text">
            Nome completo 
        </div>
    <br />
    <Input size="large" placeholder="Ex: Jorge Lara" prefix={<UserOutlined />} />
    <br />
    <br />
    <div className="actions">
      <div className="action">
        <div className="avançar">
          <Link to="/cadastro/contatos">
            Avançar
          </Link>
        </div>
      </div>
    </div>
  </>
);
export default NomeCompleto;