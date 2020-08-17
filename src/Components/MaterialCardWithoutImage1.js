import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

class MaterialCardWithoutImage1 extends Component {
  state = {
    thereDesc: null,
  };
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate("PositionScreen", this.props.item)
          }
        >
          <View style={styles.bodyContent}>
            <Text style={styles.titleStyle}>{this.props.item.header}</Text>
            <Text style={styles.subtitleStyle}>{this.props.item.subline}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#CCC",
    flexWrap: "nowrap",
    backgroundColor: "#FF3D9E",
    shadowColor: "#000",
    marginTop: 15,
    shadowOffset: {
      width: -2,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
    overflow: "hidden",
  },
  bodyContent: {
    padding: 13,
    paddingTop: 18,
    justifyContent: "center",
  },
  titleStyle: {
    fontSize: 19,
    color: "#FFD7FF",
    paddingBottom: 12,
  },
  subtitleStyle: {
    color: "#FFE1FF",
  },
  body: {
    padding: 16,
    paddingTop: 8,
  },
  bodyText: {
    lineHeight: 20,
    fontSize: 14,
    color: "#424242",
    flexWrap: "wrap",
  },
});

export default MaterialCardWithoutImage1;
