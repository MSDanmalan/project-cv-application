import { useState } from "react";
import PersonalInfo from "./components/info";

function Panel({title, children, dropdown, onDisplay}) {
    return (
        <>
            <div className="menuItem" onClick={onDisplay}>
                <div>{title}</div>
                <svg className="dropdownIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>expand</title><path fill="currentColor" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </div>
            {dropdown && children}
        </>
    )
}

function PersonalInfodropdown({ formData, setFormData, handleSubmit }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <form onSubmit={handleSubmit} className="dropdownForm">
            <legend>Personal Info:</legend>
            <div>
                <label htmlFor="name"></label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Name:"
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="email"></label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="Email:"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="tel"></label>
                <input 
                    type="tel" 
                    id="tel" 
                    name="tel" 
                    placeholder="Tel"
                    value={formData.tel}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="address"></label>
                <input 
                    type="text" 
                    id="address" 
                    name="address" 
                    placeholder="Address:"
                    value={formData.address}
                    onChange={handleChange}
                />
            </div>
            <button type="submit" className="submitFormButton">Save</button>
        </form>
    );
}

function EducationDropdown({ formData, setFormData, handleSubmit }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <form onSubmit={handleSubmit} className="dropdownForm">
            <legend>Education:</legend>
            <div>
                <label htmlFor="schoolName"></label>
                <input type="text" id="schoolName" name="schoolName" placeholder="School Name:" value={formData.schoolName} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="titleOfStudy"></label>
                <input type="text" id="titleOfStudy" name="titleOfStudy" placeholder="Title of study:" value={formData.titleOfStudy} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="date"></label>
                <input type="date" id="dateOfStudy" name="dateOfStudy" placeholder="Duration" value={formData.dateOfStudy} onChange={handleChange}/>
            </div>
            <button className="submitFormButton">Save</button>
        </form>
    )
}

function ExperienceDropdown({ formData, setFormData, handleSubmit }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <form onSubmit={handleSubmit} className="dropdownForm">
            <legend>Experience:</legend>
            <div>
                <label htmlFor="companyName"></label>
                <input type="text" id="companyName" name="companyName" placeholder="Company Name:" value={formData.companyName} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="positionTitle"></label>
                <input type="text" id="positionTitle" name="positionTitle" placeholder="Position Title:" value={formData.positionTitle} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="date"></label>
                <input type="date" id="workDuration" name="workDuration" placeholder="Duration" value={formData.workDuration} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="jobResponsibilities"></label>
                <input type="text" id="jobResponsibilities" name="jobResponsibilities" placeholder="Job Responsibilities" value={formData.jobResponsibilities} onChange={handleChange}/>
            </div>
            <button className="submitFormButton">Save</button>
        </form>
    )
}

export default function Menu({formData, setFormData, handleSubmit}) {
    const [activeDropdown, setdropdown] = useState(0);

    return (
        <div className="menuContainer">
            <div className="menu">
                <Panel 
                    title='Personal Info' 
                    dropdown={activeDropdown === 1} 
                    onDisplay={() => activeDropdown !== 1 ? setdropdown(1): setdropdown(0)}
                >
                    <PersonalInfodropdown formData={formData} setFormData={setFormData} handleSubmit={handleSubmit}/>
                </Panel>
                <Panel 
                    title='Education' 
                    dropdown={activeDropdown === 2} 
                    onDisplay={() => activeDropdown !== 2 ? setdropdown(2): setdropdown(0)}
                >
                    <EducationDropdown formData={formData} setFormData={setFormData} handleSubmit={handleSubmit}/>
                </Panel>
                <Panel
                    title='Experience'
                    dropdown={activeDropdown === 3} 
                    onDisplay={() => activeDropdown !== 3 ? setdropdown(3): setdropdown(0)}
                >
                    <ExperienceDropdown formData={formData} setFormData={setFormData} handleSubmit={handleSubmit}/>
                </Panel>
            </div>
            <div className="overlay"></div>
        </div>
    )
}
