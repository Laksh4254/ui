
import React from 'react';
import Dashboard from './Dashboard';
import PieChart from './PieChart';
import Sidebar from './Sidebar';
 
function App(){
 
        return (
            <div>
                
                <div class="container-fluid" id="main">
                 <div class="row row-offcanvas row-offcanvas-left">
                   <Sidebar/>
                  <Dashboard/>
                 
             </div>
            </div>  
            <div className="App">
                    <PieChart />
                  </div>
                
        </div>  

        );
    }
  
export default App