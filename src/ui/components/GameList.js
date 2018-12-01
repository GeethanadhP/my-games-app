import React from 'react'
import { FlatList, Image, StyleSheet } from 'react-native'
import { List, Divider } from 'react-native-paper'

class GameList extends React.Component {
  static gameItem({ item }) {
    return (
      <List.Item
        title={item.title}
        left={() => (
          <Image style={styles.gameIcon} source={{ uri: item.image }} />
        )}
      />
    )
  }

  render() {
    return (
      <FlatList
        data={this.props.games}
        keyExtractor={(item, index) => index.toString()}
        renderItem={GameList.gameItem}
        ItemSeparatorComponent={Divider}
      />
    )
  }
}

styles = StyleSheet.create({
  gameIcon: {
    width: 100,
    height: 80,
    padding: 20,
  },
})
export default GameList
