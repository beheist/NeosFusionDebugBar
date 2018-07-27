import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {actions, selectors} from "../Redux";
import FusionPathList from '../Components/Organisms/FusionPathList'

const mapStateToProps = state => ({
    fusionPaths: selectors.FusionPaths.allFusionPaths(state)
});

const mapDispatchToProps = dispatch => ({
    setCurrentFusionPathName: fusionPathName => dispatch(actions.FusionPaths.setCurrentFusionPathName(fusionPathName))
});

class FusionPathListContainer extends React.PureComponent {
    static propTypes = {
        // mapStateToProps
        fusionPaths: PropTypes.object.isRequired,
        // mapDispatchToProps
        setCurrentFusionPathName: PropTypes.func.isRequired
    };

    render() {
        return <FusionPathList fusionPaths={this.props.fusionPaths} onItemClick={this.props.setCurrentFusionPathName} />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FusionPathListContainer);
