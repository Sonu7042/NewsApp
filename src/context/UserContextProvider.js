import React, { useState } from "react";
import UserContext from "./UserContext";


const UserContextProvider = ({ children }) => {
  const [userValue, setUserValue] = useState([]);

  const [page, setPage] = useState(1)
  const [totalResult, setTotalResult] = useState(0)

  const [loading,setloading]=useState(true)





  const updateData = async () => {
    const url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=c814e20ddba2485c848f9b0223c4c487&page=1&pageSize=10"
    const data = await fetch(url)
    const parseData = await data.json()
    setUserValue(userValue.concat(parseData.articles))
    setloading(false)
  }


  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c814e20ddba2485c848f9b0223c4c487&page=${page + 1}&pageSize=${10}`
    setPage(page + 1)
    const data = await fetch(url)
    const parseData = await data.json()
    setUserValue(userValue.concat(parseData.articles))
    setTotalResult(parseData.totalResult)
    
  }






  return (
    <UserContext.Provider value={{ userValue, setUserValue, updateData, fetchMoreData,totalResult,loading,setloading}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
