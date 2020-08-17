import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import WheelOfFortune from "react-native-wheel-of-fortune";

const participants = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
];
const colors = [
  "#FF7CFF",
  "#EE6DA6",
  "#F4C3CE",
  "#BB5D8F",
  "#F4A5B9",
  "#7E008A",
];

export default class WheelScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      winnerValue: null,
      winnerIndex: null,
    };
    this.child = null;
  }

  _renderPlayButton = () => {
    return <Text style={styles.tapToStart}>SPIN</Text>;
  };

  renderWinnerText = () => {
    if (this.state.winnerValue === null) {
      return <Text> </Text>;
    }
    if (this.state.winnerValue != null) {
      var position = Math.floor(Math.random() * 16);
      return (
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate(
              "PositionScreen",
              this.props.route.params[position]
            );
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 34, color: "#ffffff" }}> you got </Text>
            <Text style={{ fontSize: 55, color: "#F9FFB9" }}>
              {this.state.winnerValue}
            </Text>
          </View>
          <Text style={{ color: "#F9FFB9" }}>
            let's see what is that mean 😉
          </Text>
        </TouchableOpacity>
      );
    }
  };
  async componentDidMount() {}
  render() {
    console.log("params", this.props.route.params);
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#E00087" barStyle={"light-content"} />

        <View style={styles.introStyle}>
          <Text style={styles.introStyleText}>
            Tonight, it's your night
            {"\n"} Play To find out your luck position and know more about it,
            Have a GREAAAT night
          </Text>
        </View>

        <WheelOfFortune
          onRef={(ref) => (this.child = ref)}
          rewards={participants}
          knobSize={25}
          borderWidth={2}
          borderColor={"#FFF"}
          innerRadius={30}
          duration={7000}
          colors={colors}
          backgroundColor={"#E00087"}
          getWinner={(value, index) => {
            this.setState({ winnerValue: value, winnerIndex: index });
          }}
        />

        <View
          style={{
            alignItems: "center",
            alignSelf: "center",
            paddingBottom: 40,
          }}
        >
          {this.renderWinnerText()}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E00087",
  },
  winner: {
    width: "100%",
    padding: 10,
    backgroundColor: "#fff",
    bottom: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  winnerText: {
    fontSize: 26,
    color: "#666",
  },
  tapToStart: {
    fontSize: 50,
    color: "#fff",
    fontWeight: "bold",
  },
  introStyle: {
    marginTop: 50,
    justifyContent: "center",
  },
  introStyleText: {
    fontSize: 18,
    color: "#FFECEA",
    marginStart: 20,
  },
  luckyButtonStyle: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#E00087",
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "#fff",
  },
  luckyText: {
    color: "#fff",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
});
