import React from 'react';
import { WhatsAppOutlined, MailOutlined} from '@ant-design/icons';
import { ConfigProvider, Input, Steps } from 'antd';
import { Link } from 'react-router-dom';

const Contatos = () => (
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
        current={2}
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
            Contatos 
        </div>
    <br />
    <Input size="large" placeholder="Ex: (12) 912345678" prefix={<WhatsAppOutlined />} />
    <br />
    <Input size="large" placeholder="Ex: email@gmail.com" prefix={<MailOutlined />} />
    <br />
    <br />
    <div className="actions">
      <div className="action">
          <Link to="/">
            Avançar
          </Link>
      </div>
    </div>
    
  </>
);
export default Contatos;