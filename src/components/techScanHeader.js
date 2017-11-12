import React from 'react';
import AppBar from 'material-ui/AppBar';
import Search from 'material-ui/svg-icons/action/search';
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';
import Home from 'material-ui/svg-icons/action/home';

const iconStyles = {
      'margin-right' : '4px',
      'margin-left' : '5px',
    'margin-bottom' : '-8px'
};

const headerStyle = {
    'background-color' : 'rgb(5, 86, 96)'
}

const hintStyle = {
    color: '#8cc9a4'
}

class TechScanHeader extends React.Component {

    search(){
      var searchTxt = document.getElementById('searchTxt').value;
      this.props.history.push('/repoList');
      setTimeout(() => {
          this.props.history.push(searchTxt)
      },100);
    }

    navigateToHome(){
        this.props.history.push('/');
    }

    render() {     
         let searchIcon = <div>
                        <Home color="white" toolTip="Home" className="material-icons" style={iconStyles} onClick={this.navigateToHome.bind(this)}/>
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