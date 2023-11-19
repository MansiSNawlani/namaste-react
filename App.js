import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement('h1', { id: 'heading' }, 'Namaste React');
console.log(heading);

const jsxHeading = (
  <h1 className='head' tabIndex='1'>
    Namaste React using JSX
  </h1>
);

console.log(jsxHeading);

const Title = () => (
  <h1 className='head' tabIndex='5'>
    Namaste React using JSX (Title)
  </h1>
);

const Title2 = function () {
 return (
  <h1 className='head' tabIndex='5'>
     Namaste React using JSX (Title) - normal function aslo works!
  </h1>
 )
}

const HeadingComponent1 = () => (
  <div className='container'>
    <Title />
    <h1 className='heading'>Namaste React Functional Component 1</h1>
  </div>
);

const HeadingComponent2 = () => (
  <div>
    <HeadingComponent1 />
    <Title2/>
    {Title()}  {/* way to render component  */}
    {Title2()} {/* Title2 can be rendered multiple times as well  */}
    <h1 className='heading'>Namaste React Functional Component 2</h1>;
  </div>
);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingComponent2 />);
