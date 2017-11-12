import React from 'react';
import ReactDOM from 'react-dom';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
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

class RepoInfo extends React.Component{

    constructor(props){ 
        super(props);
        this.state = {
            category : "",
            repoInfoList : []
        }
    }

    componentDidMount(){
        let category = this.props.match.params.category;
        axios.get('https://api.github.com/search/repositories?q='+category+'&sort=stars&order=desc')
            .then(res => {
               var repoInfoList = res.data.items;
               this.setState({
                   category : category,
                   repoInfoList : repoInfoList
               })
            });
    }

    render(){
  return(
              <div>
                {this.state.repoInfoList.map((repoInfo) => 
                { return(
                        <Card style={styles}>
                            <CardHeader
                            title={repoInfo.full_name}
                            subtitle={<a href={repoInfo.html_url} target="_blank" > Go to repo </a>}
                            />
                              <CardText>
                                <List>
                                   <ListItem  primaryText='Score  ' secondaryText={repoInfo.score}  />
                                   <ListItem  primaryText='Size  ' secondaryText={repoInfo.size}  />
                                   <ListItem  primaryText='Forks count  ' secondaryText={repoInfo.forks_count}  />
                                   <ListItem  primaryText='Watchers count  ' secondaryText={repoInfo.watchers_count}  />
                                </List>
                            </CardText>
                             <CardActions>
                                <FlatButton label="View owner"  containerElement={<Link to={'/'+this.state.category+'/'+repoInfo.owner.login} />}/>
                            </CardActions>
                        </Card>
                    ) 
                })}
            </div>
        );
    }
}

export default RepoInfo;

