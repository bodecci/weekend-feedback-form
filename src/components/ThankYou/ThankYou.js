import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

class ThankYou extends Component {

    constructor(){
        super()

        this.state = {
            clearfeedback: 0
        }
    }

    nextPage = () => {
        this.props.dispatch({
            type: 'CLEAR_FEEDBACK',
            payload: this.state.clearfeedback,
        })
        this.props.history.push('/');
    }

    render() {
        return(

            <div>
                <h1>Thank You For Your FeedBack</h1>
                <Button variant="raised" onClick={this.nextPage}>Leave New Feedback</Button>
            
            </div>
        )
    }
}

export default connect() (ThankYou);