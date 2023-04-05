import React, {useContext} from 'react';
import { AuthContext } from './context/auth-context';
import Welcome from './components/Welcome'
import StartGame from './components/StartGame';

function App() {
  const authContext = useContext(AuthContext);

  let content = <Welcome />

  if (authContext.isAuth){
    content = <StartGame/>
  }

  return (
    <div className="App">
      {content}
    </div>
  )
}

export default App
