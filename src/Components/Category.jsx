import { useEffect, useState } from "react"
import DropDown from '../Components/DropDown'

const Category = (props) => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        // fetch array of all categories
        fetch('http://localhost:3001/categories')
            .then(foundCategories => foundCategories.json())
            .then(categories => setCategories(categories))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="category-container">
            <h1>Categories</h1>
            <DropDown options={categories} setId={ props.changeCategoryId } />
        </div>
    )  
}

export default Category