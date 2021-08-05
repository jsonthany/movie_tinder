import { Tag, Divider, Card, Avatar, Button, Row } from 'antd';
import { CloseCircleOutlined, YoutubeOutlined, CheckCircleOutlined } from '@ant-design/icons';

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const Movie = ( { title, poster_path, overview, vote_average, release_date } ) => {

    const monthNames = ["January", "February", "March", "April", "May","June","July", "August", "September", "October", "November","December"];
    const newDate = new Date(release_date);
    const [month, day, year] = [newDate.getMonth(), newDate.getDate(), newDate.getFullYear()]

    return (
        <div className='card_container'>
            <img    src={IMG_API + poster_path} 
                    alt={title} />

            <Card
                style={{ width: '100%', height: '100%' }}
                actions={[
                    <Button type="primary" danger shape="circle" icon={<CloseCircleOutlined />} size="large" />,
                    <Button type="link" shape="circle" icon={<YoutubeOutlined style={{ fontSize: '150%', color: 'red'}} />} size="large" />,
                    <Button type="primary" shape="circle" icon={<CheckCircleOutlined />} size="large" />,
                ]}
            >
                <Card   className="card_info"
                        title={title}
                        bordered={false}
                        style={{ width: '100%', height: '385px' }}>
                    <p><b>Release: </b>{monthNames[month]} {day}, {year}</p>
                    <p><b>Rating: </b>{vote_average}</p>
                    <p>
                        <b>Overview: </b>
                        {overview}
                    </p>
                </Card>
            </Card>
        </div>
    )
}

export default Movie
