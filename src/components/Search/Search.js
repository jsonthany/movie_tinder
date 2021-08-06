import SearchBar from './SearchBar'
import Movies from './Movies'
import { Row, Layout, Pagination } from 'antd';
import './Search.css';


const Search = ({ searchfn, movies, changePageNumber, pageNumber, moviesRaw }) => {

    const { Header, Footer, Content } = Layout;

    let num = 1;

    const onChange = (pageNum) => {
        changePageNumber(pageNum);
    }

    const getTotalPages = () => {
        return moviesRaw.total_pages * 10;
    }

    const getCurrentPage = () => {
        return moviesRaw.page;
    }

    return (
        <Layout className="search">
            <Header className="searchbar">
                <SearchBar  className="searchbar"
                            searchfn={ searchfn }
                            // resetPageNumber={ resetPageNumber }
                            style={{ marginBottom: 100 }} />
            </Header>
            <Content className="content">
                <Row justify="space-around">
                    {movies.map(movie =>
                        <Movies className='movies_container'
                                key={movie.id} {...movie} />
                    )}
                </Row>
                <br />
                <br />
                <Row justify="center">
                <Pagination defaultCurrent={1} pageSize={10} showSizeChanger={false} showcurrent={getCurrentPage()} total={getTotalPages()} onChange={onChange}/>
                </Row>
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
