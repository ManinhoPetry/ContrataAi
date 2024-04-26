import React from 'react';
import { CheckCircleTwoTone } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Concluido = () => (
  <>
    <div className="name">
          <span className="react">ContrataAí</span>
    </div>
    <br />
    <div>
    </div>
    <br />
    <CheckCircleTwoTone style={{ fontSize: '130px' }} />
    <div className="text">
            Tudo pronto! 
        </div>
    <div className='tip'>
      Agora é só aguardar o contato da nossa equipe
    </div>
    
    <br />
    <div className="actions">
      <div className="action">
        <div className="avançar">
          <Link to="/">
            FInalizar
          </Link>
        </div>
      </div>
    </div>
    
  </>
);
export default Concluido;