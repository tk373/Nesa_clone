import '@fortawesome/fontawesome-free/css/all.min.css';
import Countdown from './Countdown'

function Header() {

    return (
        <div className='layoutHeader'>
        <span className='headerLogoSpan'>
            <button className='buttonMenu'>
            <i className='itemInButton'>&#9776;</i>
            </button>
            <span className='logoSpan'>
                <img className="logoInSpan" src="https://root.nesa-sg.ch/_schulnetz_5.7.1/css/flat/images/snlogo-192x192.png"/>
            </span>
        </span>
        <span className='titleSpan'>Nesa</span>
        <nav className='navigationHeader'>
            <a href="#" className="startButton">
            <i className="fa-home fas fa-lg lol"></i>
                <div className="mainLinkText">Start</div>
            </a>
            <a href="#" className="notenButton">
            <i className="fa-graduation-cap fas fa-lg lol"></i>
                <div className="mainLinkText">Noten</div>
            </a>
            <a href="#" className="absenzenButton">
            <i className="fa-user-check fas fa-lg lol"></i>
                <div className="mainLinkText">Absenzen</div>
            </a>
            <a href="#" className="agendaButton">
            <i className="fa-calendar-alt fas fa-lg lol"></i>
                <div className="mainLinkText">Agenda</div>
            </a>
            <a href="#" className="kommunikationButton">
            <i className="fa-envelope fas fa-lg lol"></i>
                <div className="mainLinkText">Kommunikation</div>
            </a>
            <a href="#" className="DokuButton">
            <i className="fa-cloud fas fa-lg lol"></i>
                <div className="mainLinkText">Listen&Dokumente</div>
            </a>
            <a href="#" className="eSchoolButton">
            <i className="fa-laptop fas fa-lg lol"></i>
                <div className="mainLinkText">eSchool</div>
            </a>
        </nav>
        <button className='bellButton'>
          <i className="far fa-bell fa-xs"></i>
        </button>
          <Countdown />
        <button className='bookmarkbutton'>
          <i className="far fa-bookmark fa-xs"></i>
        </button>
        <button className='Menubutton'>
          <i className="far fa-ellipsis-v fa-xs"></i>
        </button>
    </div>
    );
  };



export default Header