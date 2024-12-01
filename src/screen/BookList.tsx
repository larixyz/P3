import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import books from '../data/books.json';
import { BookList, Books } from '../types/type';

const BookListScreen: React.FC = () => {
  const bookData: BookList = books;

  return (
    <View style={styles.container}>
      <FlatList
        data={bookData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }: { item: Books }) => (
          <View style={styles.bookItem}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.author}</Text>
            <Text>{item.publisher}</Text>
            <Text>{item.year}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 10 
},
  bookItem: { 
    padding: 10, 
    marginVertical: 5, 
    backgroundColor: '#f2f2f2', 
    borderRadius: 5 
},
  title: { 
    fontWeight: 'bold', 
    fontSize: 16 
},
});

export default BookListScreen;
