# Difference between JPA, Hibernate and Spring Data JPA

## Java Persistence API (JPA)

- JPA stands for Java Persistence API.
- It is a specification (JSR 338) for object-relational mapping (ORM).
- JPA provides only interfaces and guidelines.
- It does not have its own implementation.
- It defines how Java objects should be mapped to database tables.

Example:
EntityManager, @Entity, @Table

---

## Hibernate

- Hibernate is an implementation of JPA.
- It is an Object Relational Mapping (ORM) framework.
- Hibernate provides all the functionality required to perform database operations.
- It converts Java objects into database tables and vice versa.
- Hibernate supports caching, lazy loading, HQL, and transaction management.

Example:
SessionFactory, Session, HQL

---

## Spring Data JPA

- Spring Data JPA is built on top of JPA and Hibernate.
- It reduces boilerplate code by providing ready-made repository interfaces.
- It automatically generates SQL queries for common database operations.
- Developers only need to create repository interfaces instead of writing DAO classes.

Example:
JpaRepository, CrudRepository

---

## Comparison

| Feature | JPA | Hibernate | Spring Data JPA |
|---------|-----|-----------|-----------------|
| Type | Specification | ORM Framework | Abstraction Framework |
| Implementation | No | Yes | Uses JPA/Hibernate |
| Boilerplate Code | More | Moderate | Very Less |
| Query Support | JPQL | HQL & JPQL | Derived Queries, JPQL |
| Developed By | Oracle/Java Community | Hibernate Team | Spring Team |

---

## Conclusion

- JPA is a specification.
- Hibernate is an implementation of JPA.
- Spring Data JPA is built on top of JPA/Hibernate to simplify database access and reduce boilerplate code.