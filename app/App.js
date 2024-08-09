import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Main } from "./components/Main";

export default function App() {
	return (
		<SafeAreaProvider>
			<View style={styles.container}>
				<StatusBar style="light" />
				<Main />
			</View>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#3e4552",
		alignItems: "center",
		justifyContent: "center"
	}
});
