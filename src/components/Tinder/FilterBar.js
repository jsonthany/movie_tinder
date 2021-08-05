import { Select, DatePicker, Button, Slider } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './Tinder.css'
import { useState } from 'react';

const { RangePicker } = DatePicker;
const { Option } = Select;

const FilterBar = () => {

    const [genre, setGenre] = useState();
    const [time, setTime] = useState([new Date('January 1, 1900'), new Date()]);
    const [rating, setRating] = useState([0,10]);

    const handleGenreChange = (value) => {
        setGenre(parseInt(value));
    }

    const onDateChange = (dates, dateStrings) => {
        setTime([dates[0]._d, dates[1]._d]);
    }

    const handleSliderChange = (value) => {
        setRating(value);
    }

    const handleOnClick = () => {
        console.log(genre);
        console.log(time);
        console.log(rating);
    }

    return (
        <>
            <Select
                mode="tag"
                style={{ width: '25%' }}
                placeholder="select genre"
                defaultValue={[]}
                onChange={handleGenreChange}
                optionLabelProp="label"
            >

                <Option value="28" label="Action">
                    Action
                </Option>
                <Option value="12" label="Adventure">
                    Adventure
                </Option>
                <Option value="16" label="Animation">
                    Animation
                </Option>
                <Option value="35" label="Comedy">
                    Comedy
                </Option>
                <Option value="80" label="Crime">
                    Crime
                </Option>
                <Option value="99" label="Documentary">
                    Documentary
                </Option>
                <Option value="18" label="Drama">
                    Drama
                </Option>
                <Option value="10751" label="Family">
                    Family
                </Option>
                <Option value="14" label="Fantasy">
                    Fantasy
                </Option>
                <Option value="36" label="History">
                    History
                </Option>
                <Option value="27" label="Horror">
                    Horror
                </Option>
                <Option value="10402" label="Music">
                    Music
                </Option>
                <Option value="9648" label="Mystery">
                    Mystery
                </Option>
                <Option value="10749" label="Romance">
                    Romance
                </Option>
                <Option value="878" label="Science Fiction">
                    Science Fiction
                </Option>
                <Option value="10770" label="TV Movie">
                    TV Movie
                </Option>
                <Option value="53" label="Thriller">
                    Thriller
                </Option>
                <Option value="10752" label="War">
                    War
                </Option>
                <Option value="37" label="Western">
                    Western
                </Option>

            </Select>

            <RangePicker style={{ width: '25%' }} onChange={onDateChange} />
            <b className="font">
                Rating
            </b>
            <Slider range min={0} max={10} step={0.1} defaultValue={[0, 10]} style={{ width: '20%' }} onChange={handleSliderChange} />
            <Button type="primary" 
                    onClick={handleOnClick}
                    icon={<SearchOutlined />} 
                    style={{ width: '15%' }}>
                Generate Search
            </Button>
        </>
    )
}

export default FilterBar
