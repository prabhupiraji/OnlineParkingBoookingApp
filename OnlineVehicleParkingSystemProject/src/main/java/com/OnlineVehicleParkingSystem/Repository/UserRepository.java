package com.OnlineVehicleParkingSystem.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Repository;

import com.OnlineVehicleParkingSystem.model.UserModel;

@Repository
public interface UserRepository extends JpaRepository<UserModel, Integer> {



//	UserModel findByName(String name);

	UserModel findByEmail(String email);

	UserModel findByEmail(UserModel userCredentials);

//	UserModel findByName(String name);

}
