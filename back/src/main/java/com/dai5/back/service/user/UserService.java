package com.dai5.back.service.user;

import com.dai5.back.model.product.Category;
import com.dai5.back.model.user.User;
import com.dai5.back.repository.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    // CREATE
    public User create(User user){
        return this.userRepository.save(user);
    }

    // READ
    public List<User> getAll() {
        return this.userRepository.findAll();
    }

    public User getById(Integer id) {
        return this.userRepository.findById(id).orElse(null);
    }

    // UPDATE
    public User update(Integer id, User userDetails) {
        User user = userRepository.findById(id).get();
        user.setFirstName(userDetails.getFirstName());
        user.setLastName(user.getLastName());
        user.setEmail(user.getEmail());
        user.setPasswordHash(user.getPasswordHash());
        user.setPhoneNumber(user.getPhoneNumber());
        user.setDateOfBirth(user.getDateOfBirth());
        user.setAddress(user.getAddress());
        user.setPostalCode(user.getPostalCode());
        user.setCity(user.getCity());
        user.setCountry(user.getCountry());
        user.setIsAdmin(user.getIsAdmin());

        return userRepository.save(user);
    }

    // DELETE
    public void delete(Integer id) {
        userRepository.deleteById(id);
    }

}
