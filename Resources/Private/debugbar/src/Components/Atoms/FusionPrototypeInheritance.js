import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

const styles = theme => ({
    inheritance__breadcrumbs: {
        paddingLeft: 0,
        paddingTop: theme.spacing.unit,
        paddingBottom: theme.spacing.unit * 3
    },
    inheritance__breadcrumb: {
        cursor: "pointer"
    }
});

class FusionPrototypeInheritance extends React.PureComponent {
    static propTypes = {
        classes: PropTypes.object.isRequired,
        prototypeChain: PropTypes.array.isRequired,
        onItemClick: PropTypes.func.isRequired
    };

    render() {
        return (
            <div>
                <Stepper activeStep={99} className={this.props.classes.inheritance__breadcrumbs}>
                    {this.props.prototypeChain.map(label => (
                        <Step className={this.props.classes.inheritance__breadcrumb} onClick={() => {this.props.onItemClick(label)}} key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </div>
        );
    }
}

export default withStyles(styles)(FusionPrototypeInheritance);
