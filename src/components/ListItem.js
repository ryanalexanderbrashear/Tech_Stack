import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation, UIManager } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions'; //Pull all of the actions from the index.js file 

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true); 

class ListItem extends Component {

    componentDidUpdate() { //Called when the component has been rerendered on the device
        LayoutAnimation.spring();
    }

    renderDescription() {

        const { library, expanded } = this.props;

        if (expanded) {
            return (
                <CardSection>
                    <Text>{library.item.description}</Text>
                </CardSection>
            );
        }
    }

    render() {
        const { titleStyle } = styles;
        const { id, title } = this.props.library.item;

        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle}>{title}</Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

const mapStateToProps = (state, ownProps) => { //When a list item is created, it is passed a library, which it can access through ownProps
    const expanded = state.selectedLibraryId === ownProps.library.item.id
    return { expanded };
} 

export default connect(mapStateToProps, actions)(ListItem); //Bind the action creators to the component using the connect function