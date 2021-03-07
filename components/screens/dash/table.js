import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
 
export default class TableCompnent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['ID', 'Name', 'Author', 'Price'],
      tableData: [
        ['1', 'Madol Duwa', 'M', '400'],
        ['2', 'Gam Peraliya', 'G', '200'],
        ['3', 'Sath Sumithuro', 'S', '150'],
        ['4', 'Yuganthaya', 'Y', '300']
      ]
    }
  }
 
  _alertIndex(index) {
    Alert.alert(`This is row ${index + 1}`);
  }
 
  render() {
    const state = this.state;
 
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderColor: 'transparent'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          {
            state.tableData.map((rowData, index) => (
              <TableWrapper key={index} style={styles.row}>
                {
                  rowData.map((cellData, cellIndex) => (
                    <Cell key={cellIndex} data={cellIndex === 4 ? element(cellData, index) : cellData} textStyle={styles.text}/>
                  ))
                }
              </TableWrapper>
            ))
          }
        </Table>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#527cde' },
  text: { margin: 6 },
  row: { flexDirection: 'row', backgroundColor: '#bebae6' }
});