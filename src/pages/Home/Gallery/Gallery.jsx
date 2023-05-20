import React, { useEffect, useState } from 'react';

const Gallery = () => {
    const[gallery, setGallery]= useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/')
        .then(res=>res.json())
        .then(data=>setGallery(data))
    },[])
    return (

        
        <div>
            <h1 className='text-center text-6xl'>Gallery</h1>
            <div className='grid grid-cols-4 gap-4 m-6'>
            {
            gallery.map(gall=> <img src={gall.toyImage}></img>)
           }
            </div>
           
            

            
        </div>
    );
};

export default Gallery;