import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import { connect } from 'react-redux';

export default class FilterTask extends Component {
    render() {
        const { onAll, onCompleted, onIncomplete } = this.props;
        return (
            <View 
                style={styles.filterTask}>
                <TouchableOpacity 
                    style={styles.buttonFilterTask} 
                    onPress={() => onAll()} >
                    <Text >All</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.buttonFilterTask} 
                    onPress={() => onCompleted()}>
                    <Text >Completed</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.buttonFilterTask} 
                    onPress={() => onIncomplete()}>
                    <Text >Incomplete</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    filterTask: {
        height: 80,
        flexDirection: 'row',
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    buttonFilterTask: {        
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10
    }
});


