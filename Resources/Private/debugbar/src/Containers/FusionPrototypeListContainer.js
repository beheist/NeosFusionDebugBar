import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {actions, selectors} from "../Redux";
import FusionPrototypeList from '../Components/Organisms/FusionPrototypeList'

const mapStateToProps = state => ({
    prototypes: selectors.Prototypes.allPrototypes(state)
});

const mapDispatchToProps = dispatch => ({
    setCurrentPrototypeName: prototypeName => dispatch(actions.Prototypes.setCurrentPrototypeName(prototypeName))
});

class FusionPrototypeListContainer extends React.PureComponent {
    static propTypes = {
        // mapStateToProps
        prototypes: PropTypes.object.isRequired,
        // mapDispatchToProps
        setCurrentPrototypeName: PropTypes.func.isRequired
    };

    render() {
        return <FusionPrototypeList prototypes={this.props.prototypes} onItemClick={this.props.setCurrentPrototypeName} />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FusionPrototypeListContainer);
