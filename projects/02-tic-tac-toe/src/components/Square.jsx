//crar un componente donde nos indica lo que se necesita para crear los cuadrados del triqui
export const Square =  ({children, isSelected, updateBoard, index}) => {
    const className=`square ${isSelected ? 'is-selected' : ''}`
  
    const handleClick = () => {
      updateBoard(index)
    }
      
    return(
      <div onClick={handleClick} className={className}>
        {children}
      </div>
    )
  }