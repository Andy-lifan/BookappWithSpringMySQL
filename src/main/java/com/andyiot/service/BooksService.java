package com.andyiot.service;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.andyiot.model.Books;
import com.andyiot.repository.BooksRepository;
//defining the business logic
@Service
public class BooksService 
{
@Autowired
BooksRepository booksRepository;
//getting all books record by using the method findaAll() of CrudRepository
public List<Books> getAllBooks() 
{
List<Books> books = new ArrayList<Books>();
booksRepository.findAll().forEach(books1 -> books.add(books1));
return books;
}
//getting a specific record by using the method findById() of CrudRepository
public Books getBooksById(Long id) 
{
if(booksRepository.existsById(id)) 
{
return booksRepository.findById(id).get();
}
else { return null;}
}
//saving a specific record by using the method save() of CrudRepository
public void saveOrUpdate(Books books) 
{
if(books.getBookid()>0)
{
booksRepository.save(books);
}
}
//deleting a specific record by using the method deleteById() of CrudRepository
public void delete(Long id) 
{ 
if(booksRepository.existsById(id))
{
booksRepository.deleteById(id);
} 
}
//updating a record
public void update(Books books, Long bookid) 
{
if(bookid>0 && booksRepository.existsById(bookid))
{
	booksRepository.save(books);
}
}

}