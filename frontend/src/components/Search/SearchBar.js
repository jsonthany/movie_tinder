import { Input, Col, Row } from 'antd';
import { useState } from 'react';


const SearchBar = ( { searchfn } ) => {

    const { Search } = Input;
    // const [searchTerm, setSearchTerm] = useState('');
    
    const onSearch = (value) => {
        // value.preventDefault();
        
        // setSearchTerm(value);
        searchfn(value);
        // setSearchTerm("");
    }

    return (
        <Row>
            <Col span={14} offset={5}>
                {/* <form onSubmit={onSubmitHandler}> */}
                <Search
                    className="input"
                    placeholder='Search a film...'
                    enterButton
                    onSearch={onSearch}
                    />
                {/* </form> */}
            </Col>
        </Row>
    )
}

export default SearchBar
