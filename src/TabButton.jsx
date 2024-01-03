// export default function TabButton(props) {
//   return <li><button>{props.children}</button></li>
// }

// this children prop simply refers to the content between your opening and closing tags and it is built in

export default function TabButton({ children, onSelect, isSelected }) {
  //you can name onclick whatever you want, children is built in you can't change it as prop

  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
