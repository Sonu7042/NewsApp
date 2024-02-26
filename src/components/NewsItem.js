import React from 'react'

const NewsItem = (props) => {
    const{image, title, description, url,author}=props

    return (
        <div className="container my-4">
        <div className="card" >
            <img src={!image?"https://c4.wallpaperflare.com/wallpaper/297/22/531/lake-blue-moonlight-moon-wallpaper-preview.jpg":image} className="card-img-top" alt='' />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">{author}</p>

                <a href={url} className="btn btn-primary">More News</a>
            </div>
        </div>
        </div>
    )
}

export default NewsItem