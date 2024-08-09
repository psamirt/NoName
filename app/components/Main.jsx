import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function Main() {
	const insets = useSafeAreaInsets();
	return (
		<View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
			<StatusBar style="light" />
			<Text style={{ color: "white" }}>staring</Text>
		</View>
	);
}
