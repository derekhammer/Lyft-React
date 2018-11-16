import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Driver from './Driver';
import Rider from './Rider';
import Header from './Header';


function App(){
  var styles = {
  };
  return (
    <div style={styles}>
      <style jsx>{`
        font-family: Helvetica;
      `}</style>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/driver' component={Driver}/>
        <Route path='/rider' component={Rider}/>

      </Switch>
    </div>
  );
}

//App.propTypes = {
//};

export default App;
