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

    renderAttributeList = (keys, object) => {
        return <ul>
            {keys.map(key => (
                    <li key={key}><strong>{key}:</strong>
                        {typeof object[key] === 'object' && object[key] !== null ? this.renderAttributeList(Object.keys(object[key]), object[key]) : object[key]}
                    </li>
                )
            )}
        </ul>
    };

    render() {
        return (
            <div className={this.props.classes.root}>
                <div className={this.props.classes.details__header}>
                    <Typography variant="headline">
                        {this.props.fusionPathName}
                    </Typography>
                    {this.renderAttributeList(Object.keys(this.props.fusionPath).filter(key => key.indexOf('__') === 0), this.props.fusionPath)}
                </div>

            </div>
        );
    }
}

export default withStyles(styles)(FusionPathDetails);
