package com.OnlineVehicleParkingSystem.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

import com.OnlineVehicleParkingSystem.UserSession;
import com.OnlineVehicleParkingSystem.Repository.UserRepository;
import com.OnlineVehicleParkingSystem.model.UserModel;
import com.OnlineVehicleParkingSystem.service.UserService;

import jakarta.servlet.http.HttpServletRequest;

@RestController
//@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
    @Autowired
	UserService service;
    
    @Autowired
    UserRepository repository;
    private Map<String, UserSession> activeSessions = new HashMap<>();

    @PostMapping("/userregister")
   public ResponseEntity<UserModel> userRegister(@RequestBody UserModel model){
    	 return new ResponseEntity<>(service.userRegister(model),HttpStatus.CREATED);
    }
    @GetMapping("/getalluserslist")
    public List<UserModel> getallusers(){
    	 return service.getallusers();
    }

    @PutMapping("/updateuserbyid/{user_id}")
    public ResponseEntity<UserModel> updateUser(@PathVariable("user_id") int id,@RequestBody UserModel model ){
    	model.setId(id);
    	return new ResponseEntity<>(service.updateUser(id,model),HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/deleteuser/{user_id}")
    public ResponseEntity<String> deleteuser(@PathVariable("user_id") int id) {
    	 boolean deleted = service.deleteuser(id);
         if (deleted) {
             return ResponseEntity.ok("Entity deleted successfully");
         } else {
             return ResponseEntity.notFound().build();
         }
    }
//	  @PostMapping("/userlogin")
//    public ResponseEntity<String> login(@RequestParam String email,@RequestParam String password) {
//        boolean loginResult = service.login(email, password);
//        if (loginResult) {
//            return ResponseEntity.ok("Login successful");
//        } else {
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
//        }
//  }

    @PostMapping("/login")
    public ResponseEntity<UserSession> login(@RequestBody UserModel userCredentials) {
        // Perform authentication logic and validate user credentials
        if (isValidUser(userCredentials)) {
            // Generate a session identifier
            String sessionId = generateSessionId();

            // Associate the session identifier with the user's session
            int userId = getUserId(userCredentials);

            // Create UserSession object
            UserSession userSession = new UserSession(sessionId, userId);

            // Store the session identifier in the activeSessions map
            activeSessions.put(sessionId, userSession);

            // Return the UserSession object in the response
            return ResponseEntity.ok(userSession);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }


    	     
   private int getUserId(UserModel userCredentials) {
	UserModel user = repository.findByEmail(userCredentials.getEmail());

    // Check if the user exists and return the associated user ID
    if (user != null) {
        return user.getId(); // Return the user ID
    }

    return 0; 
	}
       private String generateSessionId() {
		// TODO Auto-generated method stub
	     return UUID.randomUUID().toString();
	    }

         private boolean isValidUser(UserModel userCredentials) {
    	 UserModel user = repository.findByEmail(userCredentials.getEmail());

    	    // Check if the user exists and the provided password matches the stored password
    	    if (user != null && user.getPassword().equals(userCredentials.getPassword())) {
    	        return true; // User is valid
    	    }

    	    return false; // User is invalid
	   }

	

//    	  @PostMapping("/logoutuser")
//    	    public ResponseEntity<String> logout(@RequestParam String email, @RequestParam String password) {
//    	        // Validate username and password against your authentication mechanism
//    	        if (service.isValidCredentials(email, password)) {
//    	            // Invalidate the session associated with the username
////    	           service.invalidateSession(name);
//    	            return ResponseEntity.ok("Logout successful");
//    	        } else {
//    	            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
//    	        }
//    	    }
//         @PostMapping("/logout/{sessionId}")
//         public ResponseEntity<Void> logout(@PathVariable String sessionId) {
//             // Check if the session exists
//        	 System.out.println("inside logout");
//             if (activeSessions.containsKey(sessionId)) {
//                 // Remove the session from the activeSessions map
//                 activeSessions.remove(sessionId);
//                 return ResponseEntity.ok().build();
//             } else {
//                 return ResponseEntity.notFound().build();
//             }
//         }
         
         @PostMapping("/logout")
         public String destroySession(HttpServletRequest request) {
             request.getSession().invalidate();
             return "redirect:/";
         }

         }

