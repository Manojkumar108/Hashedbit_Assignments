import React, { useState } from 'react';
import './registration.css'


const Registration = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: {
      state: "",
      city: "",
      pin: ""
    },
    password: ""
  });
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const handleAddress = (e) => {
    const { name, value } = e.target;
    setUser(prevState => ({
      ...prevState,
      address: {
        ...prevState.address,
        [name]: value
      }
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User Data:', user);
  };

  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image">
                <img src="/img/img.jpg" alt="" width="600" height="500" />
              </div>
              {/* Registration form */}
              <div className="registration-form">
                <h1 className="main-heading mb-3">Registration Form</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name">Username</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder='Name'
                      required
                      autoComplete='off'
                      value={user.name}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder='Enter your email'
                      required
                      autoComplete='off'
                      value={user.email}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="number"
                      name="phone"
                      id="phone"
                      placeholder='Enter phone number'
                      required
                      autoComplete='off'
                      value={user.phone}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="state">State</label>
                    <input
                      type="text"
                      name="state"
                      id="state"
                      placeholder='Enter State'
                      required
                      autoComplete='off'
                      value={user.address.state}
                      onChange={handleAddress}
                    />
                  </div>
                  <div>
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      placeholder='Enter City'
                      required
                      autoComplete='off'
                      value={user.address.city}
                      onChange={handleAddress}
                    />
                  </div>
                  <div>
                    <label htmlFor="pin">Pin</label>
                    <input
                      type="text"
                      name="pin"
                      id="pin"
                      placeholder='Enter Pin'
                      required
                      autoComplete='off'
                      value={user.address.pin}
                      onChange={handleAddress}
                    />
                  </div>
                  <div>
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder='Enter Password'
                      value={user.password}
                      onChange={handleInput}
                    />
                  </div>
                  <br />
                  <button type="submit" className='btn btn-submit'>Register</button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Registration;
