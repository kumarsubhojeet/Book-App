import React , {useState} from "react";


export default function BookById_details(props) {
  const { result  } = props;

  return (
    <div>
      <div className="container-fluid">
        <div className="container">
            <div className="bookID">
                
                <div className="book_img">
                    <a href={result.url} target="_blank" without rel="noreferrer">
                        <img src={result.image} className="img_detail_book" alt="Error" />
                        </a>
                </div>

                <div className="details">
                    <h1 style={{fontWeight: '700'}}>{result.title}</h1>
                    <h6>{result.subtitle}</h6>

                    <hr />

                    <h3>Authon: {result.authors}</h3>
                    <h3>Publisher: {result.publisher}</h3>
                    <h3>language: {result.language}</h3>

                    <hr />
                    <h5 style={{color: '#0e6655' , fontWeight: '700'}}>{result.price}</h5>
                    <h5>Pages: {result.pages}</h5>
                    <h5>Year: {result.year}</h5>
                    <h5>Rating: {result.rating}</h5>
                    <h5>Isbn: {result.isbn13}</h5>

                </div>
            
            
            </div>
            <hr />
            
            <div className="description">
                <h4 style={{fontWeight: '700'}}>Description</h4>
                <h6 style={{fontSize: '18px'}}>{result.desc}</h6>
            </div>

          
        </div>
      </div>
    </div>
  );
}
