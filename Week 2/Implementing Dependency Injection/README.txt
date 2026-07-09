# Exercise 2: Implementing Dependency Injection

## Scenario
Manage the dependencies between BookService and BookRepository using Spring IoC and Dependency Injection.

## Implementation

This exercise is implemented in the project created for Exercise 1:

Project Name:
LibraryManagement

### Setter Injection

```java
public void setBookRepository(BookRepository bookRepository) {
    this.bookRepository = bookRepository;
}
```

### XML Configuration

```xml
<bean id="bookRepository"
      class="com.library.repository.BookRepository"/>

<bean id="bookService"
      class="com.library.service.BookService">
    <property name="bookRepository" ref="bookRepository"/>
</bean>
```

### Output

```
Book Service: Calling Repository...
Book Repository: Book data accessed.
```

Dependency Injection was verified successfully by running the LibraryManagement application.