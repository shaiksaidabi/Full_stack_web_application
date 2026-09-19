package com.campusnexa.CampusNexa.Repository;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.ui.Model;

import com.campusnexa.CampusNexa.Entity.User;
@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

	Optional<User> findByUsername(String username);

	 

	 

//	Optional<User> findByUsername(Model model);

//	User deleteById(User u);

 
//	boolean existsByUsername(String username);

}
