import Router from './Router'
import { Provider } from "react-redux";
import store from "./../src/projet14/store/index";
import './index.css'

export default function App() {

  return (
    <>
    <Provider store={store}>
      <Router/>
    </Provider>
    </>
    )
  // )
}
