import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import FusionPrototypeList from '../Components/Organisms/FusionPrototypeList'
import TwoPartTabContainer from '../Components/Organisms/TwoPartTabContainer'

const mapStateToProps = state => ({
    prototypes: state.__prototypes
});

class FusionPrototypeView extends React.PureComponent {
    static propTypes = {
        prototypes: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        const firstPrototypeName = Object.keys(props.prototypes)[0];
        this.state = {
            selectedPrototypeName: firstPrototypeName,
            selectedPrototype: props.prototypes[firstPrototypeName]
        }
    }

    handleItemClick = prototypeName => this.setState({
        selectedPrototypeName: prototypeName,
        selectedPrototype: this.props.prototypes[prototypeName]
    });

    render() {
        return (
            <TwoPartTabContainer
                left={<FusionPrototypeList items={this.props.prototypes} onItemClick={this.handleItemClick}/>}
            >
                <h1>{this.state.selectedPrototypeName}</h1>
            </TwoPartTabContainer>
        );
    }
}

export default connect(mapStateToProps)(FusionPrototypeView);
