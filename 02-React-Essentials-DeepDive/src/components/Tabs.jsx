export default function Tabs({tabButtons, children, tabButtonsContainer}) {
  const TabButtonsContainer = tabButtonsContainer;
  return (
    <>
      {/* Making Tabs a bit more flexible, chnage our wrapper elements, not limited to <menu> */}
      <TabButtonsContainer>
        {/* Load Tab Buttons Here */}
        {tabButtons}
      </TabButtonsContainer>
      {/* Tab Content Here */}
      {children}
    </>
  )
  
}