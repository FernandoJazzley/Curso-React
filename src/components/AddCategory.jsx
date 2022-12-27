import { useState } from "react"

export const AddCategory = ( {onNewCategory} ) => {

    const [inputValue, setInpurValue] = useState('');

    const onInputChange = ({target}) =>{

        setInpurValue( target.value);
    }

    const onSubmit = ( event ) =>{
      event.preventDefault();
      if ( inputValue.trim().length <= 1) return;
      //setCategories( categories => [inputValue, ...categories])
      onNewCategory( inputValue.trim() )
      setInpurValue(''); 
      
    }

  return (
    <form onSubmit={(event) => onSubmit(event)}>
        <input 
        type = 'text'
        placeholder= 'Buscar gifs'
        value={inputValue}
        onChange={ onInputChange }
        />
    </form>
  )
}