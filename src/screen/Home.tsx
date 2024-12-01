import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import books from "../data/books.json";
import { BookList } from "../types/type";

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [stats, setStats] = useState({
    livrosTotais: 0,
    livroMaisVelho: "",
    livroMaisNovo: "",
    disciplinasTotais: 40,
  });

  useEffect(() => {
    const bookData: BookList = books;
    const uniqueCourses = new Set(bookData.map((book) => book.course));
    const disciplinasTotais = uniqueCourses.size;

    const livrosTotais = bookData.length;

    const livroMaisVelho = bookData.reduce((oldest, book) =>
      book.year < oldest.year ? book : oldest
    );

    const livroMaisNovo = bookData.reduce((newest, book) =>
      book.year > newest.year ? book : newest
    );

    setStats({
      livrosTotais,
      disciplinasTotais,
      livroMaisVelho: `${livroMaisVelho.title} (${livroMaisVelho.year})`,
      livroMaisNovo: `${livroMaisNovo.title} (${livroMaisNovo.year})`,
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bibliografia</Text>
        <View style={styles.card}>
            <Text>Total de disciplinas: {stats.disciplinasTotais}</Text>
            <Text>Total de livros: {stats.livrosTotais}</Text>
            <Text>Livro mais velho: {stats.livroMaisVelho}</Text>
            <Text>Livro mais novo: {stats.livroMaisNovo}</Text>
        </View>
      <Button title="Iniciar" onPress={() => navigation.navigate("Books")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    padding: 20,
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
    elevation: 2,
  },
});

export default HomeScreen;
