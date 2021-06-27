import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput, 
    Image,
    SafeAreaView,
    Platform,
    StatusBar
} from "react-native";

export default class HomeScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            player1: ""
        }
    }
    
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <Image style={{width: '80%', height: 50, marginTop: 20, marginBottom: 100}} source={require('./assets/title.jpg')} />

                <TextInput
                        style={styles.inputStyle}
                        placeholder='Player 1'
                        placeholderTextColor="white"
                        onChangeText={player1=>this.setState({player1})}
                    />

        

                    <TextInput
                        style={styles.inputStyle}
                        placeholder="Player 2"
                        placeholderTextColor="white"
                        onChangeText={(text) => {
                            this.setState({
                                player2: text
                            })
                        }}
                    />

                <TouchableOpacity style={{width: '100%', backgroundColor: '#03BBF9', bottom: 0}} onPress={() =>
                    this.props.navigation.navigate("Game", {player1: this.state.player1})
                }>
                    <Text style={{ textAlign: 'center', color: 'white', fontSize: 30, fontWeight: 'bold', bottom: 0 }}>Next →</Text>
                </TouchableOpacity>

                <Image style={{width: 40, height: 25, marginTop: 50}} source={require('./assets/remote.jpg')} />
                <Text style={{textAlign: 'center', color: 'white', fontSize: 12, fontWeight: 'bold'}}>Gamer</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C8E5F3',
        alignItems: 'center',
    },
    inputStyle: {
        height: 40,
        borderColor: '#03BBF9',
        borderWidth: 2,
        borderRadius: 20,
        marginTop: 20,
        marginRight: 20,
        marginLeft: 20,
        textAlign: 'center',
        color: '#03BBF9',
        width: 200,
        fontSize: 20,
        marginBottom: 50
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
});