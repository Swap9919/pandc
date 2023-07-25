import React from 'react';

const ChildComp = ({ onSubmit }) => {
      return (
            <div>
                  <h2>Child Component</h2>
                  {/* Your child component can have the submit button */}
                  <button onClick={onSubmit}>Submit</button>
            </div>
      );
};

export default ChildComp;
