package com.dai5.back.controller;

import com.dai5.back.model.User;
import com.dai5.back.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserController {
    @Autowired
    private UserService userService;
    @PostMapping("/users/add")
    public User addUser(@RequestBody User user){
        return this.userService.save(user);
    }

    @GetMapping("/users")
    public List<User> getAllUsers(){
        return this.userService.getAll();
    }
}
