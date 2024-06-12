package com.projects.expenseTracker.ExpenseTracker;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ExpenseService {
//    private List<Expense> expenses;
    @Autowired
    private ExpenseRepository expenseRepository;
    public ExpenseService()
    {

    }

    public List<Expense> getExpenses(){
        return expenseRepository.findAll();
    }

    public boolean addExpense(Expense expense){
        if(expense.getAmount() == null || expense.getDetails() == null)
            return false;
        expenseRepository.save(expense);
        return true;
    }
    public boolean deleteExpenseById(Long id)
    {
        Optional<Expense> expense = expenseRepository.findById(id);
        if(expense.isPresent()){
            expenseRepository.deleteById(id);
            return true;
        }
        else
        return false;
    }
}
