import { requestStates } from '../constants';
import Circle from 'react-circle';
import { useSkills } from '../customHooks/useSkills';

const Skills = () => {
    const [sortedLanguageList, fetchRequestState, converseCountToPercentage] = useSkills();

    return (
        <div id='skills'>
            <div className='container'>
                <div className='heading'>
                    <h2>Skills</h2>
                </div>
                <div className='skills-container'>
                    {fetchRequestState === requestStates.loading && <p className='description'>取得中...</p>}
                    {fetchRequestState === requestStates.error && <p className='description'>エラーが発生しました</p>}
                    {fetchRequestState === requestStates.success &&
                        sortedLanguageList().map((item, index) => (
                            <div key={index} className='skill-item'>
                                <p className='description'>
                                    <strong>{item.language}</strong>
                                </p>
                                <Circle animate progress={converseCountToPercentage(item.count)} />
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
