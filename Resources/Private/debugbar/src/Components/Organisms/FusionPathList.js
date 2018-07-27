import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import styles from '../../SharedStyles/List';

class FusionPathList extends React.PureComponent {
    static propTypes = {
        classes: PropTypes.object.isRequired,
        fusionPaths: PropTypes.object.isRequired,
        onItemClick: PropTypes.func.isRequired
    };

    state = {
        open: {}
    };

    handleItemClick = (pathSegment, pathStack) => {
        const mergedPath = this.mergePath(pathSegment, pathStack);
        this.props.onItemClick(mergedPath);

        // Open/Close logic
        if (this.hasChildren(pathStack.concat([pathSegment]), this.props.fusionPaths)) {
            this.setState(state => ({
                ...state,
                open: {
                    ...state.open,
                    [mergedPath]: !this.isOpen(mergedPath)
                }
            }));
        }
    };

    isOpen = mergedPath => this.state.open.hasOwnProperty(mergedPath) && this.state.open[mergedPath];

    mergePath = (pathSegment, pathStack) => pathStack.concat([pathSegment]).reduce((prev, cur) => prev + '.' + cur);

    hasChildren = (pathStack, object) => this.getChildren(pathStack, object) !== null;

    getChildren = (pathStack, object) => {
        const top = pathStack.shift();
        if (typeof object !== 'object' ||
            object === null ||
            !object.hasOwnProperty(top) ||
            typeof object[top] !== 'object' ||
            object[top] === null ||
            // Object.keys(object[top]).length === 0 ||
            Object.keys(object[top]).filter(segment => segment.indexOf('__') !== 0).length === 0) {
            return null;
        }
        if (pathStack.length > 0 && Object.keys(object[top]).length > 0) {
            return this.getChildren(pathStack, object[top]);
        }
        return object[top];
    };

    renderNestedList = (pathSegments, component, pathStack) => {
        const validSegments = Object.keys(pathSegments).filter(segment => segment.indexOf('__') !== 0);
        return (
            <List component={component} disablePadding>
                {validSegments.map(pathSegment =>
                    <React.Fragment key={this.mergePath(pathSegment, pathStack)}>
                        <ListItem
                            button
                            onClick={() => this.handleItemClick(pathSegment, pathStack)}>
                            <ListItemText primary={pathSegment}/>
                            {this.hasChildren(pathStack.concat([pathSegment]), this.props.fusionPaths) ?
                                this.isOpen(this.mergePath(pathSegment, pathStack)) ?
                                    <ExpandLess/> :
                                    <ExpandMore/>
                                : null
                            }
                        </ListItem>
                        {this.hasChildren(pathStack.concat([pathSegment]), this.props.fusionPaths) ?
                            <Collapse in={this.state.open[this.mergePath(pathSegment, pathStack)]} timeout="auto"
                                      unmountOnExit>
                                {this.renderNestedList(
                                    this.getChildren(pathStack.concat([pathSegment]), this.props.fusionPaths),
                                    "div",
                                    pathStack.concat([pathSegment])
                                )}
                            </Collapse> : null
                        }
                    </React.Fragment>
                )}
            </List>
        );
    };

    render() {
        return (
            <div className={this.props.classes.root}>
                {this.renderNestedList(this.props.fusionPaths, "nav", [])}
            </div>
        );
    }
}

export default withStyles(styles)(FusionPathList);
