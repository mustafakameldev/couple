import React, { Component } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  BackHandler,
} from "react-native";
import { AdMobInterstitial } from "expo-ads-admob";
class PositionScreen extends Component {
  state = {};
  backAction = () => {};

  renderAds = async () => {
    await AdMobInterstitial.setAdUnitID(
      "ca-app-pub-9502802921397120/2150753176"
    );
    await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true });
    await AdMobInterstitial.showAdAsync();
  };

  componentDidMount() {
    this.renderAds();
    this.BackHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      this.backAction
    );
  }
  render() {
    console.log(this.props.navigation);
    return (
      <View style={styles.container}>
        <View style={styles.loremIpsumRow}>
          <Text style={styles.loremIpsum}></Text>
          <Image
            source={this.props.route.params.image}
            resizeMode="contain"
            style={styles.image}
          ></Image>
        </View>
        <ScrollView style={styles.rect}>
          <Text placeholder="header" style={styles.headerStyle}>
            {this.props.route.params.header}
          </Text>
          <Text
            placeholder="body position"
            numberOfLines={10}
            maxLength={"null"}
            style={styles.sublineStyle}
          >
            {this.props.route.params.subline}
          </Text>
          <Text style={styles.doText}>How to do ?</Text>
          <Text
            placeholder="body position"
            maxLength={"null"}
            style={styles.positionStyle}
          >
            {this.props.route.params.position}
          </Text>
        </ScrollView>
      </View>
    );
  }
}

export default PositionScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(15,15, 15,0.03)",
  },
  loremIpsum: {
    color: "#121212",
    marginTop: 200,
  },
  image: {
    width: 647,
    height: 315,
    marginLeft: 213,
    marginTop: -18,
  },
  loremIpsumRow: {
    height: 315,
    flexDirection: "row",
    marginTop: 20,
    marginLeft: -350,
    marginRight: -150,
  },
  rect: {
    width: Dimensions.width,
    height: 360,
    backgroundColor: "#E6E6E6",
    marginTop: 15,
    marginStart: 30,
    marginEnd: 30,
  },
  headerStyle: {
    color: "#E00087",
    fontSize: 25,
    width: 250,
    height: 40,
    marginTop: 26,
    marginLeft: 20,
  },
  sublineStyle: {
    color: "#FF3787",
    fontSize: 18,
    width: 330,
    height: 60,
    marginLeft: 20,
  },
  positionStyle: {
    color: "#FF3787",
    fontSize: 18,
    width: 280,
    height: 290,
    marginLeft: 20,
    marginTop: 8,
  },
  doText: { color: "#7E008A", fontSize: 18, marginLeft: 20 },
});
