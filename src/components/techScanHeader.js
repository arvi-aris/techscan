import React from 'react';
import AppBar from 'material-ui/AppBar';
import Search from 'material-ui/svg-icons/action/search';
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';
import Home from 'material-ui/svg-icons/action/home';
import Back from 'material-ui/svg-icons/hardware/keyboard-backspace';
import Profile from 'material-ui/svg-icons/social/person';

const iconStyles = {
      'margin-right' : '4px',
      'margin-left' : '5px',
    'margin-bottom' : '-8px',
    'cursor' : 'pointer'
};

const headerStyle = {
    'background-color' : 'rgb(15, 5, 96)'
}

const hintStyle = {
    color: 'rgb(187, 221, 232)'
}

class TechScanHeader extends React.Component {

    search(){
      var searchTxt = document.getElementById('searchTxt').value;
      this.props.history.push('/repoList');
      setTimeout(() => {
          this.props.history.push(searchTxt)
      },100);
    }

    goBack(){
        var currentLocation = this.props.location.pathname.split('/');
        (currentLocation.length > 1) ? currentLocation.splice(currentLocation.length-1,1).push('/') : currentLocation;
        currentLocation = currentLocation.join("");
        this.props.history.push('/');
        this.props.history.push(currentLocation);
    }

    navigateToHome(){
        this.props.history.push('/');
    }

    render() {     
         let searchIcon = <div>
                        <a href="https://www.linkedin.com/in/aravindh-nagarajan-58b91191/" target="_blank"> <Profile color="white" className="material-icons" style={iconStyles} /> </a>
                        <Home color="white" toolTip="Home" className="material-icons" style={iconStyles} onClick={this.navigateToHome.bind(this)}/>
                        <Back color="white" Tooltip="Back" className="material-icons" style={iconStyles} onClick={this.goBack.bind(this)}/>
                        <Search color="white" className="material-icons" style={iconStyles}/><TextField
                        hintText="Search here.. (Repositaryname)"
                        id="searchTxt"
                        type="search"
                        color="white"
                        inputStyle={{color: 'white'}}
                        hintStyle={hintStyle}
                        onChange ={this.search.bind(this)}
                        /></div>;                  
        return (
            <div>
                <AppBar
                    title="Nutanix challenge :: TechScan"
                    iconElementRight = {searchIcon}
                    style={headerStyle}
                />
                
            </div>
        )
    }
}

export default TechScanHeader;