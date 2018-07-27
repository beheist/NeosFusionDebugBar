import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
    },
});

class TwoPartTabContainer extends React.PureComponent {
    static propTypes = {
        // theme
        classes: PropTypes.object.isRequired,
        // props
        left: PropTypes.node.isRequired,
        children: PropTypes.node.isRequired,
    };

    render() {
        return (
            <div className={this.props.classes.root}>
                <Grid container spacing={24}>
                    <Grid item xs={3}>
                        {this.props.left}
                    </Grid>
                    <Grid item xs={9}>
                        {this.props.children}
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(TwoPartTabContainer);
