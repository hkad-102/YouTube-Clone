import { useEffect } from "react";
import { createContext, useState } from "react";
import { fetchDataFromApi } from '../utils/api'

export const Context = createContext();

export const AppContext = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('New');
    const [mobileMenu, setMobileMenu] = useState(false);
    
    useEffect(() => {
      fetchSelectedCategoryData(selectedCategory);
    }, [selectedCategory])

    const fetchSelectedCategoryData = (query) => {
        setLoading(true); //when we are searching something show the loader
        fetchDataFromApi(`search/?q=${query}`).then(({contents}) => {
            console.log(contents)
            setSearchResults(contents)
            setLoading(false); //and when we get the data stop showing the loader
        })
    }

    

    return (
        <Context.Provider value={{
            loading, setLoading,
            searchResults, setSearchResults,
            selectedCategory, setSelectedCategory,
            mobileMenu, setMobileMenu
        }}>
            {children}
        </Context.Provider>
    )
}