import { Link } from "react-router-dom";
import "../assets/main.css";

function HomePage() {
    const ipcHandle = () => window.electron.ipcRenderer.send('ping')
  
    return (
      <>
        <div className="name">
          <span className="react">ContrataAí</span>
        </div>
        <div className="creator">Powered by Alysson Antonietti</div>
        {/* <div className="text">
          Build an Electron app with <span className="react">React</span>
        </div>
        <p className="tip">
          Please try pressing <code>F12</code> to open the devTool
        </p> */}
        
        <div className="actions">
          <div className="action">
          <Link to="/cadastro/nome">
            Começar!
          </Link>
          </div>
        </div>
          {/* <div className="action">
            <a target="_blank" rel="noreferrer" onClick={ipcHandle}>
              Send IPC
            </a>
          </div> */}
        {/* <Versions></Versions> */}
      </>
    )
  }

  export default HomePage