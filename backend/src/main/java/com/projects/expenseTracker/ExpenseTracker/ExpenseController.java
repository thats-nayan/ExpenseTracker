package com.projects.expenseTracker.ExpenseTracker;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class ExpenseController {

    @Autowired
    private ExpenseService expenseService;
    public ExpenseController() {
    }

    @GetMapping("/expenses")
    public ResponseEntity<List<Expense>> getExpenses() {
        return new ResponseEntity<>(expenseService.getExpenses(),HttpStatus.OK);
    }

    @PostMapping("/expenses")
    public ResponseEntity<String> addExpense(@RequestBody Expense expense){
        Random random = new Random();
        int random5digit = random.nextInt(90000)+10000;
        long nextId = (long) random5digit;
        expense.setId(nextId);
        boolean isExpenseAdded = expenseService.addExpense(expense);
        if(isExpenseAdded)
            return new ResponseEntity<>("Expense added successfully", HttpStatus.OK);
        else
            return new ResponseEntity<>("Invalid fields", HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping("/expenses/{id}")
    public ResponseEntity<String> deleteExpense(@PathVariable Long id)
    {
        boolean isExpenseRemoved = expenseService.deleteExpenseById(id);
        if(isExpenseRemoved)
            return new ResponseEntity<>("Expense deleted successfully",HttpStatus.OK);
        else
            return new ResponseEntity<>("Invalid ID", HttpStatus.BAD_REQUEST);
    }
}
