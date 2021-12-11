import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff'
  },
  label: {
    width: '90%',
    marginTop: 20,
    marginLeft: 20,
    fontSize:16,
    color: '#F92e6A'
  },
  inputText: {
    width: '90%',
    padding: 10,
    height: 50,
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F92e6A',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  buttonNewTask: {
    width: 60,
    height: 60,
    bottom: 30,
    left: 20,
    borderRadius: 50,
    position: "absolute",
    backgroundColor: "#f92e6A",
    justifyContent: "center",
    alignItems: "center"
  },
  iconButton: {
    color: "#ffffff",
    fontSize: 30,
    fontWeigth: "Bold"
  }
});

export default styles;
