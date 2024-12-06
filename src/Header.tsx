
import '@fortawesome/fontawesome-free/css/all.min.css';

//props
interface HeaderProps{
  title: string;
}

export default function Header({title}:HeaderProps):JSX.Element{
  return (
        <header className="header">
          {/* No me aparece el toggle por defecto */}
            {/* <div className="menuIcon">
              <div className="dashTop"></div>
              <div className="dashBottom"></div>
              <div className="circle"></div>
            </div> */}
            
            {/* Nuevo toggle icono */}
            <div className="menuIcon">
              <i className="fas fa-bars"></i>
            </div>
            <h2>{title}</h2>
            <input
              type="text"
              className="searchInput"
              placeholder="Buscar ..."
            />
            <i className="fa fa-search searchIcon"></i>
      </header>
    );
}