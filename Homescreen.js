import React from 'react';
import { View, Text, Button } from 'react-native';
class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen 2</Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details', {
                        name: 'Shamnad',
                        company: 'Gofore',
                    })}
                />
            </View>
        );
    }
}

export default HomeScreen;