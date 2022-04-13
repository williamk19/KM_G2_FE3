import React, {useState, useEffect} from 'react';
import Gif from '../../components/gif.component';



const Trend = () => {
    const [trend, setTrend] = useState({});

    useEffect(() => {
        const url = `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_GIPHY_KEY}&limit=25&rating=g`;
        fetch(url)
            .then((res) => res.json())
            .then(data => {
                setTrend(data);
            });
        console.log(trend);
    });

    return (
        <div className='component-container'>
            {trend.data?.map((gif) => (
                <Gif title={gif.title} url={gif.images.fixed_width.url} key={gif.id} />
            ))}
        </div>
    );
};

export default Trend;