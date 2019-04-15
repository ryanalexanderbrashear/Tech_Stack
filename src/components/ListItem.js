import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';
import * as actions from '../actions'; //Pull all of the actions from the index.js file 

class ListItem extends Component {
    render() {
        const { titleStyle } = styles;

        return (
            <CardSection>
                <Text style={titleStyle}>{this.props.library.item.title}</Text>
            </CardSection>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

export default ListItem;