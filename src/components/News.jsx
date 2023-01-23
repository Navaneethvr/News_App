import axios from 'axios'
import React, {useEffect, useState} from 'react'
import LoadingScreen from './LoadingScreen'
import Navbar from './Navbar'

const News = () => {
  var [newsData,setData] =useState([])

  var [isLoading,setLoad] = useState(true)
  useEffect(
    ()=>{
      fetchNewsFromApi()
    },[]
  )

  var apiLink ="https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=e85028d0e13f4bea9853b6e501d509de"
  const fetchNewsFromApi=()=>{
    axios.get(apiLink)
    .then(
      (response)=>{
        console.log(response.data.articles)
        setData(response.data.articles)
        setLoad(false)
      }
    )
    .catch(
     
    )
  }
  return (
    <div>
      <Navbar />
      
      {isLoading==true ? (<LoadingScreen/>) : (
        <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row" g-3>
              
              {/* card starts here */}
              {newsData.map(
                (item,key)=>{
                  return <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <div class="card mb-3" >
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img src={item.urlToImage} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">{item.title}</h5>
                        <p class="card-text">{item.description}</p>
                        <p class="card-text"><small class="text-muted">{item.author}</small></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                }
              )}
             
              
              {/* card ends here */}
              
            </div>
           
          </div>
        </div>
      </div>
      )}
    </div>

  )
}

export default News