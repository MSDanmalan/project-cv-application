import { useState } from "react";
import PersonalInfo from "./components/info";
import Education from "./components/education";
import Experience from "./components/experience";
import './App.css';
import Menu from "./menu";

function NavBar({ toggleMenu }) {
    return (
        <div className="navBar">
            <button onClick={toggleMenu} className="menuButton">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>menu</title><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" /></svg>
            </button>
            <span className="navTitle">CV BUILDER</span>
        </div>
    )
}

function Header({ formData }) {
    return (
        <header>
            <PersonalInfo
                CVName={formData.name || 'Ibrahim Khalil'}
                email={formData.email || 'ibrahimKhalil@gmail.com'}
                tel={formData.tel || '+234 902 374 7483'}
                address={formData.address || 'Kano, Nigeria'}
            />
        </header>
    )
}

function Main({ formData }) {
    return (
        <main>
            <Education />
            <Experience />
        </main>
    )
}

export default function App() {
    const [showMenu, setShowMenu] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        tel: '',
        address: '',
        schoolName: '',
        titleOfStudy: '',
        dateOfStudy: '',
        companyName: '',
        positionTitle: '',
        workDuration: '',
        jobResponsibilities: ''
    });

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle data submission logic here
        toggleMenu(); // Close the menu after submission
    };

    return (
        <>
            <NavBar toggleMenu={toggleMenu} />
            {showMenu && <Menu formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />}
            <Header formData={formData} />
            <Main formData={formData} />
        </>
    );
}
