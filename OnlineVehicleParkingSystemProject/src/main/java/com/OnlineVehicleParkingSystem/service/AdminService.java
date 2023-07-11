package com.OnlineVehicleParkingSystem.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.OnlineVehicleParkingSystem.Repository.AdminRepository;
import com.OnlineVehicleParkingSystem.dto.Parkingcostdto;
import com.OnlineVehicleParkingSystem.model.AdminModel;
import com.OnlineVehicleParkingSystem.model.Parking;

@Service
public class AdminService {
	
   @Autowired
	AdminRepository repositoryadmin;

public boolean loginAdmin(String emailid,String password) {
	// TODO Auto-generated method stub
	
		AdminModel model=repositoryadmin.findByEmailid(emailid);
		if (model !=null && model.getPassword().equals(password)){
			return true;
		}
		return false;
}


public List<AdminModel> getalladmin() {
	// TODO Auto-generated method stub
	return repositoryadmin.findAll();
}





public AdminModel getadminById(int admin_id ) {
	// TODO Auto-generated method stub
	return repositoryadmin.getById(admin_id);
}


public boolean saveAdmin(AdminModel model) {
	// TODO Auto-generated method stub	
	AdminModel admin=repositoryadmin.save(model);
	if (admin !=null) {
		return true;
	}
	return false;


}


//public AdminModel updateAdminCostPerHour(AdminModel admin, int costperhr) {
//    // Retrieve the existing admin from the database or any other data source
//    AdminModel existingAdmin = getadminById(admin.getId());
//
//    // Update the costperhr value
//    existingAdmin.setcostPerhr(costperhr);
//
//    // Save the updated admin to the database or any other data source
//    AdminModel updatedAdmin = saveAdmin(existingAdmin);
//
//    return updatedAdmin;
//}

public AdminModel updateAdminCostPerHour(int admin_id,AdminModel model) {
	
	return repositoryadmin.save(model);
 
}	
}
