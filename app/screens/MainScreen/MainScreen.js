import React, { Component } from 'react';
import {
  StyleSheet, View, Text,
} from 'react-native';

class MainScreen extends Component {
  render() {
    const { dataSource } = this.props;
    return (
      <View>
        <ListView
          dataSource={dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
      </View>
    )
  }
}

export { MainScreen }
