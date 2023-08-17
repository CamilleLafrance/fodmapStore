package com.dai5.back.service.user;

import com.dai5.back.model.user.User;
import com.dai5.back.repository.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    // -- DOESN'T WORK ANYMORE --
    // CREATE
    public User create(User user){

        user.setRegistrationDate(LocalDateTime.now());
        return this.userRepository.save(user);
    }

    // READ
    public List<User> getAll() {

        return this.userRepository.findAll();
    }

    public User getById(Integer id) {

        return this.userRepository.findById(id).orElse(null);
    }

    // -- DOESN'T WORK --
    // UPDATE
    public void update(User user) {

        this.userRepository.save(user);
    }

    // DELETE
    public void delete(Integer id) {
        userRepository.deleteById(id);
    }

}
