// import componentImg from './assets/components.png';
// We would use data.js to load the content
// named export so we use {}
import { useState } from 'react';
import { CORE_CONCEPTS } from './data';
import { EXAMPLES } from './data';
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';

// ########## Regular way of passing props ##########
// function CoreConcept(props) {
//   return (
//     <li>
//       <img src={props.image} alt={props.description} />
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   )
// }

function App() {
  // component specific state, which when changed, UI gets updated
  const [selectedTab, setTab] = useState();

  function handleSelect(selectedButton) {
    // passing custom parameter using arrow function
    setTab(selectedButton);
  }
  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* Set props */}
            {/* For Passing strings we use quotes */}
            {/* <CoreConcept 
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept 
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[1].image}
            />
            <CoreConcept 
              title={CORE_CONCEPTS[2].title} 
              description={CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[2].image}
            />
            <CoreConcept 
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image}
            /> */}
            {/* Rather writing complex code, use spread syntax to break down the key value pairs  */}
            {/* <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}
            {/* Dynamically Output content using map function   */}
            {CORE_CONCEPTS.map((item) => (
              <CoreConcept key={item.title} {...item} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTab === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTab === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTab === 'props'}onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTab === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {/* Dynamic Content displayed based on Tab Click */}
          {/* <h2>{selectedTab}</h2> */}
          {/* Rendering Content Conditionally */}
          {/* Use Ternary */}
          {!selectedTab ? <p id='tab-content'>Please select a tab</p> : (
            <div id='tab-content'>
              <h3>{EXAMPLES[selectedTab].title}</h3>
              <p>{EXAMPLES[selectedTab].description}</p>
              <pre>
                <code>
                  {EXAMPLES[selectedTab].code}
                </code>
              </pre>
            </div>
          )}
          {/* or use && */}
          {/* {!selectedTab && <p id='tab-content'>Please select a tab</p>} */}
          {/* or use a variable to have lean JSX code */}
          {/* let tabContent = <p id='tab-content'>Please select a tab</p>;
          if (selectedTab)
            tabContent = (<div id='tab-content'>...</div>) */}
        </section>
      </main>
    </div>
  );
}

export default App;