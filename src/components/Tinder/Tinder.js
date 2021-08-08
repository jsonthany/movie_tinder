import FilterBar from './FilterBar';
import Movie from './Movie';
import { Layout } from 'antd';
import './Tinder.css'
import App from '../../App';

const { Header, Footer, Content } = Layout;

const Tinder = ({ movies, generateRandomMovie, randomItemNumber }) => {

    return (
        <Layout className="tinder">

            <Header className="header">
                <FilterBar />
            </Header>

            <Content className="content">
                    <Movie  {...movies[randomItemNumber]}
                            generateRandomMovie= { generateRandomMovie }
                            randomItemNumber={ randomItemNumber } />
            </Content>

            <Footer className="footer">
                RandomMovieGenerator @2021 / Movie Tinder
            </Footer>

        </Layout>
    )
}

export default Tinder
