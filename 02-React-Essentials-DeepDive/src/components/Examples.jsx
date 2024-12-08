import { useState } from 'react';
import { EXAMPLES } from '../data';
import TabButton from './TabButton';

export default function Examples() {
  const [selectedTab, setTab] = useState();

  function handleSelect(selectedButton) {
    setTab(selectedButton);
  }

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton isSelected={selectedTab === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
        <TabButton isSelected={selectedTab === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
        <TabButton isSelected={selectedTab === 'props'}onSelect={() => handleSelect('props')}>Props</TabButton>
        <TabButton isSelected={selectedTab === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
      </menu>
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
    </section>   
  )
}