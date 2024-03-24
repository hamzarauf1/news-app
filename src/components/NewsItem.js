import React from 'react'

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } =props;
    return (
        <div className='my-3'>
            <div className="card">
                <img src={!imageUrl ? "https://www.reuters.com/resizer/FsBzH5wo8_bF4zyQr-ymgkHd20k=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/7J3XR2YX3BLRXOZPPZ6XKGEKCU.jpg" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}...
                        <span className=" badge rounded-pill bg-danger" >{source}</span>
                    </p>

                    <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem
