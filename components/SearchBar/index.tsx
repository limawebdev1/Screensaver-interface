import React from 'react';


interface IProps {
    input: string
    onChange: (EventTarget) => void
}

const SearchBar: React.FC<IProps> = ({input ,onChange}) => {
  return (
    <input 
     className={'w-80 lg:w-80 h-12 bg-gray-900 p-3 border border-gray-600 focus:outline-none absolute md:-mt-20 -mt-16'}
     key="random1"
     value={input}
     placeholder={"Search... "}
     onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default SearchBar