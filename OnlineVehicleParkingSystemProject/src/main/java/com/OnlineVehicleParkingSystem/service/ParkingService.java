package com.OnlineVehicleParkingSystem.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.OnlineVehicleParkingSystem.Repository.ParkingRepo;
import com.OnlineVehicleParkingSystem.dto.Parkingcostdto;
import com.OnlineVehicleParkingSystem.dto.Parkingdto;
import com.OnlineVehicleParkingSystem.model.Parking;

@Service
public class ParkingService {
     @Autowired
	ParkingRepo repo;

	public void bookparkingslot(Parking parking) {
		// TODO Auto-generated method stub

//		Parking park=new Parking();
//		park.setId(parking.getId());
//		park.setParkingdate(parking.getParkingdate());
//		park.setParkinghours(parking.getParkinghours());
//		park.setParkingtime(parking.getParkingtime());
//		park.set
		repo.save(parking);
	}

	public List<Parking> getAllBookings() {
		// TODO Auto-generated method stub
		return repo.findAll();
	}

	public Optional<Parking> getBookingById(int id) {
		// TODO Auto-generated method stub
		return repo.findById(id);
	}

	public void deleteBooking(int id) {
		// TODO Auto-generated method stub
		repo.deleteById(id);
	}

	

//	public void updateCost(Parkingcostdto cost) {
//		// TODO Auto-generated method stub
//		
//	}

//	public void updateCost(Parkingcostdto cost) {
//		// TODO Auto-generated method stub
//		
//	}

//	public List<Parking> getAllBookings() {
//		// TODO Auto-generated method stub
//		return null;
//	}

}
