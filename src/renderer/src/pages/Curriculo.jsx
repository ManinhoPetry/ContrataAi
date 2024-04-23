import React from 'react';
import { UploadOutlined} from '@ant-design/icons';
import { Button, ConfigProvider, Steps, Upload } from 'antd';
import { Link } from 'react-router-dom';


// const props = {
//     beforeUpload: (file) => {
//       const isPDF = file.type === 'pdf';
//       if (!isPDF) {
//         message.error(`${file.name} Não é um arquivo PDF`);
//       }
//       return isPDF || Upload.LIST_IGNORE;
//     },
//     onChange: (info) => {
//       console.log(info.fileList);
//     },
//   };

const props = {
    action: '//jsonplaceholder.typicode.com/posts/',
    listType: 'picture',
    previewFile(file) {
      console.log('Your upload file:', file);
      // Your process logic. Here we just mock to the same file
      return fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
        method: 'POST',
        body: file,
      })
        .then((res) => res.json())
        .then(({ thumbnail }) => thumbnail);
    },
  };

const Curriculo = () => (
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
        ]}
      />
      </ConfigProvider>
    </div>
    <br /><br />
    <div className="text">
            Currículo 
        </div>
    <br />
    <center>
        <Upload {...props}>
        <Button icon={<UploadOutlined />}>Upload PDF only</Button>
        </Upload>
    </center>
    <br />
    <br />
    <div className="actions">
      <div className="action">
          <Link to="/cadastro/concluido">
            Avançar
          </Link>
      </div>
    </div>
    
  </>
);
export default Curriculo;