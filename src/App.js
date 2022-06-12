import React  from 'react';
import LoginForm from  './components/LoginForm';
import Dashboard from './components/Dashboard';


function App() {
  

 
  const [signed, setSigned] = React.useState(false);
  return (
    <div className="App">
      <div className="warpper" >  
        {signed ? <Dashboard />: <LoginForm  setSigned={setSigned}/>}
        {/* login component  */}
       
      </div>
      
    </div>
  );
}

export default App;
