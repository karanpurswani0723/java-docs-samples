package com.example.java.controller;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction,String> {

    /*@Query("{ 'accountNumber' : ?0 }")
    List<Transaction> findByAccountNumber(String accountNumber);*/

    @Query("SELECT t FROM transaction t WHERE t.accountNumber= :accountNumber ")
    public List<Transaction> findByAccountNumber(@Param("accountNumber") String accountNumber);
}
