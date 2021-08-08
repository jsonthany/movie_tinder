import { Card, Button } from 'antd';
import { CloseCircleOutlined, HeartTwoTone, YoutubeOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import Youtube from 'react-youtube';

const IMG_API = "https://image.tmdb.org/t/p/w1280";


const Movie = ( { id, title, poster_path, overview, vote_average, release_date, generateRandomMovie, randomItemNumber } ) => {

    const monthNames = ["January", "February", "March", "April", "May","June","July", "August", "September", "October", "November","December"];
    const newDate = new Date(release_date);
    const [month, day, year] = [newDate.getMonth(), newDate.getDate(), newDate.getFullYear()];

    const onClickLike = () => {
        generateRandomMovie();
        console.log(randomItemNumber);
    }

    return (
        <div className='card_container'>
            <img    src={IMG_API + poster_path} 
                    alt={title} />

            <Card
                style={{ width: '100%', height: '100%' }}
                actions={[
                    <Button type="primary" danger shape="circle" icon={<CloseCircleOutlined />} size="large" />,
                    <Button type="link" shape="circle" icon={<HeartTwoTone twoToneColor='#eb2f96' style={{ fontSize: '150%'}} />} size="large" />,
                    <Button type="primary" shape="circle" icon={<CheckCircleOutlined />} size="large" onClick={onClickLike} />,
                ]}
            >
                <Card   className="card_info"
                        title={title}
                        bordered={false}
                        style={{ width: '100%', height: '385px' }}>
                    <p><b>Release Date: </b>{monthNames[month]} {day}, {year}</p>
                    <p><b>Rating:</b> {vote_average}</p>
                    
                    <p>
                        <b>Overview: </b>
                        {overview}
                    </p>
                    <p>
                        <YoutubeOutlined />
                        YouTube Video Here
                        <br />
                        {title}
                        {id}
                        {/* <YouTube
                            videoId={}
                        /> */}
                    </p>
                </Card>
            </Card>
        </div>
    )
}

export default Movie
