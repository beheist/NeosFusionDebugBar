import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import PrototypeListContainer from './PrototypeListContainer'
import TwoPartTabContainer from '../Components/Organisms/TwoPartTabContainer'
import PrototypeDetails from '../Components/Organisms/PrototypeDetails'
import {selectors} from "../Redux";

const mapStateToProps = state => ({
    currentPrototypeName: selectors.Prototypes.currentPrototypeName(state),
    currentPrototype: selectors.Prototypes.currentPrototype(state)
});

class PrototypeView extends React.PureComponent {
    static propTypes = {
        // mapStateToProps
        currentPrototypeName: PropTypes.string.isRequired,
        currentPrototype: PropTypes.object.isRequired,
    };

    render() {
        return (
            <TwoPartTabContainer
                left={<PrototypeListContainer/>}
            >
                <PrototypeDetails prototypeName={this.props.currentPrototypeName}
                                        prototype={this.props.currentPrototype}/>
            </TwoPartTabContainer>
        );
    }
}

export default connect(mapStateToProps)(PrototypeView);
