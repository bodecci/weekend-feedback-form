import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

//material ui
import { Button } from '@material-ui/core';


class ReviewComments extends Component{

    render(){
        return(
            <div>
                <h1>Review Your Feedback</h1>
                <br></br>
                {JSON.stringify(this.props.reduxStore)}
                <p>Feeling: {this.props.reduxStore.feedbackReducer.feeling}</p>
                <p>Understanding: {this.props.reduxStore.feedbackReducer.understanding}</p>
                <p>Support: {this.props.reduxStore.feedbackReducer.support}</p>
                <p>Comments: {this.props.reduxStore.feedbackReducer.comments}</p>

            </div>
        )
    }

}

const mapStateToProps = (reduxStore) => ({
    reduxStore: reduxStore
})

export default connect(mapStateToProps)(ReviewComments);