import React, { Component } from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';

class Countdown extends Component {
    state = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    };

    componentDidUpdate = () => {
        // creates an js Data type with this.props.deadline (passed as props from home view)
        let result = new Date(this.props.deadline); 
        result.setDate(result.getDate() + 30) // gets the challenge end date
        setInterval(() => this.getTimeUntil(result), 1000); // runs getTimeUntil function every 1 second
    }

    displayDigits = (number) => {
        return number < 10 ? '0' + number : number;
    }

    
    getTimeUntil = (deadline) => {
        // calculated the amount of time before the deadline
        const time = Date.parse(deadline) - Date.parse(new Date());
        if (time < 0) {
            this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        } else {
            const seconds = Math.floor((time / 1000) % 60);
            const minutes = Math.floor((time / 1000 / 60) % 60);
            const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
            const days = Math.floor(time / (1000 * 60 * 60 * 24));
            this.setState({ days, hours, minutes, seconds });
        }
    }

    render() {
        let content = '';
        // conditionally render time if there is a challenge or no challenge deadline
        if (this.props.deadline == null) {
            content = (
                <div>
                    <p>There is no upcoming challenge.</p>
                </div>
            )
        } else {
            content = (
                <div>
                    <div style={{
                        display: "grid",
                        alignContent: "center",
                        width: "100%",
                        height: "350px",
                        topMargin: "-20"
                    }}>
                        <div style={{ justifySelf: "center" }}>
                            <Typography
                                variant="headline"
                                color="secondary">Code Today
                            </Typography>
                        </div>
                        <div style={{ justifySelf: "center" }}>
                            <Typography
                                variant="subheading"
                                color="secondary">
                                Track your progress by signing up!
                            </Typography>
                        </div>
                        <Paper style={{ justifySelf: "center", padding: "20px" }}>
                            <div>
                                <Typography
                                    variant="headline"
                                    color="primary">
                                    30 Day Sprint Challenge
                                </Typography>
                            </div>
                            <Grid
                                container
                                style={{ justifySelf: "center", padding: "20px" }}>
                                <div>
                                    <Paper style={{ padding: "10px", margin: "2px" }}>
                                        {this.displayDigits(this.state.days)} <br />
                                    </Paper>
                                    Days
                                </div>
                                <div>
                                    <Paper style={{ padding: "10px", margin: "2px" }}>
                                        {this.displayDigits(this.state.hours)} <br />
                                    </Paper>
                                    Hrs
                                </div>
                                <div>
                                    <Paper style={{ padding: "10px", margin: "2px" }}>
                                        {this.displayDigits(this.state.minutes)} <br />
                                    </Paper>
                                    Min
                                </div>
                                <div>
                                    <Paper style={{ padding: "10px", margin: "2px" }}>
                                        {this.displayDigits(this.state.seconds)} <br />
                                    </Paper>
                                    Sec
                                </div>
                            </Grid>
                            <div style={{ justifySelf: "center" }}>
                                <Typography
                                    variant="subheading"
                                    color="primary">
                                    Sign up before the next deadline!
                                </Typography>
                            </div>
                        </Paper>
                    </div>
                </div>
            )
        }
        return (
            <div>
                {content}
            </div>
        )
    }
}
export default Countdown;