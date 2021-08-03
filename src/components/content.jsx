import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Dashboard from './dashboard'
import Contacts from './contacts'
import Schedule from './schedule'
import Tasks from './tasks'
import Reports from './reports'
import Topup from './topup'
import Profile from './profile'


const Content = () => {
    return ( 
        <Switch>
             <Route path="/" exact component={Dashboard}/>
             <Route path="/contacts" exact component={Contacts}/>
              <Route path="/schedule" exact component={Schedule}/>
              <Route path="/tasks" exact component={Tasks}/>
              <Route path="/reports" exact component={Reports}/>
              <Route path="/topup" exact component={Topup}/>
               <Route path="/profile" exact component={Profile}/>
        </Switch>
     );
}
 
export default Content;