import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {actions} from "../Redux";
import PrototypeInheritance from '../Components/Atoms/PrototypeInheritance'

const mapDispatchToProps = dispatch => ({
    setCurrentPrototypeName: prototypeName => dispatch(actions.Prototypes.setCurrentPrototypeName(prototypeName))
});

class PrototypeInheritanceContainer extends React.PureComponent {
    static propTypes = {
        // mapDispatchToProps
        setCurrentPrototypeName: PropTypes.func.isRequired,
        // From outside
        prototypeChain: PropTypes.array.isRequired
    };

    render() {
        return <PrototypeInheritance prototypeChain={this.props.prototypeChain} onItemClick={this.props.setCurrentPrototypeName} />
    }
}

export default connect(null, mapDispatchToProps)(PrototypeInheritanceContainer);
