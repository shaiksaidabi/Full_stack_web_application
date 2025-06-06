package com.chanduInstitutions.ChanduInstitutions.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.chanduInstitutions.ChanduInstitutions.Entity.User;
import com.chanduInstitutions.ChanduInstitutions.Repository.UserRepository;

@RestController
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
@RequestMapping("/api")

public class UserController {
	@Autowired
	UserRepository userRepository;

	@GetMapping("/")
	public String Welcome() {
		return "Welcome to the ReactJs + SpringBoot + MySql";
	}

	/*
	 * ANOTHER WAY TO WRITE REGISTER MAPPING
	 * 
	 * @PostMapping("/register") public ResponseEntity<User>
	 * registerUser(@RequestBody User user) { // You can add validation checks here,
	 * e.g., check if the user already exists if
	 * (userRepository.existsByUsername(user.getUsername())) { return
	 * ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null); } User savedUser =
	 * userRepository.save(user); return
	 * ResponseEntity.status(HttpStatus.CREATED).body(savedUser); }
	 * 
	 */

	@PostMapping("/register")
	public ResponseEntity<String> InsertData(@RequestBody User u) {
		userRepository.save(u);
		return ResponseEntity.status(HttpStatus.CREATED).body("User registered successfully");

	}
	@GetMapping("/details/{id}")
	public ResponseEntity<User> showUserDetails(@PathVariable int id) {
		Optional<User> userOptional = userRepository.findById(id);

		if (userOptional.isPresent()) {
			return new ResponseEntity<User>(userOptional.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<User>(HttpStatus.NOT_FOUND);
		}
	}

	@GetMapping("/datalist")
	public List<User> SelectAll() {
		return userRepository.findAll();
	}
	
	@PostMapping("/login")
	public ResponseEntity<String> validateUser(@RequestBody User loginUser) {
	    Optional<User> userOptional = userRepository.findByUsername(loginUser.getUsername());

	    if (userOptional.isPresent()) {
	        User user = userOptional.get();
	        if (user.getPassword().equals(loginUser.getPassword())) {
	            return ResponseEntity.ok("Login successful");
	        }
	    }

	    return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
	}
	

	@PutMapping("/edit/{id}")
	public ResponseEntity<User> editDetails(@PathVariable int id, @RequestBody User user) {
		Optional<User> userOptional = userRepository.findById(id);
		if (userOptional.isPresent()) {
			User updateUser = userOptional.get();
			updateUser.setFirstname(user.getFirstname());
			updateUser.setLastname(user.getLastname());
			updateUser.setUsername(user.getUsername());
			updateUser.setMobilenumber(user.getMobilenumber());
			updateUser.setEmail(user.getEmail());
			updateUser.setPassword(user.getPassword());
			 User savedUser = userRepository.save(updateUser);
			 return ResponseEntity.ok(savedUser);

		}
		 else {
		        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		 }

	}

	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> deleteUser(@PathVariable int id) {

		if (userRepository.existsById(id)) {// if it's exist in the data list
			userRepository.deleteById(id); // delete that user
			return ResponseEntity.ok("Your User Details " + id + "is successfully deleted");

		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Your User details is not found");
		}

	}

}
