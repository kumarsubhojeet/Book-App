import React , {useState , useEffect} from "react";
import axios from "axios";
import { BackTop } from 'antd';
import lib from '../img/undraw_Bookshelves_re_lxoy.svg'

import SearchDetails from './SearchDetails'

export default function Search() {

  const style = {
    height: 40,
    width: 40,
    lineHeight: '40px',
    borderRadius: 50,
    backgroundColor: '#1e8449',
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
  };

  
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

    

      <BackTop>
      <div style={style}><i class="fas fa-angle-up"></i></div>
    </BackTop>
    </div>
    
    
  );
}
