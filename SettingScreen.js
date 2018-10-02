import React from 'react';
import { View, Text, Button } from 'react-native';
import DeviceInfo from 'react-native-device-info';

class SettingsScreen extends React.Component {
    static navigationOptions = {
        title: 'Settings',
    };
    render() {
        const deviceModal = DeviceInfo.getModel();
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Settings Screen</Text>
                <Text>Device Model: {deviceModal} </Text>
            </View>
        );
    }
}
export default SettingsScreen;