import React from "react";

export const Skills = () => {

    const frontend = [
        'Javascript',
        'Typescript',
        'React',
        'Redux',
        'HTML',
        'CSS',
        'Bootstrap',
        'Material UI',
    ];

    const backend = [
        'Python',
        'PostgresSQL',
        'MySQL',
        'Java',
        'Node.js',
        'Express',
        'REST API',
        'ETL',
        'Data Pipelines',
        'Bash'
    ];

    const tools = [
        'Git',
        'GitHub',
        'Postman',
        'Axios',
        'VSCode',
        'Microsoft Windows',
        'Mac OS',
        'Linux'
    ];

    return (
        <React.Fragment>
            <div>
                <div 
                style={{
                    alignContent: 'center',
                    justifyContent: 'center',
                    display: 'flex'
                }}>
                    <h1>Skills</h1>
                </div>
                <div>
                    <div>
                        <h3>Front End</h3>        
                    </div>
                    <div>
                        <h3>Back End</h3>
                    </div>
                    <div>
                        <h3>Tools / Cloud</h3>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}