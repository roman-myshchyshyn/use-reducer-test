import React, { useReducer } from 'react'

import Counter from './Counter'
import Form from './Form'
import Summary from './Summary'

const styles = {
  container: {
    margin: 24,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
}

const initialState = {
  count: 0,
  firstname: '',
  lastname: '',
}

const actionsMap = {
  increment: state => ({ count: state.count + 1 }),
  decrement: state => ({ count: state.count - 1 }),
  updateFirstname: (state, { firstname }) => ({ ...state, firstname }),
  updateLastname: (state, { lastname }) => ({ ...state, lastname }),
}

const reducer = (state, action) => actionsMap[action.type](state, action)

const Parent = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const { firstname, lastname, count } = state

  const handleIncrement = () => dispatch({ type: 'increment' })
  const handleDecrement = () => dispatch({ type: 'decrement' })

  const handleFirstnameUpdate = firstname => dispatch({ type: 'updateFirstname', firstname })
  const handleLastnameUpdate = lastname => dispatch({ type: 'updateLastname', lastname })

  return (
    <div style={styles.container}>
      <Counter
        count={count}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
      &nbsp;
      &nbsp;
      <Form
        firstname={firstname}
        lastname={lastname}
        onFirstnameUpdate={handleFirstnameUpdate}
        onLastnameUpdate={handleLastnameUpdate}
      />
      <Summary firstname={firstname} lastname={lastname} count={count} />
    </div>
  )
}

export default Parent