import React from 'react'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    width: 120,
    display: 'inline-block',
  },
}

const handleTextInputChange = proceed => event => {
  proceed(event.target.value)
}

const Form = ({ firstname, lastname, onFirstnameUpdate, onLastnameUpdate }) => (
  <div style={styles.container}>
    <div>
      <label style={styles.label}>First name: </label>
      <input
        type="text"
        value={firstname}
        onChange={handleTextInputChange(onFirstnameUpdate)}
      />
    </div>
    &nbsp;
    <div>
      <label style={styles.label}>Last name: </label>
      <input
        type="text"
        value={lastname}
        onChange={handleTextInputChange(onLastnameUpdate)}
      />
    </div>
  </div>
)

export default Form
