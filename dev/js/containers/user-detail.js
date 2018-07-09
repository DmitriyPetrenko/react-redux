import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserDetail extends Component {
    render () {
        if (!this.props.user) {
            return (
                <h4>Select a user...</h4>
            );
        }

        const { thumbnail, first, last, age, description } = this.props.user;

        return (
            <div>
                <img src={ thumbnail } alt=""/>
                <h2>{ first } { last }</h2>
                <h3>{ age }</h3>
                <h3>{ description }</h3>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.activeUser,
    };
}

export default connect(mapStateToProps)(UserDetail);
