import React from 'react'

export default function SearchDetails(props) {
    const {resultbooks} = props
    return (
        <div>
            <div className="container-fluid">
                <div className="container">
            <div className="row">
                {
                    resultbooks.map(book => (
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
        </div>
        </div>
         </div>
    )
}
