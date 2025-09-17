import React from 'react';
import ReactDOM from 'react-dom';
import PhotoUpload from './components/PhotoUpload';

const App = () => {
    return (
        <div>
            <h1>Recycle Photo App</h1>
            <PhotoUpload />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));