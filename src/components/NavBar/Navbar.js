import './Navbar.css';
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import { HomeOutlined, DeploymentUnitOutlined, SearchOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

const Navbar = () => {

    return (
        <Menu mode="horizontal" className='nav_bar'>
            <Menu.Item key="home" icon={<HomeOutlined />}>
                Home
            </Menu.Item>
            <Menu.Item key="tinder" icon={<DeploymentUnitOutlined />}>
                Tinder
            </Menu.Item>
            <Menu.Item key="search" icon={<SearchOutlined />}>
                Search
            </Menu.Item>
            <Menu.Item key="mymovies" icon={<MenuUnfoldOutlined />}>
                MyMovies
            </Menu.Item>
        </Menu>
    )
}

export default Navbar;
