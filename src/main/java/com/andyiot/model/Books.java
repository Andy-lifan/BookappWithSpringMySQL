package com.andyiot.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

//mark class as an Entity 
@Entity
//defining class name as Table name
@Table
public class Books
{
//Defining book id as primary key
@Id
@Column
private Long bookid;
@Column
private String bookname;
@Column
private String author;
@Column
private int price;
@Column
private LocalDate datepublished;

public Books() {}
public Books(Long bookid, String bookname, String author, int price, String datepublished) {
	this.bookid = bookid;
	this.bookname = bookname;
	this.author = author;
	setDatepublished(datepublished);
}
private static final DateTimeFormatter sTimeFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");

public Long getBookid() 
{
return bookid;
}
public void setBookid(Long bookid) 
{
this.bookid = bookid;
}
public String getBookname()
{
return bookname;
}
public void setBookname(String bookname) 
{
this.bookname = bookname;
}
public String getAuthor() 
{
return author;
}
public void setAuthor(String author) 
{
this.author = author;
}
public int getPrice() 
{
return price;
}
public void setPrice(int price) 
{
this.price = price;
}
public String getDatepublished() {
	return datepublished.format(sTimeFormatter);
}
public void setDatepublished(String datepublished) {
	this.datepublished = LocalDate.parse(datepublished, sTimeFormatter);
}
}