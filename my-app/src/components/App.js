import React from 'react';

import Post from './Post';

export default class App extends React.Component {
    render() {
        return(
            <div>
                <h1>"Comment Interface With React"</h1>
                <Post title="Title Post"/>
                <Post title="Title Post" />
                <Post title="Title Post" />
            </div>
            );
    }
}