import { useLocation } from 'react-router-dom';
import '../css/Header.css'


export function Header() {
  const location = useLocation();

  const getTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'Úvod';
      case '/Menu':
        return 'Menu';
      case '/Contacts':
        return 'Kontakt';
      default:
        return '';
    }
  }

    return (
        <>
          <div className="header">
            <div className="inner">
              <h1>{getTitle()}</h1>
            </div>
          </div>
        </>
    )
}
