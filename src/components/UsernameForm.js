import React, { Component } from 'react'
import '../stylesheets/App.css';
import ReactDOM from 'react-dom';
import {GetTopAlbums} from "./GetTopAlbums";
import {GetTopArtists} from "./GetTopArtists";
import {GetTopTracks} from "./GetTopTracks";



export class UsernameForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            action: props.action,
            period: props.period
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleActionChange = this.handleActionChange.bind(this);
        this.handlePeriodChange = this.handlePeriodChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleNameChange(event) {
        this.setState({name: event.target.value});
    }

    handleActionChange(event) {
        this.setState({action: event.target.value});
    }

    handlePeriodChange(event) {
        this.setState({period: event.target.value});
    }


    handleSubmit(event) {
        ReactDOM.render(
            <UsernameForm name={this.state.name} action={this.state.action} period={this.state.period} />, document.getElementById('root'));
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input type="text" value={this.state.name} placeholder="last.fm username" onChange={this.handleNameChange}/>
                    </label>

                    <select defaultValue={this.props.action} onChange={this.handleActionChange}>
                        <option value="gettopartists">Top Artists</option>
                        <option value="gettopalbums">Top Albums</option>
                        <option value="gettoptracks">Top Tracks</option>
                    </select>

                    <select defaultValue={this.props.period} onChange={this.handlePeriodChange}>
                        <option value="overall">Overall</option>
                        <option value="7day">One Week</option>
                        <option value="1month">One Month</option>
                    </select>

                </form>

                <GetTopAlbums name={this.state.name} action={this.state.action} period={this.state.period} />
                <GetTopArtists name={this.state.name} action={this.state.action} period={this.state.period} />
                <GetTopTracks name={this.state.name} action={this.state.action} period={this.state.period} />

            </div>

        );
    }
}
