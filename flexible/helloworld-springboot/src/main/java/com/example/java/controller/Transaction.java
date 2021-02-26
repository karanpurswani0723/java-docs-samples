package com.example.java.controller;

import javax.persistence.*;
import javax.persistence.Entity;

@Entity(name = "transaction")
//@Table(name = "transaction")
public class Transaction {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long transactionId;

    private String accountNumber;
    private double Balance;
    private double creditDebitAmount;
    private String transactionType;
    private String date;

    @Transient
    private String faceUrl;

    public double getBalance() {
        return Balance;
    }

    public void setBalance(double Balance) {
        this.Balance = Balance;
    }

    public double getCreditDebitAmount() {
        return creditDebitAmount;
    }

    public void setCreditDebitAmount(double creditDebitAmount) {
        this.creditDebitAmount = creditDebitAmount;
    }

    public String getTransactionType() {
        return transactionType;
    }

    public void setTransactionType(String transactionType) {
        this.transactionType = transactionType;
    }

    public Long getTransactionId() {
        return transactionId;
    }

    public void setTransactionId(Long transactionId) {
        this.transactionId = transactionId;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getAccountNumber() {
        return accountNumber;
    }

    public void setAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
    }

    public String getFaceUrl() {
        return faceUrl;
    }

    public void setFaceUrl(String faceUrl) {
        this.faceUrl = faceUrl;
    }
}
