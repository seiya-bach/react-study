import { useEffect, useState } from 'react';
import axios from 'axios';

const Skills = () => {
    const [languageList, setLanguageList] = useState(null);

    useEffect(() => {
        axios.get('https://api.github.com/users/seiya-bach/repos').then((response) => {
            const languageList = response.data.map((res) => res.language);
            const countedLanguageList = generateLanguageCountObj(languageList);
            setLanguageList(countedLanguageList);
        });
    }, []);

    const generateLanguageCountObj = (allLanguageList) => {
        const notNullLanguageList = allLanguageList.filter((language) => language != null);
        const uniqueLanguageList = [...new Set(notNullLanguageList)];

        return uniqueLanguageList.map((item) => {
            return {
                language: item,
                count: allLanguageList.filter((language) => language === item).length,
            };
        });
    };

    console.log(languageList);

    return (
        <div id='skills'>
            <div className='container'>
                <div className='heading'>
                    <h2>Skills</h2>
                </div>
                <div className='skills-container'></div>
            </div>
        </div>
    );
};

export default Skills;
