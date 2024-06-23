import React from 'react'

const CategoryButtons = ({name, className, onClick}) => {
  return (
    <span onClick={onClick} className={`${className} bg-gray-200 hover:bg-gray-300 rounded-lg font-semibold py-2 px-3 mx-2 block`}>{name}</span>
  )
}

export default CategoryButtons
