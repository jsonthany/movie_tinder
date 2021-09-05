import './Navbar.css';
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import { HomeOutlined, DeploymentUnitOutlined, SearchOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <Menu mode="horizontal" className='nav_bar'>
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
            <Menu.Item key="search" icon={<SearchOutlined />}>
                {/* <Link to='/search'> */}
                    Search
                {/* </Link> */}
            </Menu.Item>
            <Menu.Item key="mymovies" icon={<MenuUnfoldOutlined />}>
                {/* <Link to='/my_movies'> */}
                    My Movies
                {/* </Link> */}
            </Menu.Item>
        </Menu>
    )
}

export default Navbar;
