import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        padding: theme.spacing.unit
    }
});

class TabContainer extends React.PureComponent {
    static propTypes = {
        children: PropTypes.node.isRequired,
        // styles
        classes: PropTypes.object.isRequired
    };

    render() {
        return (
            <div className={this.props.classes.root}>
                {this.props.children}
            </div>
        );
    }
}

export default withStyles(styles)(TabContainer);
