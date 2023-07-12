package com.OnlineVehicleParkingSystem.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.OnlineVehicleParkingSystem.dto.Parkingcostdto;
import com.OnlineVehicleParkingSystem.model.AdminModel;



@Repository
public interface AdminRepository extends JpaRepository<AdminModel, Integer>{

	AdminModel findByEmailid(String emailid);

//	AdminModel save(Parkingcostdto model);

}
