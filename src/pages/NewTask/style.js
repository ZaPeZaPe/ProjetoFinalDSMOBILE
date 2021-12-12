import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#2C2F33'
  },
  label: {
    width: '90%',
    marginTop: 20,
    marginLeft: 20,
    fontSize:16,
    color: '#6370F4'
  },
  inputText: {
    width: '90%',
    padding: 10,
    height: 50,
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#6370F4',
    color: "#DCDDDE",
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
    backgroundColor: "#6370F4",
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
