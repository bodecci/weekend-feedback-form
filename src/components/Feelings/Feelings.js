import React, { Component } from 'react';
import { connect } from 'react-redux';
import './../App/App.css';

import { Card, TextField, Button, Grid } from '@material-ui/core';

class Feelings extends Component {
    constructor(props){
        super(props)

        this.state = {
            feelings: 0
        }
    }

    // change the value of feelings to what the user entered
    handleChange = (event) => {
        console.log('value is: ', event.target.value);
        this.setState({
            feelings: event.target.value
        })
        
    }

    // dispatch the feeling that was entered to the redux store.
    // then move to the next page.
     nextPage = () => {
        this.props.dispatch({
            type: 'SET_FEELING',
            payload: this.state.feelings
        })
        this.props.history.push('/understanding')
        
    }


    render(){
        return (
            <div>
                <Grid container justify="center">
                    <Grid item xs={6}>
                        <Card>
                            <h1>Feelings</h1>
                            <Grid container justify="center" alignItems="center">
                            <Grid item xs={9}>
                            <TextField
                            id="name"
                            label="How are you Feeling?"
                            onChange={this.handleChange}
                            margin="normal"
                            type="number" />
                            </Grid>
                            <Grid>
                                <Button variant="raised" onClick={this.nextPage}>Next</Button>
                            </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                </Grid>
            </div>

        )
    }

}

export default connect() (Feelings);