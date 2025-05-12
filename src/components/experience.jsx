import '../styles/experience.css'

export default function Experience() {
    return (
        <table>
            <tr>
                <th className='title' colSpan={2}>Experience</th>
            </tr>
            <tr>
                <th className='date'>January 2020 - April 2021</th>
                <td className='data'>
                    <span className="experience">Marketing Assistant, Global Solutions Ltd., London</span>
                    <ul>
                        <li>Assisted in the planning and execution of marketing campaigns across various channels, including social media, email, and events.</li>
                        <li>Conducted market research and competitor analysis to identify opportunities for growth.</li>
                        <li>Created engaging content for company blog posts, newsletters, and promotional materials.</li>
                        <li>Coordinated with external vendors and agencies to ensure timely delivery of marketing materials.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th className='date'>May 2021 - August 2021</th>
                <td className='data'>
                    <span className='experience'>Data Insights Co., New York</span>
                    <ul>
                        <li>Conducted data cleaning, preprocessing, and analysis to derive actionable insights from large datasets.</li>
                        <li>Created visualizations and dashboards using tools like Tableau and Power BI to communicate findings to stakeholders.</li>
                        <li>Assisted in the development of predictive models to forecast market trends and customer behavior.</li>
                        <li>Presented findings and recommendations to management in weekly meetings.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th className='date'>July 2022 - Present</th>
                <td className='data'>
                    <span className="experience">Tech Innovations Inc., San Francisco</span>
                    <ul>
                        <li>Collaborate with cross-functional teams to design and implement software solutions for clients.</li>
                        <li>Develop and maintain scalable web applications using modern technologies such as React.js and Node.js.</li>
                        <li>Participate in code reviews and provide constructive feedback to team members.</li>
                        <li>Troubleshoot and debug software issues to ensure optimal performance and user experience.</li>
                    </ul>
                </td>
            </tr>
        </table>
    )
}