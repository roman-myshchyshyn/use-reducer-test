import React from 'react'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: 272,
  },
}

const Summary = ({ firstname, lastname, count }) => (
  <div style={styles.container}>
    &nbsp;
    <b>Summary:</b>
    <p>
      Count for {firstname || '[First]'} {lastname || '[Last]'} is {count}
    </p>
  </div>
)

export default Summary
