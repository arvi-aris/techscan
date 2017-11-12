import React from 'react';
import ReactDOM from 'react-dom';
import {Card, CardActions, CardHeader, CardText, CardMedia, CardTitle} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import axios from 'axios';
import FlatButton from 'material-ui/FlatButton';
import {Link} from 'react-router-dom';

const styles = {
    width: 300,
    height: 450,
    margin: '25px',
    display: 'block',
    float:'left',
    'background-color':'rgb(153, 190, 195)',
    'box-shadow' : '5px 5px 5px #888888',
};
const cardmediaStyle = {
        height: '100px',
    width: '103px'
}
class RepoOwner extends React.Component{

    constructor(props){ 
        super(props);
        this.state = {
            username : "",
            userInfo : [],
            repoOfUser:[]
        }
    }

    componentDidMount(){ 
        let username = this.props.match.params.username;
        axios.get('https://api.github.com/search/users?q='+username)
            .then(res => {
               var userinfo = res.data.items;
               userinfo.repoList = [];
               userinfo.slice(0,3).map(user => {
                    axios.get(user.repos_url)
                    .then(res => {
                        var repoList = res.data;
                        user.repoList = repoList.slice(0,3);
                        this.setState({
                            userInfo : userinfo
                        });
                    })
                    .catch(e => {
                        console.log(e);
                    });
               });
            })
            .catch(e => {
                console.log(e);
            });
        
    }

    render(){
        return(
              <div>
                {this.state.userInfo.map(user => {
                    return( <Card style={styles}>
                        <CardHeader
                            title={user.login}
                            subtitle={<a href={user.html_url} target="_blank" > view user </a>}
                        />
                        <CardMedia mediaStyle={cardmediaStyle} >
                            <img src={user.avatar_url} alt="" />
                        </CardMedia>
                        <List>
                        {user.repoList ? user.repoList.map(repo => {
                            return(<ListItem><a href={repo.html_url} target="_blank" > {repo.full_name} </a></ListItem>)
                        }) : ""}
                        </List>
                    </Card>)
                })}
            </div>
        );
    }
}

export default RepoOwner;

