import React from 'react'

const styles = {
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    width: 100,
    padding: 8,
    fontWeight: 'bold',
    fontSize: 20,
  },
}

const Counter = ({ count, onIncrement, onDecrement }) => (
  <>
    <p style={styles.text}>Count: {count}</p>
    <div>
      <button style={styles.button} onClick={onDecrement}>-</button>
      &nbsp;&nbsp;&nbsp;
      <button style={styles.button} onClick={onIncrement}>+</button>
    </div>
  </>
)

export default Counter