import { Input, Col, Row } from 'antd';
import { useState } from 'react';


const SearchBar = ( { searchfn } ) => {

    const { Search } = Input;
    
    const onSearch = (value) => {
        searchfn(value);
    }

    return (
        <Row>
            <Col span={14} offset={5}>
                <Search
                    className="input"
                    placeholder='Search a film...'
                    enterButton
                    onSearch={onSearch}
                    />
            </Col>
        </Row>
    )
}

export default SearchBar
