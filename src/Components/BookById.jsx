import React ,{useState} from 'react'
import axios from 'axios'
import BookByIddetails from '../Components/BookById_details'



export default function BookById() {
    const [searchbook , setsearch] = useState()
    const [result , setresult] = useState([])

  

    const btnClick = async() =>{
        try {
            const res = await axios.get(`https://api.itbook.store/1.0/books/${searchbook}`)
            setresult(res.data);
            
          
        } 
        catch (error) {
            console.log(error);
        }
    }

    return (
        <>
             <div className="Home_main">
                <div className="header_BookById">
                    <h1 style={{color:'white' , paddingTop:'100px' , fontWeight:'700'}}>
                        Search Specific Book</h1>
                        <div className="input_search">
        <div class="input-group mb-3">
            
            <input
            value={searchbook}
            onChange={(e)=>setsearch(e.target.value)}
           style={{textAlign: "center" , fontSize:'17px'}}
              type="text"
              class="form-control"
              placeholder="Enter ISBN No. Please"
              required
            />
            
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" onClick={btnClick}  type="button">
                Button
              </button>
            </div>
          
          </div>
        </div>
                    <p>Find Your Favorite Books By ISbn No.</p>
                </div>

            </div>

            <BookByIddetails result={result} />
        </>
    )
}
