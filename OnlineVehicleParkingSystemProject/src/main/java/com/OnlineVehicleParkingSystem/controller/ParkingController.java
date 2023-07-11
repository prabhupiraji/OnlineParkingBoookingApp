package com.OnlineVehicleParkingSystem.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.OnlineVehicleParkingSystem.dto.Parkingcostdto;
import com.OnlineVehicleParkingSystem.dto.Parkingdto;
import com.OnlineVehicleParkingSystem.model.Parking;
//import com.OnlineVehicleParkingSystem.model.Parking;
import com.OnlineVehicleParkingSystem.service.ParkingService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ParkingController {
	@Autowired
   ParkingService service;
	@PostMapping("/bookparkingslot")
	public void bookparkingslot(@RequestBody Parking parking) {
		service.bookparkingslot(parking);
     }
   

	 @GetMapping("/listofbookings")
	    public List<Parking> getAllBookings() {
	        return service.getAllBookings();
	    }

	    @GetMapping("/listofbookings/{id}")
	    public Optional<Parking> getBookingById(@PathVariable int id) {
	        return service.getBookingById(id);
	    }

	    @DeleteMapping("deletebookingslot/{id}")
	    public void deleteBooking(@PathVariable int id) {
	        service.deleteBooking(id);
	    }
}