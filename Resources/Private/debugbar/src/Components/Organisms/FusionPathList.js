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

        if (this.hasChildren(pathStack.concat([pathSegment]), this.props.fusionPaths)) {
            // Open/Close logic
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

    mergePath = (pathSegment, pathStack) => pathStack.concat([pathSegment]).reverse().reduce((prev, cur) => prev + '.' + cur);

    hasChildren = (pathStack, object) => this.getChildren(pathStack, object) !== null;

    getChildren = (pathStack, object) => {
        console.log(pathStack);
        console.log(object);
        const top = pathStack.shift();
        if (typeof object !== 'object' || !object.hasOwnProperty(top) || Object.keys(object[top]).length === 0) {
            return null;
        }
        if (pathStack.length > 0 && Object.keys(object[top]).length > 0) {
            return this.hasChildren(pathStack, object[top]);
        }
        return object[top];
    };

    renderNestedList = (pathSegments, component, pathStack) => {
        return (
            // TODO Remove all paths with __
            <List component={component} disablePadding>
                {Object.keys(pathSegments).map(pathSegment =>
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
                                {/*{this.renderNestedList(this.getChildren(pathStack.concat([pathSegment]), this.props.fusionPaths), "div", pathSegments.slice(0, pathSegments.length - 1))}*/}
                                <p>Foo</p>
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
                {/*<List component="nav">*/}
                {/*{Object.keys(this.props.fusionPaths).map(pathSegment => (*/}
                {/*<React.Fragment key={pathSegment}>*/}
                {/*<ListItem button onClick={() => this.handleItemClick(pathSegment)}>*/}
                {/*<ListItemText primary={pathSegment}/>*/}
                {/*{this.state.groupedFusionPaths[packageName].__isOpen ? <ExpandLess/> : <ExpandMore/>}*/}
                {/*</ListItem>*/}
                {/*<Collapse in={this.state.groupedFusionPaths[packageName].__isOpen} timeout="auto"*/}
                {/*unmountOnExit>*/}
                {/*<List component="div" disablePadding>*/}
                {/*{Object.keys(this.state.groupedFusionPaths[packageName]).map(fusionPathName => (*/}
                {/*fusionPathName != "__isOpen" ?*/}
                {/*<ListItem button key={fusionPathName} className={this.props.classes.nested}*/}
                {/*onClick={() => this.props.onItemClick(fusionPathName)}>*/}
                {/*<ListItemText primary={fusionPathName}/>*/}
                {/*</ListItem> : null*/}
                {/*))}*/}
                {/*</List>*/}
                {/*</Collapse>*/}
                {/*</React.Fragment>*/}
                {/*))}*/}
                {/*</List>*/}
            </div>
        );
    }
}

export default withStyles(styles)(FusionPathList);
