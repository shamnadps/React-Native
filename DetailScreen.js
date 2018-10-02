import React from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';

class DetailsScreen extends React.Component {

    render() {
        const { navigation } = this.props;
        const name = navigation.getParam('name', 'Missing Name');
        const company = navigation.getParam('company', 'Missing Company');

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
                <Text>Name: {name}</Text>
                <Text>Company: {company}</Text>
                <Button
                    title="Go Back"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        );
    }
}

export default DetailsScreen;