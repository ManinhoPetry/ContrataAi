import React from 'react';
import { SolutionOutlined } from '@ant-design/icons';
import { ConfigProvider, Input, Steps } from 'antd';
import { Link } from 'react-router-dom';

const Cpf = () => (
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
        current={1}
        items={[
          {
            
          },
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
            CPF 
        </div>
    <br />
    <Input size="large" placeholder="Ex: 123.456.789-10" prefix={<SolutionOutlined />} />
    <br />
    <br />
    <div className="actions">
      <div className="action">
          <Link to="/cadastro/contatos">
            Avançar
          </Link>
      </div>
    </div>
    
  </>
);
export default Cpf;