import React, { useState } from 'react';
import ChildComp from './ChildComp';

const ParentComp = () => {
      const [formState, setFormState] = useState({
            firstName: '',
            lastName: '',
            email: '',
      });

      const handleInputChange = (event) => {
            const { name, value } = event.target;
            setFormState({
                  ...formState,
                  [name]: value,
            });
      };

      const handleFormSubmit = () => {
            // Handle the form submission logic here, using the formState data.
            // For this example, we are just logging the form data.
            console.log('Form submitted:', formState);
      };

      return (
            <div>
                  <h1>Parent Component</h1>
                  <form>
                        <div>
                              <label>First Name:</label>
                              <input type="text" name="firstName" value={formState.firstName} onChange={handleInputChange} />
                        </div>
                        <div>
                              <label>Last Name:</label>
                              <input type="text" name="lastName" value={formState.lastName} onChange={handleInputChange} />
                        </div>
                        <div>
                              <label>Email:</label>
                              <input type="email" name="email" value={formState.email} onChange={handleInputChange} />
                        </div>
                  </form>
                  {/* Pass the submit function to the child component */}
                  <ChildComp onSubmit={handleFormSubmit} />
            </div>
      );
};

export default ParentComp;
