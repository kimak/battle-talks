import React from "react";
import { View, Text } from "react-native";
import { StackNavigator } from "react-navigation";

import TalksScreen from "../features/battle/Talks.glue";
import BattleScreen from "../features/battle/Battle";
import InviteScreen from "../features/battle/Invite.glue";
import SideChooseScreen from "../features/battle/SideChoose.glue";
import CreateBattleScreen from "../features/battle/CreateBattle.glue";
import JoinScreen from "../features/battle/Join.glue";
import HomeScreen from "../features/home/Home.glue";

export default StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  },
  Talks: {
    screen: TalksScreen,
    navigationOptions: {
      header: null
    }
  },
  CreateBattle: {
    screen: CreateBattleScreen,
    navigationOptions: {
      header: null
    }
  },
  Invite: {
    screen: InviteScreen,
    navigationOptions: {
      header: null
    }
  },
  SideChoose: {
    screen: SideChooseScreen,
    navigationOptions: {
      header: null
    }
  },
  Battle: {
    screen: BattleScreen,
    navigationOptions: {
      header: null
    }
  },
  Join: {
    screen: JoinScreen,
    navigationOptions: {
      header: null
    }
  }
});
