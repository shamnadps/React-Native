import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import DeviceInfo from 'react-native-device-info';
class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home',
    };

    constructor(props) {
        super(props);
        this.state = { name: '', company: '' };
    }


    render() {
        const deviceModal = DeviceInfo.getModel();
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Device Model: {deviceModal}</Text>
                <Text>Enter Your details</Text>
                <TextInput
                    style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(name) => this.setState({ name })}
                    value={this.state.name} />
                <TextInput
                    style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(company) => this.setState({ company })}
                    value={this.state.company} />
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details', {
                        name: this.state.name,
                        company: this.state.company,
                    })}
                />
            </View >
        );
    }
}

export default HomeScreen;