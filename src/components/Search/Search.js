import SearchBar from './SearchBar'
import Movies from './Movies'
import { Row, Layout } from 'antd';
import './Search.css';


const Search = ({ searchfn, movies }) => {

    const { Header, Footer, Content } = Layout;

    return (
        <Layout className="search">
            <Header className="searchbar">
                <SearchBar  className="searchbar"
                            searchfn={ searchfn }
                            style={{ marginBottom: 100 }} />
            </Header>
            <Content className="content">
                <div>
                    <Row justify="center">
                        {movies.map(movie =>
                            <Movies className='movies_container'
                                    key={movie.id} {...movie} />
                        )}
                    </Row>
                </div>
            </Content>
            <Footer className="footer">
                RandomMovieGenerator @2021 / Search
            </Footer>
        </Layout>
        // <div className="search">
        //     <SearchBar  searchfn={ searchfn }
        //                 style={{ marginBottom: 100 }} />
        //     <div classname='movies_container'
        //         style={{ marginBottom: 12 }}>
        //         <Row justify="center">
        //             {movies.map(movie =>
        //                 <Movies className='movies_container'
        //                         key={movie.id} {...movie} />
        //             )}
        //         </Row>
        //     </div>
        // </div>
    )
}

export default Search
