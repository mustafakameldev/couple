import React, { Component, useEffect } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  Dimensions,
  FlatList,
  ScrollView,
  Text,
} from "react-native";
import { AdMobInterstitial } from "expo-ads-admob";
import Card from "../Components/MaterialCardWithoutImage1";
import CupertinoButtonDanger from "../Components/CupertinoButtonDanger";

const positionsList = [
  {
    id: 1,
    header: "The Lap Dance",
    subline: "Allows for face-to-face intimacy",
    position:
      "boy, sit on a chair or the edge of the bed. Your partner then 	faces you, wraps their arms around your back, climbs on top, 	and sits on your lap. Once in the saddle, they can ride up and 	down on your penis by pressing with their legs or knees. 	Want to go faster? Assist by grabbing their buttocks and 	lifting and bouncing.",
    image: require("/home/mospro/Documents/RN/CoupleGames/src/assets/1.jpg"),
  },
  {
    id: 2,
    header: "Edge of the Bed",
    subline: "deep penetration and clitoral play",
    position:
      "Girl,Lie on your back, hips at the edge of the bed, and have your partner stand and enter you from under your 			legs",
    image: require("/home/mospro/Documents/RN/CoupleGames/src/assets/2.jpeg"),
  },
  {
    id: 3,
    header: "The Little Dipper",
    subline:
      "great position that allows for clitoral stimulation with both 	your mouth and fingers.",
    position:
      "the partner on top will have sore triceps once you both 	finish. For the Little Dipper, the person on top uses either a 	bed, couch, or chair to hoist themselves over their partner. 	The person on bottom then inserts his penis into the top’s 	vagina or anus. The top then does tricep dips to move up and 	down on their partner’s penis. If done correctly, you should 	be in a T-shape formation. ",
    image: require("/home/mospro/Documents/RN/CoupleGames/src/assets/3.jpg"),
  },
  {
    id: 4,
    header: " 69",
    subline: "more oral",
    position:
      "lying down arrange themselves so that they’re facing each other’s genitals",
    image: require("/home/mospro/Documents/RN/CoupleGames/src/assets/4.jpeg"),
  },
  {
    id: 5,
    header: "Doggy Style with a Pillow ",
    subline: "Intensifies vaginal pleasure.",
    position:
      "Your partner lies face down on the bed, knees slightly bent 	and hips slightly raised. For comfort, and to increase the 	angle of their hips, they can place a pillow under their lower 	abs. You enter them from behind and keep your weight off 	their body by propping yourself up with your arms. This 	position creates a snug fit, making you feel larger to your 	partner.",
    image: require("/home/mospro/Documents/RN/CoupleGames/src/assets/5.jpg"),
  },
  {
    id: 6,
    header: "Three-Legged Glide",
    subline: "great position for getting steamy in the shower",
    position:
      "Girl, Lean your back against a wall, then when your partner 	is between your legs, wrap one leg around their hips. Have 	them grab onto your thigh to stabilize you as they thrust.",
    image: require("/home/mospro/Documents/RN/CoupleGames/src/assets/6.png"),
  },
  {
    id: 7,
    header: "Standing Doggy Style",
    subline: "stability- and pleasure-wise.",
    position:
      "you can face the bed or a wall and use it for support, and 	your partner can grab onto your hips and enter you from 		behind. Use your arms to press back into their thrusts, tilting 	your pelvis this way and that until they are hitting all the right 	spots.",
    image: require("/home/mospro/Documents/RN/CoupleGames/src/assets/7.png"),
  },
  {
    id: 8,
    header: "Reverse Chair",
    subline:
      "full-coverage vibration while also giving you complete control of the speed and depth that work for you.",
    position:
      "This woman-on-top position is the love-child of reverse 	cowgirl and sitting spoons. Have your partner sit down on 	the edge of the bed or a chair—ideally a wide one, or one 	without arms—and plant their feet into the ground for 	support. Spin around and ease yourself down onto to their 	penis so that you are sitting on their lap.",
    image: require("/home/mospro/Documents/RN/CoupleGames/src/assets/8.png"),
  },
  {
    id: 9,
    header: "Golden Retriever",
    subline: "great doggy-style",
    position:
      "Start in classic doggy style, with the receiving partner on 	all fours and the penetrating partner behind them. But 	instead of grasping the receiver is hips, the penetrator can 	drape their body over their partners so that there is more skin-	on-skin contact.",
    image: require("/home/mospro/Documents/RN/CoupleGames/src/assets/9.png"),
  },
  {
    id: 10,
    header: "The Sleeper Hold",
    subline: "Comfortable if your partner is pregnant or you are heavy",
    position:
      "You both lie on your sides facing the same direction, you 	in back. Your partner bends their knees and pushes their rear 	back toward you for easier access to their vagina. Adjusting 	the lean of your bodies will vary the angle of entry and help 	with rocking and thrusting.",
    image: require("/home/mospro/Documents/RN/CoupleGames/src/assets/10.jpg"),
  },
  {
    id: 11,
    header: "One Up",
    subline:
      "This is the best sex position for people who are particularly	sensitive along one side of the clitoris.",
    position:
      "Kneel on the floor with your mate lying on the edge of the 	bed. Raise one of their legs and ask them to support it by 	wrapping their hands around their hamstring just below the 	knee. With one hip raised, your partner will be able to add 	some movement to aid in your stroking or to help move you 	to the perfect spot.",
    image: require("/home/mospro/Documents/RN/CoupleGames/src/assets/11.jpg"),
  },
  {
    id: 12,
    header: "Squat Thrust",
    subline: "Puts them in control, maintains intimacy.",
    position:
      "Place pillows behind your back and sit on the bed with legs 	outstretched. Your partner straddles your waist, feet on the 	bed. They then bends their knees to lower themselves onto 	you, using one hand to direct your penis in. Just by pressing 	on the balls of their feet and releasing, they can raise and 	lower themselves on your shaft as slowly or quickly as they 	please.",
    image: require("/home/mospro/Documents/RN/CoupleGames/src/assets/12.jpg"),
  },
  {
    id: 13,
    header: "The G-Whiz ",
    subline: "Allows deep penetration and targeting the G-spot",
    position:
      "Your partner lies on their back. You kneel between their 	legs and raise them, resting their calves over your shoulders. 	Rock them in a side-to-side and up-and-down motion to 	bring the head and shaft of your penis in direct contact with 	the front wall of their vagina. Because this angle allows for 	deep penetration, thrust slowly at first avoid causing 	discomfort.",
    image: require("/home/mospro/Documents/RN/CoupleGames/src/assets/13.jpg"),
  },
  {
    id: 14,
    header: "Couch Surfer",
    subline: "Convenient for a quickie and adds spice outside the	bedroom.",
    position:
      "Ask your partner to bend her body over the arm of a couch 	as you enter them from behind. They can grind on the firm 	but cushy arm for multiple stimulation with minimal effort.",
    image: require("/home/mospro/Documents/RN/CoupleGames/src/assets/14.jpg"),
  },
  {
    id: 15,
    header: "Facing",
    subline:
      "A very intimate face-to-face position that encourages 	hugging and kissing.",
    position:
      "This is an ideal position if your partner is pregnant or 	either one of you had a knee injury because it keeps weight 	off the body. To get into the position, begin by lying on your 	sides and facing one another. Your partner spreads their legs 	slightly to allow you to enter them, then closes their legs so 	the part of your shaft that is outside can press against their 	clitoris. It is easy to kiss from this intimate face-to-face 	position.",
    image: require("/home/mospro/Documents/RN/CoupleGames/src/assets/15.jpg"),
  },
];

const renderAds = async () => {
  await AdMobInterstitial.setAdUnitID("ca-app-pub-9502802921397120/9347551064");
  await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true });
  await AdMobInterstitial.showAdAsync();
};

function PositionsScreen(props) {
  useEffect(() => {
    renderAds();
  }, 1000);
  return (
    <View style={styles.container}>
      <StatusBar hidden />

      <ScrollView style={styles.imageStack}>
        <Image
          source={require("../assets/intro_image.jpg")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <Text style={styles.introTextStyle}>
          The simplest way to add some variety to your sex life is to try out
          various sex positions. It’s something you and your partner could go
          ahead and try out , we got you a list of best sex positions and a spin
          wheel to help you choose position.
        </Text>
        <FlatList
          data={positionsList}
          keyExtractor={(item) => item.id}
          style={styles.listStyle}
          renderItem={(item) => {
            console.log(item);
            return <Card item={item.item} navigation={props.navigation} />;
          }}
        />
      </ScrollView>
      <CupertinoButtonDanger
        style={styles.cupertinoButtonDanger}
        onPress={() => props.navigation.navigate("WheelScreen", positionsList)}
        buttonName={"get lucky Position for tonight"}
      ></CupertinoButtonDanger>
    </View>
  );
}

const screenWidth = Dimensions.width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E00087",
  },
  image: {
    top: 0,
    width: screenWidth,
    height: 370,
    left: -1,
  },
  imageStack: {
    height: 430,
    marginTop: -47,
    marginLeft: -7,
  },
  cupertinoButtonDanger: {
    height: 44,
    width: screenWidth,
    backgroundColor: "#FF81AD",
    marginTop: 10,
    marginBottom: 10,
  },
  listStyle: {
    width: screenWidth,
    marginStart: 15,
    marginEnd: 15,
  },
  introTextStyle: {
    width: Dimensions.width,
    marginStart: 20,
    marginEnd: 20,
    fontSize: 18,
    color: "#FFD7FF",
  },
});

export default PositionsScreen;
