export default function TabButton({children, onSelect, isSelected}) {
  // function handleClick() {
  //   console.log("Hello");
  // }

  return (
    <li>
      {/* <button onClick={handleClick}>{props.children}</button> */}
      <button className={isSelected ? 'active' : ''} onClick={onSelect}>{children}</button>
    </li>
  )
}

