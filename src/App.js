import React from 'react';
import './App.css';
import { Form, FormButton, Grid, Header, Message, Segment } from 'semantic-ui-react';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isWorking: false, showResult: false, dateString: ''};
        this.upDate = this.upDate.bind(this);
        this.computeAvailability = this.computeAvailability.bind(this);
    }

    computeAvailability() {
        console.log(this.state.dateString);
        const knownDate = new Date('2020-01-16');
        console.log(knownDate);
        const inputDate = new Date(this.state.dateString);
        console.log(inputDate);
        const milisecondDifference = inputDate.getTime() - knownDate.getTime();
        console.log(milisecondDifference);
        const dayDifference = milisecondDifference / (1000 * 60 * 60 * 24);
        console.log(dayDifference);
        const isWorking = dayDifference % 3 === 0;
        console.log(isWorking);
        this.setState({
           showResult: true,
           isWorking: isWorking
        });
    }

    upDate(e) {
        this.setState({
            dateString: e.target.value
        });
    }

    render() {
        return (
            <Grid id="appGrid" verticalAlign="middle" centered>
                <Grid.Column>
                    <Header as="h1" textAlign="center">Is Jared Working?</Header>
                    <Form size="large">
                        <Segment raised>
                            <Form.Field fluid>
                                <label>Date</label>
                                <input onChange={this.upDate} type="date"/>
                            </Form.Field>
                            <FormButton onClick={this.computeAvailability} fluid>Check Date</FormButton>
                        </Segment>
                    </Form>
                    {this.state.showResult ? <Message color={this.state.isWorking ? "red" : "green"}>
                        <Message.Header>{this.state.isWorking ? 'Yes' : 'No'}</Message.Header>
                        {`Jared is ${this.state.isWorking ? '' : 'not'} working`}
                    </Message> : null}
                </Grid.Column>
            </Grid>
        );
    }
}

export default App;
