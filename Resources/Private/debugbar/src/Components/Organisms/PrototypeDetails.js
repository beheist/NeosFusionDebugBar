import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PrototypeInheritanceContainer from '../../Containers/PrototypeInheritanceContainer'
import Button from '@material-ui/core/Button';
import styles from '../../SharedStyles/Details';

class PrototypeDetails extends React.PureComponent {
    static propTypes = {
        // theme
        classes: PropTypes.object.isRequired,
        prototypeName: PropTypes.string.isRequired,
        prototype: PropTypes.object.isRequired
    };

    render() {
        return (
            <div className={this.props.classes.root}>
                <div className={this.props.classes.details__header}>
                    <Typography variant="headline">
                        {this.props.prototypeName}
                    </Typography>
                    {
                        (this.props.prototypeName.indexOf('Neos.Neos') === 0 || this.props.prototypeName.indexOf('Neos.Fusion') === 0) ?
                            <Button variant="outlined" color="primary"
                                    className={this.props.classes.details__headerbutton}
                                    onClick={() => {
                                        const url = 'https://neos.readthedocs.io/en/stable/References/NeosFusionReference.html#';
                                        // replace e.g. "Neos.Fusion:Array" with "neos-fusion-array"
                                        const anchor = this.props.prototypeName.toLowerCase().replace(':', '-').replace('.', '-');
                                        window.open(url + anchor);
                                    }}>
                                Docs
                            </Button> : null
                    }
                </div>

                {this.props.prototype.__prototypeChain && this.props.prototype.__prototypeChain.length > 0 ?
                    <React.Fragment>
                        <PrototypeInheritanceContainer
                            prototypeChain={this.props.prototype.__prototypeChain.slice().reverse()}/>
                    </React.Fragment> : null
                }
                {this.props.prototype.__meta ?
                    <React.Fragment>
                        <Typography variant="subheading" className={this.props.classes.inheritance__headline}>
                            Meta Properties
                        </Typography>
                        <Typography variant="caption">Implementation Class Name</Typography>
                        <Typography variant="body2">{this.props.prototype.__meta.class}</Typography>

                    </React.Fragment> : null
                }

            </div>
        );
    }
}

export default withStyles(styles)(PrototypeDetails);
