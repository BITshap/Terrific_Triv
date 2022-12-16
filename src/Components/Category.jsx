import { useEffect, useState } from "react"

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

    return (
        <div>
            <p>Categories</p>
        </div>
    )  
}

export default Category