import './Navbar.css';
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import { HomeOutlined, DeploymentUnitOutlined, LoginOutlined, LogoutOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {

    const [loginStatus, setLoginStatus] = useState(false);
    const [menu, setMenu] = useState("home")

    const onClick = (e) => {
        if (e.key === "logout") {
            setLoginStatus(true);
            setMenu("home");
        } else {
            setMenu(e.key);
        }
    }

    useEffect(() => {

    }, [loginStatus, menu])

    return (

        <Menu mode="horizontal" className='nav_bar' selectedKeys={ menu }>

            {
                loginStatus ? 
                    <Menu.Item key="login" icon={<LoginOutlined />} onClick={(e) => onClick(e)}>
                        <Link to='/login'>
                            Login
                        </Link>
                    </Menu.Item>
                    :
                    <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={(e) => onClick(e)}>
                        <Link to='/'>
                            Logout
                        </Link>
                    </Menu.Item>
            }
            
            <Menu.Item key="home" icon={<HomeOutlined />} onClick={(e) => onClick(e)}>
                <Link to='/'>
                    Home
                </Link>
            </Menu.Item>

            <Menu.Item key="tinder" icon={<DeploymentUnitOutlined />} onClick={(e) => onClick(e)}>
                <Link to='/movie_tinder'>
                    Tinder
                </Link>
            </Menu.Item>

            {
                loginStatus ? 
                    <Menu.Item key="mymovies" icon={<MenuUnfoldOutlined />} onClick={(e) => onClick(e)}>
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