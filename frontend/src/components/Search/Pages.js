import React, { Component } from 'react';
import { Row, Layout, Pagination } from 'antd';

export default class Product extends Component {

    state = {
        current: this.props.pageNumber,
    }

    onChange = (page) => {
        this.setState({
            current: page,
        });
        this.props.changePageNumber(page);
    }

    render() {
        return(
            <div>
                <Pagination 
                    current={ this.props.pageNumber }
                    pageSize={10} 
                    showSizeChanger={false} 
                    total={this.props.maxPages} 
                    onChange={this.onChange}/>
            </div>
        )
    }
}