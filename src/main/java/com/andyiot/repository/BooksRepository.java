package com.andyiot.repository;
import org.springframework.data.repository.CrudRepository;

import com.andyiot.model.Books;
public interface BooksRepository extends CrudRepository<Books, Long>
{
}
