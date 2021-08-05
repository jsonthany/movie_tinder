import FilterBar from './FilterBar';
import Movie from './Movie';
import { Layout, Select, DatePicker, Space, Button, Slider, Row } from 'antd';
import './Tinder.css'

const { RangePicker } = DatePicker;
const { Option } = Select;
const { Header, Footer, Content } = Layout;

const Tinder = ({ movies }) => {

    return (
        <Layout className="tinder">

            <Header className="header">
                <FilterBar />
            </Header>

            <Content className="content">
                    <Movie {...movies[2]} />
            </Content>

            <Footer className="footer">
                RandomMovieGenerator @2021 / Movie Tinder
            </Footer>

        </Layout>
    )
}

export default Tinder
