import React, { Component } from 'react';
import { connect } from 'react-redux';
import './../App/App.css';
//material ui for Card display
import { Card, TextField, Button, Grid } from '@material-ui/core';

class Support extends Component {
constructor(props){
        super(props)

        this.state = {
            support: 0
        }
    }

    // change the value of support to what the user entered
    handleChange = (event) => {
        console.log('value is: ', event.target.value);
        this.setState({
            support: event.target.value
        })
    }

    // dispatch the support that was entered to the redux store.
    // then move to the next page.
    nextPage = () => {
        this.props.dispatch({
            type: 'SET_SUPPORT',
            payload: this.state.support
        })
        this.props.history.push('/comments')
    }

    render(){
        return (
                <Grid container justify="center">
                    <Grid item xs={6}>
                        <Card>
                            <h1>Support</h1>
                            <Grid container justify="center" alignItems="center">
                            <Grid item xs={9}>
                            <TextField
                            id="name"
                            label="Do You Feel Support?"
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

        )
    }

}

export default connect() (Support);
