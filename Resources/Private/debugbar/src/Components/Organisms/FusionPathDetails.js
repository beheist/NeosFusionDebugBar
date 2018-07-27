import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import styles from '../../SharedStyles/Details';

class FusionPathDetails extends React.PureComponent {
    static propTypes = {
        // theme
        classes: PropTypes.object.isRequired,
        fusionPathName: PropTypes.string.isRequired,
        fusionPath: PropTypes.object.isRequired
    };

    render() {
        return (
            <div className={this.props.classes.root}>
                <div className={this.props.classes.details__header}>
                    <Typography variant="headline">
                        {this.props.fusionPathName}
                    </Typography>
                </div>

            </div>
        );
    }
}

export default withStyles(styles)(FusionPathDetails);
