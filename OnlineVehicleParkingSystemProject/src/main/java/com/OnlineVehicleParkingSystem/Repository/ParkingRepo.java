package com.OnlineVehicleParkingSystem.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.OnlineVehicleParkingSystem.dto.Parkingcostdto;
import com.OnlineVehicleParkingSystem.model.Parking;
@Repository
public interface ParkingRepo extends JpaRepository<Parking, Integer> {

	

}
