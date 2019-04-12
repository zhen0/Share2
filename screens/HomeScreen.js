import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  Alert,
  View
} from "react-native";
import { WebBrowser } from "expo";

import { MonoText } from "../components/StyledText";

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: ""
    };
  }
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <ScrollView>
        <View styles={styles.container}>
          <View>
            <View styles={styles.welcomeContainer}>
              <Text styles={styles.getStartedText}>Welcome </Text>
            </View>
            <View>
              <Text>
                The idea of this app is to set up a community that shares the
                strollers, scooters, bikes, toys and more that our kids want but
                our apartments can not hold!{" "}
              </Text>
            </View>

            <Image
              source={{
                uri:
                  "https://freedesignfile.com/upload/2017/09/Happy-little-girl-playing-doll-house-filled-with-mini-furniture-toys-Stock-Photo-07.jpg"
              }}
              style={{ width: 400, height: 400, borderRadius: 8 }}
            />
            {/* <SignUp /> */}
          </View>

          <View>
            <Text>Sign Up</Text>
          </View>

          <View style={{ padding: 10 }}>
            <TextInput
              style={{ height: 40 }}
              placeholder="name"
              onChangeText={name => this.setState({ name })}
            />
            <View style={{ padding: 10 }}>
              <TextInput
                style={{ height: 40 }}
                placeholder="address"
                onChangeText={address => this.setState({ address })}
              />
            </View>
          </View>

          <Button
            onPress={() => {
              console.log(this.state);
              Alert.alert("You have been added!");
            }}
            title="Add Me"
          />

          <Text>Your Name: {this.state.name}</Text>
          <Text>Your Address: {this.state.address}</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },

  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  }
});
