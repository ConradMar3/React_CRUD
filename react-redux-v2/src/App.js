import React, { Component } from "react";
import User from "./User";
import UserForm from "./UserForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/edit/:id" component={UserForm} />
                        <Route path="/add" component={UserForm} />
                        <Route exact path="/" component={User} />
                        <Route path="/*" component={NotFound} />
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;

class NotFound extends Component {
    render() {
        return <div>Not Found</div>;
    }
}
