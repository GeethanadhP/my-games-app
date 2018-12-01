import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Searchbar, Button } from 'react-native-paper'
import { connect } from 'react-redux'
import { hltbActions } from '../../state/hltb'
import GameList from '../components/GameList'

class Home extends Component {
  render() {
    const { searchText, updateSearch, searching, games } = this.props

    let body
    if (searching)
      body = (
        <Button mode="text" loading={true}>
          Searching
        </Button>
      )
    else body = <GameList games={games} />

    return (
      <View>
        <Searchbar
          placeholder="Search Games"
          value={searchText}
          onChangeText={searchText => updateSearch(searchText)}
        />
        {body}
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    searchText: state.hltb.searchText,
    searching: state.hltb.searching,
    games: state.hltb.games,
  }
}

export default connect(
  mapStateToProps,
  hltbActions
)(Home)
