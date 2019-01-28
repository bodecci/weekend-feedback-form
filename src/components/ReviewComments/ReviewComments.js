import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

//material ui
import { Button } from '@material-ui/core';


class ReviewComments extends Component{
    constructor(props){
        super(props)

        this.state = {
            complete: false
        }
    }

    handleButton = () => {
        this.setState({
            complete: !this.state.complete,
        })
    }

    handleClick = () => {
        const feedback = {
            feelings: this.props.reduxStore.feedbackReducer.feeling,
            understanding: this.props.reduxStore.feedbackReducer.understanding,
            support: this.props.reduxStore.feedbackReducer.support,
            comments: this.props.reduxStore.feedbackReducer.comments
        }
        console.log('submit clicked');
        this.props.history.push('/thank-you');
        axios({
            method: 'POST',
            url: '/feedback',
            data: feedback
        }).then((response) => {
            
        }).catch((error) => {
            alert('Something Went Wrong in POST! ', error);
        });
        
    }

    render(){

            //conditional render for the submit button
            let handleButton = '';
            
            if (this.props.reduxStore.feedbackReducer.feeling !== '' && 
                this.props.reduxStore.feedbackReducer.understanding !== '' &&
                this.props.reduxStore.feedbackReducer.support !== '' &&
                this.props.reduxStore.feedbackReducer.comments !== '')
                {
                handleButton = <Button variant="raised" onClick={this.handleClick}>SUBMIT</Button>
                }
                else{
                handleButton = <Button disabled variant="raised" onClick={this.handleClick}>INCOMPLETE</Button>
                alert('Complete Feedback');
                }

        return(
            <div>
                <h1>Review Your Feedback</h1>
                {/* Review of feedback shown. All values are from the redux store */}
                {/* {JSON.stringify(this.props.reduxStore)} */}
                <p>Feeling: {this.props.reduxStore.feedbackReducer.feeling}</p>
                <p>Understanding: {this.props.reduxStore.feedbackReducer.understanding}</p>
                <p>Support: {this.props.reduxStore.feedbackReducer.support}</p>
                <p>Comments: {this.props.reduxStore.feedbackReducer.comments}</p>
                {handleButton}
                {/* <Button variant="raised" onClick={this.handleClick}>SUBMIT</Button> */}
            </div>
        )
    }

}

const mapStateToProps = (reduxStore) => ({
    reduxStore: reduxStore
})

export default connect(mapStateToProps)(ReviewComments);