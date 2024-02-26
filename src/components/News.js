import React, { useContext, useEffect } from 'react'
import NewsItem from './NewsItem'
import UserContext from '../context/UserContext'
import InfiniteScroll from 'react-infinite-scroll-component'
import Spinner from './Spinner'



const News = () => {
    const { userValue, updateData ,fetchMoreData,totalResult,loading } = useContext(UserContext)
    

    useEffect(() => {
        updateData()
        // eslint-disable-next-line
    }, [])






    return (
        <>
            <h1 className='my-2' style={{textAlign:"center",fontWeight:"bold"}}>News MonkeyApp</h1>
            {loading && <Spinner/>}

            <InfiniteScroll
                dataLength={userValue.length} //This is important field to render the next data
                next={fetchMoreData}
                hasMore={userValue.length!==totalResult}
                loader={ <Spinner/>}

              >

            <div className='row my-4'>
                {userValue.map((element) => {
                    return <div className='col-md-4' key={element.url}>
                        <NewsItem image={element.urlToImage} title={element.title} description={element.description} author={element.author} url={element.url} />
                    </div>
                })}

            </div>
            </InfiniteScroll>
        </>

    )
}

export default News