import React, { useState } from 'react';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Index = () => {
  const [selectedClasses, setSelectedClasses] = useState<string[]>([]);
  const toggleClass = (className: string): void => {
    const indexOfClass = selectedClasses.indexOf(className);
    if (indexOfClass > -1) {
      selectedClasses.splice(indexOfClass, 1);
      setSelectedClasses([...selectedClasses]);
    } else {
      setSelectedClasses([...selectedClasses, className]);
    }
  };

  const combinedClassName = selectedClasses.reduce((acc, curr) => `${acc} ${curr}`, '');

  return (
    <Main
      meta={(
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      )}
    >
      <div>
        <div className="flex">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              toggleClass(event.target['class-input'].value);
            }}
            style={{ marginRight: 25 }}
          >
            <input name="class-input" />
            <button type="submit">Submit</button>
          </form>
        </div>
        <br />
        {selectedClasses.map((aClassName) => (
          <button
            onClick={() => toggleClass(aClassName)}
            className="inline bg-gray-300 rounded-2xl"
            type="button"
          >
            <span className="tag-remove inline-block pl-5 pr-2 m-1 text-center">
              {aClassName}
                &nbsp;&nbsp;&nbsp;
              <span style={{ fontSize: '15px' }}>&#10060;</span>
            </span>
          </button>
        ))}
        <br />
        <br />
        <div className={`${combinedClassName} transition-all`} style={{ width: '100%', transitionDuration: '1000ms' }}>
          This is some sample text. This is also sample text, believe it or not. Finally, one more
          bit of sample text. Really creative, huh?
        </div>
      </div>
    </Main>
  );
};
export default Index;
