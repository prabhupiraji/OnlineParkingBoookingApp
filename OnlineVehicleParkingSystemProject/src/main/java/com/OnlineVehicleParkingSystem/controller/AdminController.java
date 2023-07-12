package com.OnlineVehicleParkingSystem.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.autoconfigure.kafka.KafkaProperties.Admin;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.OnlineVehicleParkingSystem.dto.Parkingcostdto;
import com.OnlineVehicleParkingSystem.model.AdminModel;
import com.OnlineVehicleParkingSystem.service.AdminService;



@RestController
@RequestMapping("admin")
@CrossOrigin(origins = "http://localhost:4200")
public class AdminController {
	@Autowired
 AdminService service;
	
	@PostMapping("/loginadmin")
	public ResponseEntity<String>  loginAdmin(@RequestParam String emailid,@RequestParam String password) {
	
	     boolean loginResult = service.loginAdmin(emailid,password);
	        if (loginResult) {
	            return ResponseEntity.ok("Login successful");
	        } else {
	            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
	        }
	}
	@PostMapping("/saveadmin")
	public ResponseEntity<String>  saveAdmin(@RequestBody AdminModel model) {
	
	     boolean loginResult = service.saveAdmin(model);
	        if (loginResult) {
	            return ResponseEntity.ok("saveadmin successful");
	        } else {
	            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid data");
	        }
	}
	
	
//	@PutMapping("/updateAdminById/{admin_id}")
//	public ResponseEntity<AdminModel>  updateAdminById(@PathVariable("admin_id") int admin_id , @RequestBody int costperhr) {
//		AdminModel park=new AdminModel();
//		park.setId(admin_id);
//    	return new ResponseEntity<AdminModel>(service.updateAdminById(admin_id ,costperhr),HttpStatus.ACCEPTED);
//	}
	
	@GetMapping("/getalladmin")
	public List<AdminModel> getalladmin() {
		return service.getalladmin();
	}
	@GetMapping("/getadminbyid/{id}")
	public ResponseEntity<AdminModel> getLocationById(@PathVariable("admin_id ") int admin_id ) {
		 AdminModel admin=service.getadminById(admin_id );
		 if (admin==null) 
			 return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			 return ResponseEntity.ok().body(admin);
		 	 
    }
	
	@PutMapping("/{admin_id}")
	public AdminModel updateAdminCostPerHour(@PathVariable("admin_id") int admin_id, @RequestBody AdminModel model) {
	      model.setId(admin_id);
          return service.updateAdminCostPerHour(admin_id,model);


	}

	
//   @PostMapping("/updatecostadmin/{id}")
//   public ResponseEntity<Optional<AdminModel>> parkingcostperhr(@PathVariable int id ,@RequestBody Parkingcostdto costdto) {
//	   Optional<AdminModel> admin= service.getadminById(id);
//	   if (admin==null) 
//		   return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//		 return ResponseEntity.ok().body(admin);
//	   
//}
}