package com.OnlineVehicleParkingSystem.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.OnlineVehicleParkingSystem.Repository.UserRepository;
//import com.OnlineVehicleParkingSystem.controller.List;
import com.OnlineVehicleParkingSystem.model.UserModel;

@Service
public class UserService {
    @Autowired
	UserRepository repository;

	public UserModel userRegister(UserModel model) {
		// TODO Auto-generated method stub
		return repository.save(model);
	}

	public List<UserModel> getallusers() {
		// TODO Auto-generated method stub
		return repository.findAll();
	}

	public UserModel updateUser(int id,UserModel model) {
		// TODO Auto-generated method stub
		return repository.save(model);
	}

	public boolean deleteuser(int id) {
    Optional<UserModel> entityOptional = repository.findById(id);

        if (entityOptional.isPresent()) {
            repository.deleteById(id);
            return true;
        } else {
            return false;
        }
	}



	public boolean login(String email, String password) {
		UserModel model=repository.findByEmail(email);
		if (model !=null && model.getPassword().equals(password)){
			return true;
		}
		return false;
	}

	public boolean isValidCredentials(String email, String password) {
		// TODO Auto-generated method stub
		UserModel model=repository.findByEmail(email);
		if (model !=null && model.getPassword().equals(password)){
			return true;
		}
		return false;
	}





//	public void invalidateSession(String name) {
//		repository.findByName(name);
//		
//	}



}
