package com.dai5.back.service.user;

import com.dai5.back.model.user.User;
import com.dai5.back.repository.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User create(User user){
        return this.userRepository.save(user);
    }

    public List<User> getAll() {
        return this.userRepository.findAll();
    }

    public User getById(Integer id) {
        return this.userRepository.findById(id).orElse(null);
    }
}
