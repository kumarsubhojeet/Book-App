import React , {useState , useEffect} from 'react'
import axios from 'axios'
import { BackTop } from 'antd';


export default function NewBooks() {

    const style = {
        height: 40,
        width: 40,
        lineHeight: '40px',
        borderRadius: 50,
        backgroundColor: '#6c3483',
        color: '#fff',
        textAlign: 'center',
        fontSize: 14,
      };
    

    const [Nbook , setBooks] = useState([])

    const Nbooks = async()=>{
        try {
            const res = await axios.get(`https://api.itbook.store/1.0/new`)
            setBooks(res.data.books);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
       Nbooks();
    }, [])


    return (
        <div>
            <h1 style={{textAlign: 'center' , fontWeight: 'bold' , color: ' #1a5276 ', fontFamily:'vardana'}}>New Books</h1>
            <div className="container-fluid">
                <div className="container">
            <div className="row">
                    {
                        Nbook.map(book=>(
                            <div className="col-md-4">
                          <a href={book.url} target="_blank" without rel="noreferrer" style={{textDecoration:'none'}}> 
                          <div className="card" style={{margin:'5px auto' , textAlign:'center'}}>
                                <div className="card-img">
                                    <img src={book.image} alt="Error" />
                                </div>

                                <div className="card-body">
                                    <h1>{book.title}</h1>
                                    <h5 style={{color:' #0e6655 '}}>{book.price}</h5>
                                    <h6>ISBN NO. {book.isbn13}</h6>
                                    <p style={{color:' #273746 '}}>{book.subtitle}</p>

                                </div>
                            </div>
                          </a>
                            </div>
                        ))
                    }
                </div>
            </div></div>

            <BackTop>
      <div style={style}><i class="fas fa-angle-up"></i></div>
    </BackTop>
        </div>
    )
}
