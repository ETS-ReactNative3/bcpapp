import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';

import BcpText from '../shared/BcpText';
import PsalmHeader from './PsalmHeader';

const Psalm91 = ({navigator, name}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <PsalmHeader title="Psalm 91" annotation="Qui habitat" />
        <BcpText>
          1 He who dwells in the shelter of the Most High * abides under the
          shadow of the Almighty. 2 He shall say to the LORD, "You are my refuge
          and my stronghold, * my God in whom I put my trust." 3 He shall
          deliver you from the snare of the hunter * and from the deadly
          pestilence. 4 He shall cover you with his pinions, and you shall find
          refuge under his wings; * his faithfulness shall be a shield and
          buckler. 5 You shall not be afraid of any terror by night, * nor of
          the arrow that flies by day; 6 Of the plague that stalks in the
          darkness, * nor of the sickness that lays waste at mid-day. 7 A
          thousand shall fall at your side and ten thousand at your right hand,
          * but it shall not come near you. 8 Your eyes only have to behold * to
          see the reward of the wicked. 9 Because you have made the LORD your
          refuge, * and the Most High your habitation, 10 There shall no evil
          happen to you, * neither shall any plague come near your dwelling. 11
          For he shall give his angels charge over you, * to keep you in all
          your ways. 12 They shall bear you in their hands, * lest you dash your
          foot against a stone. 13 You shall tread upon the lion and the adder;
          * you shall trample the young lion and the serpent under your feet. 14
          Because he is bound to me in love, therefore will I deliver him; * I
          will protect him, because he knows my Name. 130 Compline 15 He shall
          call upon me, and I will answer him; * I am with him in trouble; I
          will rescue him and bring him to honor. 16 With long life will I
          satisfy him, * and show him my salvation.
        </BcpText>
        <BcpText />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default Psalm91;
