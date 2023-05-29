import React from 'react'

const Search = ({setSearch}) => {
  return (
    <input type="text" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-red-300 rounded-lg bg-gray-50 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500-500 dark:focus:border-gray-500" placeholder="Search ..." 
    onChange={({currentTarget:input})=>setSearch(input.value)}
    />
  )
}

export default Search