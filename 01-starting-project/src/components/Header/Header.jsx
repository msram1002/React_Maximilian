// Import images and load them - setting attributes dynamically
import reactImg from '../../assets/react-core-concepts.png';
import './Header.css';
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

// Custom Component Header used in App function
// Default export used by using the keyword default
export default function Header() {
  const description = reactDescriptions[genRandomInt(2)]
  return (
    <header>
      {/* <img src="src/assets/react-core-concepts.png" alt="Stylized atom" /> */}
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      {/* Static Content */}
      {/* <p>
        Fundamental React concepts you will need for almost any app you are
        going to build!
      </p> */}
      {/* Output Dynamic Content */}
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  )
}