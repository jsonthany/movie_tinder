import './Navbar.css';
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import { HomeOutlined, DeploymentUnitOutlined, LoginOutlined, LogoutOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

const Navbar = () => {

    return (

        <Menu mode="horizontal" className='nav_bar'>

            {
                false ? 
                    <Menu.Item key="login" icon={<LoginOutlined />}>
                        <Link to='/login'>
                            Login
                        </Link>
                    </Menu.Item>
                    :
                    <Menu.Item key="logout" icon={<LogoutOutlined />}>
                        <Link to='/login'>
                            Logout
                        </Link>
                    </Menu.Item>
            }
            
            
            <Menu.Item key="home" icon={<HomeOutlined />}>
                <Link to='/'>
                    Home
                </Link>
            </Menu.Item>

            <Menu.Item key="tinder" icon={<DeploymentUnitOutlined />}>
                <Link to='/movie_tinder'>
                    Tinder
                </Link>
            </Menu.Item>

            

            {
                false ? 
                    <Menu.Item key="mymovies" icon={<MenuUnfoldOutlined />}>
                        {/* <Link to='/my_movies'> */}
                            My Movies
                        {/* </Link> */}
                    </Menu.Item>
                        :
                    <Menu.Item key="mymovies" disabled icon={<MenuUnfoldOutlined />}>
                        {/* <Link to='/my_movies'> */}
                            My Movies
                        {/* </Link> */}
                    </Menu.Item>
            }

        </Menu>
    )
}

export default Navbar;
