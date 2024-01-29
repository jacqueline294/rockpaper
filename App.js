
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const choices = ['rock', 'paper', 'scissors'];

  const playGame = (playerChoice) => {
    const randomIndex = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomIndex];

    setPlayerChoice(playerChoice);
    setComputerChoice(computerChoice);

    if (playerChoice === computerChoice) {
      setResult('It\'s a tie!');
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      setResult('You win!');
    } else {
      setResult('You lose!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Welcome to Rock, Paper, Scissors</Text>
      <Text></Text>
      <View style={styles.choicesContainer}>
        {choices.map((choice) => (
          <TouchableOpacity
            key={choice}
            style={styles.choiceButton}
            onPress={() => playGame(choice)}
          >
            <Text style={styles.choiceText}>{choice}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.result}>{result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  title: {
    
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  choicesContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  choiceButton: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  choiceText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  result: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default App;
