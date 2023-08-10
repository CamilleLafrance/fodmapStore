package com.dai5.back.controller.user;

import com.dai5.back.model.product.Category;
import com.dai5.back.model.user.User;
import com.dai5.back.service.user.UserService;
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
        return this.userService.create(user);
    }

    @GetMapping("/users")
    public List<User> getAllUsers(){
        return this.userService.getAll();
    }

    @GetMapping("/users/{idUser}")
    public User getUser(@PathVariable Integer idUser){
        return this.userService.getById(idUser);
    }

}
