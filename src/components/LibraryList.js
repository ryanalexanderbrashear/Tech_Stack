import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
    renderItem(library) {
        return <ListItem library={library} />;
    }

    render() {
        const { listStyle } = styles;

        //Iterate through the list of libraries past in as a prop
        //ListViews are like a TableView in iOS
        return (
            <FlatList
                style={listStyle} 
                data={this.props.libraries}
                renderItem={this.renderItem}
                keyExtractor={(library) => library.id.toString()}
            />
        );
    }
}

const styles = {
    listStyle: {
        marginTop: 4
    }
};

//Map our state from Redux to props that will be used by the LibraryList
const mapStateToProps = state => {
    return { libraries: state.libraries }; //Return a Javascript object pulling data from the state to be used as props
};

export default connect(mapStateToProps)(LibraryList); //Calls the connect function, which returns another function, which we pass in the component to as a parameter

//When our app boots, it creates a new store using the Libraries reducer, which gives us a piece of state called libraries, giving us an array of library objects. The store is then passed to the provider as a prop that aids in communication between React and Redux. The App component is then rendered to the screen, which renders the LibraryList. This triggers the Connect function in the Library List, which pulls the state from the Store (given by the Provider) and the connect function gives it to the LibraryList after converting it into props using the mapStateToProps function.