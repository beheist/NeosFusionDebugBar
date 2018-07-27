import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {actions, selectors} from "../Redux";
import PrototypeList from '../Components/Organisms/PrototypeList'

const mapStateToProps = state => ({
    prototypes: selectors.Prototypes.allPrototypes(state)
});

const mapDispatchToProps = dispatch => ({
    setCurrentPrototypeName: prototypeName => dispatch(actions.Prototypes.setCurrentPrototypeName(prototypeName))
});

class PrototypeListContainer extends React.PureComponent {
    static propTypes = {
        // mapStateToProps
        prototypes: PropTypes.object.isRequired,
        // mapDispatchToProps
        setCurrentPrototypeName: PropTypes.func.isRequired
    };

    render() {
        return <PrototypeList prototypes={this.props.prototypes} onItemClick={this.props.setCurrentPrototypeName} />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PrototypeListContainer);
