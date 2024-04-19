import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';

const NomeCompleto = () => (
  <>
    <div className="name">
          <span className="react">ContrataAí</span>
    </div>
    <br />
    <br />
    <div className="text">
            Nome completo 
        </div>
    <br />
    <Input size="large" placeholder="Ex: Jorge Lara" prefix={<UserOutlined />} />
    <br />
    <br />
    <div className="actions">
          <div className="action">
            <a href="https://electron-vite.org/" target="_blank" rel="noreferrer">
              Avançar
            </a>
          </div>
    </div>
    
  </>
);
export default NomeCompleto;