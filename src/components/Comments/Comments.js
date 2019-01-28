import React, { Component } from 'react';
import { connect } from 'react-redux';
import './../App/App.css';

//material ui
import { Card, TextField, Button, Grid } from '@material-ui/core';

class Comments extends Component {
    constructor(props){
        super(props)

        this.state = {
            comments: ''
        }
    }

    // change the value of comments to what the user entered
    handleChange = (event) => {
        console.log('value is: ', event.target.value);
        this.setState({
            comments: event.target.value
        })
        
    }

    // dispatch the comments that was entered to the redux store.
    // then move to the next page.
     nextPage = () => {
        this.props.dispatch({
            type: 'SET_COMMENTS',
            payload: this.state.comments
        })
        this.props.history.push('/review-comment')
        
    }


    render(){
        return (
            <div>
                <Grid container justify="center">
                    <Grid item xs={6}>
                        <Card>
                            <h1>Comments</h1>
                            <Grid container justify="center" alignItems="center">
                            <Grid item xs={10}>
                            <TextField
                            id="name"
                            label="Any Comment?"
                            onChange={this.handleChange}
                            margin="normal"
                            type="text" />
                            </Grid>
                            <Grid>
                                <Button variant="raised" onClick={this.nextPage}>Next</Button>
                            </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                </Grid>
                <br></br>
                <br></br>
                <h1>Review Your Feedback</h1>
                {/* review feedback shown to user. */}
                <p>Feeling: {this.props.reduxStore.feedbackReducer.feeling}</p>
                <p>Understanding: {this.props.reduxStore.feedbackReducer.understanding}</p>
                <p>Support: {this.props.reduxStore.feedbackReducer.support}</p>
                <p>Comments: {this.state.comments}</p>
            </div>

        )
    }

}

const mapStateToProps = (reduxStore) => ({
    reduxStore: reduxStore
})

export default connect(mapStateToProps)(Comments);