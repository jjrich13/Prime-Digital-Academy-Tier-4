import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    user: state.user,
    login: state.login,
    // saga should hold current challenge data && past data, call it here
  });

class AdminView extends Component {

    componentDidMount() {
        // on mounth, dispatch an action to saga - axios - db to get user data 
    }

    render() {

        // map over mapStateToProps state here for user data 

        // add logic for conditional rendering 

        return (
            <main>
                <h1>This is the Admin View</h1>
                {/* display button for admin to make new challenge, 
                render conditionally*/}
                <section>
                    <button>Create New Challenge</button>
                </section>
                {/* always viewable, two buttons that changes which table to show */}
                <section>
                    <button>Current Challenge</button>
                    <button>Past Challenges</button>
                </section>
                {/* display either  */}
            </main>
        )
    }
}

export default connect(mapStateToProps)(AdminView);