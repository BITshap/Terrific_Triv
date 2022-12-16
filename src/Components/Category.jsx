import { useEffect, useState } from "react"
import DropDown from '../Components/DropDown'

const Category = (props) => {
    const [categoryId, setCategoryId] = useState('')
    const [categories, setCategories] = useState([])

    useEffect(() => {
        // fetch array of all categories
        fetch('http://localhost:3001/categories')
            .then(foundCategories => foundCategories.json())
            .then(categories => setCategories(categories))
            .catch(err => console.log(err))
    }, [])

    // activate when dropdown menu option when selected
    const handleSelect = (e) => {
        e.preventDefault()
        // set category id value to be passed to <Quiz /> as a prop
        setCategoryId(e._id)
    } 
console.log(categoryId);
    return (
        <div className="category-container">
            <h1>Categories</h1>
            <DropDown options={categories} setId={ setCategoryId } />
        </div>
    )  
}

export default Category