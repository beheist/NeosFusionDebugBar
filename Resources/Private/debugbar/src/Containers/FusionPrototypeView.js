import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import FusionPrototypeListContainer from './FusionPrototypeListContainer'
import TwoPartTabContainer from '../Components/Organisms/TwoPartTabContainer'
import FusionPrototypeDetails from '../Components/Organisms/FusionPrototypeDetails'
import {selectors} from "../Redux";

const mapStateToProps = state => ({
    currentPrototypeName: selectors.Prototypes.currentPrototypeName(state),
    currentPrototype: selectors.Prototypes.currentPrototype(state)
});

class FusionPrototypeView extends React.PureComponent {
    static propTypes = {
        // mapStateToProps
        currentPrototypeName: PropTypes.string.isRequired,
        currentPrototype: PropTypes.object.isRequired,
    };

    render() {
        return (
            <TwoPartTabContainer
                left={<FusionPrototypeListContainer/>}
            >
                <FusionPrototypeDetails prototypeName={this.props.currentPrototypeName}
                                        prototype={this.props.currentPrototype}/>
            </TwoPartTabContainer>
        );
    }
}

export default connect(mapStateToProps)(FusionPrototypeView);
