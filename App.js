import { StyleSheet, Text, View, TextInput } from 'react-native';
import LoanCalculator from './components/LoanCalculator'

export default function App() {
  return (
    <View style={styles.container}>
      <LoanCalculator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
