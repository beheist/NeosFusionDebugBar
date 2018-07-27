import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing.unit * 4,
    },
});

class FusionPrototypeList extends React.PureComponent {
    static propTypes = {
        classes: PropTypes.object.isRequired,
        items: PropTypes.object.isRequired,
        onItemClick: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            groupedPrototypes: this.groupPrototypes(props.items)
        }
    }

    groupPrototypes = prototypes => {
        const grouped = {};
        Object.keys(prototypes).map(prototypeName => {
            const packageName = prototypeName.split(':')[0];
            if (!grouped.hasOwnProperty(packageName)) {
                grouped[packageName] = {__isOpen: false};
            }
            grouped[packageName][prototypeName] = prototypes[prototypeName];
        });
        return grouped;
    };

    handleToggleClick = (packageName) => {
        this.setState(state => ({
            groupedPrototypes: {
                ...state.groupedPrototypes,
                [packageName]: {
                    ...state.groupedPrototypes[packageName],
                    __isOpen: !state.groupedPrototypes[packageName].__isOpen
                }
            }
        }));
    };

    render() {

        return (
            <div className={this.props.classes.root}>
                <List component="nav">
                    {Object.keys(this.state.groupedPrototypes).map(packageName => (
                        <React.Fragment key={packageName}>
                            <ListItem button onClick={() => this.handleToggleClick(packageName)}>
                                <ListItemText primary={packageName}/>
                                {this.state.groupedPrototypes[packageName].__isOpen ? <ExpandLess/> : <ExpandMore/>}
                            </ListItem>
                            <Collapse in={this.state.groupedPrototypes[packageName].__isOpen} timeout="auto"
                                      unmountOnExit>
                                <List component="div" disablePadding>
                                    {Object.keys(this.state.groupedPrototypes[packageName]).map(prototypeName => (
                                        prototypeName != "__isOpen" ?
                                            <ListItem button key={prototypeName} className={this.props.classes.nested}
                                                      onClick={() => this.props.onItemClick(prototypeName)}>
                                                <ListItemText primary={prototypeName}/>
                                            </ListItem> : null
                                    ))}
                                </List>
                            </Collapse>
                        </React.Fragment>
                    ))}
                </List>
            </div>
        );
    }
}

export default withStyles(styles)(FusionPrototypeList);
