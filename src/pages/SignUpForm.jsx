import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SignUpForm = ({
  onSubmit,
  onChange,
  errors,
  user,
}) => (
  <div className="container">
    <form action="/" onSubmit={onSubmit}>
      <h2 className="card-heading">Sign Up</h2>

      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="field-line">
        <input
          floatingLabelText="Name"
          name="name"
          errorText={errors.name}
          onChange={onChange}
          value={user.name}
        />
      </div>

      <div className="field-line">
        <input
          floatingLabelText="Email"
          name="email"
          errorText={errors.email}
          onChange={onChange}
          value={user.email}
        />
      </div>

      <div className="field-line">
        <input
          floatingLabelText="Password"
          type="password"
          name="password"
          onChange={onChange}
          errorText={errors.password}
          value={user.password}
        />
      </div>

      <div className="field-line">
        <input
          floatingLabelText="Address"
          name="address"
          onChange={onChange}
          errorText={errors.address}
          value={user.address}
        />
      </div>

      <div className="field-line">
        <input
          floatingLabelText="Age"
          name="age"
          onChange={onChange}
          errorText={errors.age}
          value={user.age}
        />
      </div>

      <div className="field-line">
        <input
          floatingLabelText="Avatar"
          name="avatar"
          onChange={onChange}
          errorText={errors.avatar}
          value={user.avatar}
        />
      </div>

      <div className="button-line">
        <button type="submit" label="Create New Account" primary> </button>
      </div>

      <div>Already have an account? <Link to={'/login'}>Log in</Link></div>
    </form>
  </div>
);

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default SignUpForm;
