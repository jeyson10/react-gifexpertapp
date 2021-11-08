import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
//import PropTypes from 'prop-types'

const GifExpertApp = props => {

    
    const [categories, setCategories] = useState(['Naruto']);
/*
    const handleAdd = (e) =>{
     
        setCategories([...categories,'Hunter']);

    }
*/
 

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />
                <ol>
                    {
                        categories.map((category) =>

                        <GifGrid 
                        key={category}
                        category={category} />

                        )}
                </ol>
        </div>
    )
}



export default GifExpertApp
