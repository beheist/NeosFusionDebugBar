import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import FusionPathListContainer from './FusionPathListContainer'
import TwoPartTabContainer from '../Components/Organisms/TwoPartTabContainer'
import FusionPathDetails from '../Components/Organisms/FusionPathDetails'
import {selectors} from "../Redux";

const mapStateToProps = state => ({
    currentFusionPathName: selectors.FusionPaths.currentFusionPathName(state),
    currentFusionPath: selectors.FusionPaths.currentFusionPath(state)
});

class FusionPathView extends React.PureComponent {
    static propTypes = {
        // mapStateToProps
        currentFusionPathName: PropTypes.string.isRequired,
        currentFusionPath: PropTypes.object.isRequired,
    };

    render() {
        return (
            <TwoPartTabContainer
                left={<FusionPathListContainer/>}
            >
                <FusionPathDetails fusionPathName={this.props.currentFusionPathName}
                                        fusionPath={this.props.currentFusionPath}/>
            </TwoPartTabContainer>
        );
    }
}

export default connect(mapStateToProps)(FusionPathView);
