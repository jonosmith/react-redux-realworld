import { applyMiddleware, createStore as reduxCreateStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducer'
import saga from './sagas'

export default function createStore() {
  const sagaMiddleware = createSagaMiddleware()
  const middlewares = applyMiddleware(sagaMiddleware)

  const store = reduxCreateStore(rootReducer, composeWithDevTools(middlewares))

  sagaMiddleware.run(saga)

  return store
}
