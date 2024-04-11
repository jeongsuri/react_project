import React, {Component} from "react";
import loadable from "@loadable/component";

const ErrorDispaly = loadable(() => import('../componetns/ErrorDispay'));

class Errorpage extends Component {
    state = {
        message: '',

    };
    componentDidCatch(error, info){
        if(error){
            this.setState({message:error.message});
            console.error(error, info);
        }
    }

    render() {
        const { children } = this.props;
        const{ message } = this.state;
        return message ? <ErrorDispaly>{message}</ErrorDispaly> : children;

    }
}

export default React.memo(Errorpage);