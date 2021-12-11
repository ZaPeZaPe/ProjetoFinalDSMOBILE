import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#000000",
    paddingTop: 20
  },
  Tasks:{
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5
  },
  deleteTask:{
    justifyContent: "center",
    paddingLeft: 15
  },
  DescriptonTask:{
    width: "75%",
    alignContent:"flex-start",
    backgroundColor: "#f5f5f5cf",
    padding: 12,
    paddingHorizontal: 20,
    borderRadius: 50,
    marginBottom: 5,
    marginRight: 15,
    color:"#282b25",
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
    fontSize: 35,
    fontWeigth: "Bold",
    marginBottom: 5
  }
});

export default styles;
