import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {actions} from "../Redux";
import FusionPrototypeInheritance from '../Components/Atoms/FusionPrototypeInheritance'

const mapDispatchToProps = dispatch => ({
    setCurrentPrototypeName: prototypeName => dispatch(actions.Prototypes.setCurrentPrototypeName(prototypeName))
});

class FusionPrototypeInheritanceContainer extends React.PureComponent {
    static propTypes = {
        // mapDispatchToProps
        setCurrentPrototypeName: PropTypes.func.isRequired,
        // From outside
        prototypeChain: PropTypes.array.isRequired
    };

    render() {
        return <FusionPrototypeInheritance prototypeChain={this.props.prototypeChain} onItemClick={this.props.setCurrentPrototypeName} />
    }
}

export default connect(null, mapDispatchToProps)(FusionPrototypeInheritanceContainer);
