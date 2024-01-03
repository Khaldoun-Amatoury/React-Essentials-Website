import { useState } from "react"; //everything that starts with use is react hooks
// import componentsImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data";

import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./TabButton.jsx";
import { EXAMPLES } from "./data-with-examples.js";

function App() {
  // here react executes the component's function once and it doesn't repeat the execution so tab content is saved as please click a button and the execution isn't repeated so it won't updated that's why we need to use states
  // states will tell react that data changed and it updates the UI and it is a special function imported from react library called usestates
  // let tabContent = "Please Click A Button";
  //stateArray only contains two elements always
  //the selectedTopic will always be the default or initial value given to useState and the second element set tells react that the function components should be executed again because the default or initial element got changed
  // const [selectedTopic, setSelectedTopic] = useState('components'); //you must call it on top level of the app function so only called inside component functions and they must be called on top level so not nested

  //output content conditionally
  const [selectedTopic, setSelectedTopic] = useState(); //selectedTopic is null here

  function handleSelect(selectedButton) {
    //selectedButton => 'components', 'jsx' , 'props', 'state'
    // console.log(selectedButton);
    // tabContent = selectedButton;

    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div>
      <Header />
      {/* or */}
      {/* <Header></Header> */}
      <main>
        {/* in css there is core concept id selector */}
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* If I comment out an object in core concepts array in data.js then this will break my code of I don't output the list dynamically like i'm doing below with using map */}
            {/* Outputting list data dynamically */}
            {/* you should use the key prop as the value of it uniquely identifies a list item and it is used by react to dynamically render and update this list */}
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}

            {/* props lets you add custom attributes to custom components and its up to you what attributes you want to set and the concept of configuring components is called prop */}
            {/* <CoreConcept
              title="Components"
              description="The core UI building block"
              img={componentsImg}
            /> */}

            {/* <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            /> */}
            {/* thise code gives us same result as above code but shorter */}
            {/* <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/* Instead of putting several li tags and inside li tags button tags for the menu, we can do them as components */}
            {/* we could've also put a tabutton component but with a attribute of label and value components and then in tabbutton component function we pass label as a prop it would have been the same */}
            <TabButton
              isSelected={selectedTopic == "components"}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic == "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic == "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic == "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButton>
            {/* And this way of building Components where your Components can wrap other Components or other content is called component composition. */}
          </menu>
          {/* Dynamic Content, content appears based on what button pressed, updating dynamic content, listening to clicks */}
          {/* {selectedTopic} */}
          {/* Output content conditionally either show the p below if we don't have selected topic or if we have output */}
          {/* selectedTopic === undefined or !selectedTopic not selected Topic same meaning and the ternary operator which is ? : means if no selectedTopic initial then output please select a topic and if not then output null */}

          {/* {!selectedTopic && <p>Please select a topic.</p>}
          {selectedTopic && (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )} */}

          {/* either you can make it withb ternary operators ? : or amperscend && which means if before && is true then execute the after the && or you can use last alternative which is a variable like tabcontent and the if statement*/}

          {/* {!selectedTopic ? (
            <p>Please select a topic.</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )} */}
          {/* better approach to take the variable alternative than the above two operations because it is smaller and simple just use variable and if statment */}

          {tabContent}
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
