import FilterBar from './FilterBar';
import Movie from './Movie';
import { Layout } from 'antd';
import './Tinder.css'

const { Header, Footer, Content } = Layout;

const Tinder = ({ movies, generateRandomMovie }) => {

    return (
        <Layout className="tinder">

            <Header className="header">
                <FilterBar />
            </Header>

            <Content className="content">
                    <Movie  {...movies[0]}
                            generateRandomMovie= { generateRandomMovie } />
            </Content>

            <Footer className="footer">
                RandomMovieGenerator @2021 / Movie Tinder
            </Footer>

        </Layout>
    )
}

export default Tinder
