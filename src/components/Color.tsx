import React, { Component } from 'react';
interface AppProps {
	color?: string;
}
interface AppState {
	count?: number;
}
class Color extends Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props)
    
        this.state = {
             count: 1
        }
    }
    
	render() {
		return <>
            {this.props.color}
            {this.state.count}
        </>;
	}
}

export default Color;
