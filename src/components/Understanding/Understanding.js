import React, { Component } from 'react';
import { connect } from 'react-redux';
import './../App/App.css';

import { Card, TextField, Button, Grid } from '@material-ui/core';

class Understanding extends Component {
    constructor(props) {
        super(props)

        this.state = {
            understanding: 0
        }
    }

     // change the value of understanding to what the user entered
    handleChange = (event) => {
        console.log('value is: ', event.target.value);
        this.setState({
            understanding: event.target.value
        })
        
    }

    // dispatch the understanding that was entered to the redux store.
    // then move to the next page.
     nextPage = () => {
        this.props.dispatch({
            type: 'SET_UNDERSTANDING',
            payload: this.state.understanding
        })
        this.props.history.push('/support')
        
    }
   
    render(){
        return (
                <Grid container justify="center">
                    <Grid item xs={6}>
                        <Card>
                            <h1>Understanding</h1>
                            <Grid container justify="center" alignItems="center">
                            <Grid item xs={9}>
                            <TextField
                            id="name"
                            label="Do you Understand?"
                            onChange={this.handleChange}
                            margin="normal"
                            type="number"/>
                            </Grid>
                            <Grid>
                            <Button variant="raised" onClick={this.nextPage}>Next</Button>
                            </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                </Grid>
        )
    }
}

    export default connect() (Understanding)