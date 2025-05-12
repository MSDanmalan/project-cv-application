import '../styles/education.css'
import { educationData } from './data'

export default function Education() {
    return(
        <table>
            <tr>
                <th className='title' colSpan={2}>Education</th>
            </tr>
            {educationData.map((data) => {
                return(
                    <EducationTableData
                        dateOfStudy={data.dateOfStudy}
                        titleOfStudy={data.titleOfStudy}
                        schoolName={data.schoolName}
                    />
                )
            })}
        </table>
    )
}

export function EducationTableData({schoolName, titleOfStudy, dateOfStudy}) {
    return(
        <tr>
            <th className="date">{dateOfStudy}</th>
            <td className='data'>{titleOfStudy}<br />
                {schoolName}
            </td>
        </tr>
    )
}