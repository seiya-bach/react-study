import CoverImage from '../images/cover-image.jpg';
import ProfileImage from '../images/profile-image.PNG';
import { FaTwitter, FaGithub } from 'react-icons/fa';

const Header = () => {
    return (
        <header className='main-cover' style={{ backgroundImage: `url(${CoverImage})` }}>
            <div className='overlay'></div>
            <div className='container'>
                <div className='display-table'>
                    <div className='profile-thumb' style={{ backgroundImage: `url(${ProfileImage})` }}></div>
                    <h1 className='title-text'>Seiya Ogawa</h1>
                    <h3 className='title-text'>Freelance Engineer</h3>
                    <ul className='social-icons'>
                        <li className='icon-link'>
                            <a href='https://twitter.com/knkSeiya' target='_brank'>
                                <FaTwitter color='white' size='2rem' />
                            </a>
                        </li>
                        <li className='icon-link'>
                            <a href='https://github.com/seiya-bach' target='_brank'>
                                <FaGithub color='white' size='2rem' />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
