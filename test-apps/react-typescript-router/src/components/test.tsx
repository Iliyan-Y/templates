import * as React from 'react';

type TestProps = {
  title: string;
  paragraph: string;
};
const TestComponent = ({ title, paragraph }: TestProps) => {
  return (
    <div>
      <h1>Hello from REACT Typescript on port 4567</h1>
      <h3>I'm : {title}</h3>
      <p>{paragraph}</p>
    </div>
  );
};

export default TestComponent;
