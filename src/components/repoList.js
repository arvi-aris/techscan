import React from 'react';
import ReactDOM from 'react-dom';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RepoInfo from './repoInfo.js';
import {Link} from 'react-router-dom';
const styles = {
    width: 150,
    height: 150,
    margin: '25px',
    display: 'block',
    float:'left',
    'background-color':'rgb(153, 190, 195)',
    'box-shadow' : '5px 5px 5px #888888',
};

class RepoList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            categories : ['javascript','java','ruby','python','c','angularjs','reactjs','nodejs','go','meteor','django','typescript','html','css','canvas','svg','ember','reactnative','android','d3','ios']
        }
    }
    render(){
        return(
              <div>
                {this.state.categories.map((category) => 
                { return(
                        <Card style = {styles}>
                            <CardHeader
                            title={category}
                            />
                             <CardActions>
                                <FlatButton label="View repo"  containerElement={<Link to={'/'+category} />}/>
                            </CardActions>
                        </Card>
                    ) 
                })}
            </div>
        );
    }
}

export default RepoList;