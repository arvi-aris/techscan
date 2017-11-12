import React from 'react';
import ReactDOM from 'react-dom';
import TechScanHeader from './techScanHeader.js';
import RepoList from './repoList.js';
import RepoInfo from './repoInfo.js';
import RepoOwner from './repoOwner.js';
import NotFound from './NotFound.js';
import {Link,Route,Switch,Redirect} from 'react-router-dom';

class TechScanHome extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div>
                <header>
                    <Route exact path='*' render={({history,location})  => (
                        <TechScanHeader  history={history} location={location} />
                    )}/>
                </header>
                <main>
                    <Switch>
                        <Route path="/" exact component={RepoList} />
                        <Route path="/repoList" exact component={RepoList} />
                        <Route path="/:category" exact component={RepoInfo} />
                        <Route path="/:category/:username" component={RepoOwner} />
                        <Route path="*" component={NotFound} />
                        <Redirect to="/" />
                    </Switch>
                </main>
            </div>
        );
    }
}

export default TechScanHome;