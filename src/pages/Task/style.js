import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#2C2F33",
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
    backgroundColor: "#36393F",
    padding: 12,
    paddingHorizontal: 20,
    borderRadius: 50,
    marginBottom: 5,
    marginRight: 15,
    color:"#DCDDDE",
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
    fontSize: 35,
    fontWeigth: "Bold",
    marginBottom: 5
  }
});

export default styles;
