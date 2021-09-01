import React from 'react'
import NewBooks from './NewBooks'


const Home = () => {
    return (
        <>
            <div className="Home_main">
                <div className="header">
                    <h1 style={{color:'white' , paddingTop:'100px' , fontWeight:'700'}}>
                        React Book Store</h1>
                    <p>Find Your Favorite Books Online</p>
                </div>

                <NewBooks />

            </div>


        </>
    )
}

export default Home
