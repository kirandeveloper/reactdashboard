import React, { useRef } from 'react';

const FormunControl = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;
    // Handle form submission logic here, such as sending the data to a server
    console.log('Submitted data:', { name, email, message });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Un control</h3>
      <div>
        <label>
          Name:
          <input type="text" ref={nameRef} className="form-control" />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input type="email" ref={emailRef} className="form-control" />
        </label>
      </div>
      <div>
        <label>
          Message:
          <textarea ref={messageRef} className="form-control" />
        </label>
      </div>
      <button type="submit" className="btn btn-success">Submit</button>
    </form>
  );
};

export default FormunControl;
