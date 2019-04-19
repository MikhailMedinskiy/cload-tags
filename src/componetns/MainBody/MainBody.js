import React from 'react';

export default class MainBody extends React.Component{
    render(){
        return(
            <main className='main'>
                {this.props.children}
            </main>
        )
    }
}