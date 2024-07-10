import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import TextIn from './TextIn';


const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [annualInterestRate, setAnnualInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState('');
  const [error, setError] = useState('');

  const calculateLoan = () => {
    // Parse input values as floats
    const loanAmountFloat = parseFloat(loanAmount);
    const annualInterestRateFloat = parseFloat(annualInterestRate);
    const loanTermFloat = parseFloat(loanTerm);

    // Validate inputs
    if (isNaN(loanAmountFloat) || isNaN(annualInterestRateFloat) || isNaN(loanTermFloat)) {
      setError('Please enter valid numeric values for all fields.');
      setMonthlyPayment('');
      return;
    }

    // Clear error message
    setError('');

    // Calculate monthly interest rate and number of payments
    const monthlyInterestRate = annualInterestRateFloat / 100 / 12;
    const numberOfPayments = loanTermFloat * 12;

    // Calculate monthly payment using formula
    const monthlyPaymentValue = (loanAmountFloat * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

    // Display monthly payment rounded to 2 decimal places
    setMonthlyPayment(monthlyPaymentValue.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Loan Calculator</Text>
      <View style={styles.form}>
        <TextIn 
        place='Loan Amount (Rupees)'
        type='numeric'
        value={loanAmount}
        txt={text => setLoanAmount(text)}
        />
        <TextIn 
        place='Annual Interest Rate (%)'
        type='numeric'
        value={annualInterestRate}
        txt={text => setAnnualInterestRate(text)}
        />
        <TextIn 
        place='Loan Term (years)'
        type='numeric'
        value={loanTerm}
        txt={text => setLoanTerm(text)}
        />
        <Button
          title="Calculate"
          onPress={calculateLoan}
        />
        {error ? <Text style={styles.error}>{error}</Text> : null}
        <TextIn 
        place='Monthly Payment'
        value={monthlyPayment}
        edit={false}
        />
      </View>
    </View>
  );
};

export default LoanCalculator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  form: {
    width: '100%',
  },
  error: {
    color: 'red',
    fontSize: 16,
    marginBottom: 10,
  },
});


