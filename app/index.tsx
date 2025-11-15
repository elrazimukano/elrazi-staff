import { Link } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Link href={'/second'}>
        <Button title="Second" >
          <Text> Second
          </Text>
        </Button>
      </Link>
      <Link href={'/third'} >third </Link>
      <Link href={'/login'}>
      Login
      </Link>
    </View>
  );
}
