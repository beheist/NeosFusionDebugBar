import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PrototypeView from './PrototypeView';
import FusionPathView from './FusionPathView';


const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        height: 500,
        position: "absolute",
        bottom: 0,
        width: "100vw"
    },
});

class App extends React.PureComponent {
    state = {
        value: 0,
    };

    static propTypes = {
        // styles
        classes: PropTypes.object.isRequired,
    };

    handleChange = (event, value) => {
        this.setState({value});
    };

    render() {
        return (
            <div className={this.props.classes.root}>
                <AppBar position="static">
                    <Tabs value={this.state.value} onChange={this.handleChange}>
                        <Tab label="Fusion Prototypes"/>
                        <Tab label="Fusion Paths"/>
                    </Tabs>
                </AppBar>
                {this.state.value === 1 && <PrototypeView />}
                {this.state.value === 0 && <FusionPathView />}
            </div>
        );
    }
}

export default withStyles(styles)(App);
