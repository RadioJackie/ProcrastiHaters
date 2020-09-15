import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import Scheduler from '../components/Scheduler';
import Toolbar from '../components/Toolbar';
import MessageArea from '../components/MessageArea';
// import "../Scheduler/"


const data = [
	{ start_date: '2020-06-10 6:00', end_date: '2020-06-10 8:00', text: 'Event 1', id: 1 },
	{ start_date: '2020-06-13 10:00', end_date: '2020-06-13 18:00', text: 'Event 2', id: 2 }
];

class Calendar extends Component {
	state = {
		currentTimeFormatState: true,
		messages: []
	};

	addMessage(message) {
		const maxLogLength = 5;
		const newMessage = { message };
		const messages = [
			newMessage,
			...this.state.messages
		];

		if (messages.length > maxLogLength) {
			messages.length = maxLogLength;
		}
		this.setState({ messages });
	}

	logDataUpdate = (action, ev, id) => {
		const text = ev && ev.text ? ` (${ev.text})` : '';
		const message = `event ${action}: ${id} ${text}`;
		this.addMessage(message);
	}

	handleTimeFormatStateChange = (state) => {
		this.setState({
			currentTimeFormatState: state
		});
	}

	render() {
		const { currentTimeFormatState, messages } = this.state;
		return (
			<div>
				<div className="tool-bar">
					<h1>Do Something with your Life</h1>
					<Toolbar
						timeFormatState={currentTimeFormatState}
						onTimeFormatStateChange={this.handleTimeFormatStateChange}
					/>
				</div>
				<div className= "">
					<Scheduler
						events={data}
						timeFormatState={currentTimeFormatState}
						onDataUpdated={this.logDataUpdate}
					/>
				</div>
				<MessageArea
					messages={messages}
				/>
			</div>
			
		);
	}
}


export default Calendar;



// 

