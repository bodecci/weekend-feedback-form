import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';

import { Card, TextField, Button, Grid } from '@material-ui/core';

class Feelings extends Component {
    constructor(props){
        super(props)

        this.state = {
            feelings: 0
        }
    }

     nextPage = () => {
        this.props.history.push('/understanding')
        
    }


    render(){
        return (
            <div conatiner justify="center">
                <Grid>
                    <Grid item xs={6}>
                        <Card>
                            <h1>Feelings</h1>
                            <Grid container justify="center" alignItems="center">
                            <Grid item xs={10}>
                            <TextField
                            id="name"
                            label="Feelings?"
                            onChange={this.handleChange}
                            margin="normal"
                            type="number" />
                            </Grid>
                            <Grid>
                                <Button variant="raised" onClick={this.handleClick}>Next</Button>
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