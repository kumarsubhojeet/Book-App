import React , {useState , useEffect} from "react";
import axios from "axios";

import SearchDetails from './SearchDetails'

export default function Search() {
    const [searchbook , setsearch] = useState('')
    const [resultbooks , setresult] = useState([])
    const [page ,setpage] = useState(1)

    const btnClick = async() =>{
       try {
        const res = await axios.get(`https://api.itbook.store/1.0/search/${searchbook}/${page}`)
        setresult(res.data.books);
       } 
       catch (error) {
           console.log(error);
       }
    }


  return (
    <div>
      <div className="Search_main">
        <div className="header_Search">
          <h1
            style={{ color: "white", paddingTop: "100px", fontWeight: "700" }}
          >
            Search Books
          </h1>

        <div className="input_search">
        <div class="input-group mb-3">
            
            <input
            value={searchbook}
            onChange={(e)=>setsearch(e.target.value)}
           style={{textAlign: "center" , fontSize:'17px'}}
              type="text"
              class="form-control"
              placeholder="Ex:-Python, Java, Sql..."
              required
            />
            
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" onClick={btnClick}  type="button">
                Button
              </button>
            </div>
          
          </div>
        </div>
          <p>Find List of Books You Want</p>
        </div>
      </div>
      
      <SearchDetails resultbooks={resultbooks}/>

      
    </div>
    
  );
}
