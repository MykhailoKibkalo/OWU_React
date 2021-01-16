import React, {Component} from 'react';
import {Service} from "../Service/Service";
import People from "../People/People";
import {Route, Switch, withRouter} from "react-router-dom";
import FullPeople from "../FullPeople/FullPeople";

class Peoples extends Component {

    state = {peoples: []};
    service = new Service();

    async componentDidMount() {
        let peoples = await this.service.getALLPeople();
        this.setState({peoples});
    }


    nextSlide = () => {
        let {peoples: {next}} = this.state;
        this.service.doFetch(next).then(value => this.setState({peoples: value}))
    }

    previousSlide = () => {
        let {peoples: {previous}} = this.state;
        this.service.doFetch(previous).then(value => this.setState({peoples: value}))
    }


    render() {
        let {peoples: {results, next, previous}} = this.state;
        let {match: {url}} = this.props;


        return (
            <div>
                {results && results.map(value => <People key={value.name} peoples={value}/>)}

                <hr/>
                <Switch>
                    <Route path={url + '/:id'} render={(props) => {
                        let {match: {params: {id}}} = props;

                        return (
                            <div>
                                <FullPeople key={id} id={id} results={results}/>

                            </div>
                        );
                    }}/>
                </Switch>
                <hr/>
                <button onClick={this.previousSlide} disabled={!previous}>
                    Previous slide
                </button>
                <button onClick={this.nextSlide} disabled={!next}>
                    Next slide
                </button>
            </div>
        );
    }
}

export default withRouter(Peoples);