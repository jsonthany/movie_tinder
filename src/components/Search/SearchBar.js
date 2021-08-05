import { Input, Col, Row, Button } from 'antd';
import { useState } from 'react';


const SearchBar = ( { searchfn } ) => {

    const { Search } = Input;
    const [searchTerm, setSearchTerm] = useState('');
    
    const onSubmitHandler = (e) => {
        e.preventDefault();
        
        searchfn(searchTerm);
        setSearchTerm("");
    }

    return (
        <Row>
            <Col span={14} offset={5}>
                <form onSubmit={onSubmitHandler}>
                    <Search
                        className="input"
                        placeholder='Search a film...'
                        enterButton
                        onChange={(e) => setSearchTerm(e.target.value)}
                        />
                </form>
            </Col>
        </Row>
    )
}

export default SearchBar
