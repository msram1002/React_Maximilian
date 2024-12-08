import { useState } from 'react';
import { EXAMPLES } from '../data';
import TabButton from './TabButton';
import Tabs from './Tabs';
import Section from './Section';

export default function Examples() {
  const [selectedTab, setTab] = useState();

  function handleSelect(selectedButton) {
    setTab(selectedButton);
  }

  return (
    <Section id="examples" title="Examples">
      {/* Content to be displayed as per above Tab Selection */}
      <Tabs
        tabButtonsContainer="menu"
        // If we need to pass our own component
        // tabButtonsContainer={Section}
        tabButtons={
          <>
            <TabButton isSelected={selectedTab === 'components'} onClick={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTab === 'jsx'} onClick={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTab === 'props'}onClick={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTab === 'state'} onClick={() => handleSelect('state')}>State</TabButton>
          </>
        }
      >
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
      </Tabs>
    </Section>   
  )
}