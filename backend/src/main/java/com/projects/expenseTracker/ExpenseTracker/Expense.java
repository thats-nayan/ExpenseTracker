package com.projects.expenseTracker.ExpenseTracker;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
@Entity
public class Expense {
    @Id
    private Long id;
    private String details;
    private Long amount;

    public Expense()
    {

    }
    public Expense(Long id,String details,Long amount)
    {
        this.id = id;
        this.details = details;
        this.amount = amount;
    }
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    public Long getAmount() {
        return amount;
    }

    public void setAmount(Long amount) {
        this.amount = amount;
    }
}
