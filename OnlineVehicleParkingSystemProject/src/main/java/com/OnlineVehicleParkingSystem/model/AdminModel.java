package com.OnlineVehicleParkingSystem.model;

//import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Admindata")
//@JsonSerialize
public class AdminModel {
    @Id
//    @GeneratedValue(strategy=GenerationType.IDENTITY)
	private int admin_id;
	private String emailid;
	private  String password;
	private int costperhr;
	public AdminModel(int admin_id, String emailid, String password,int costperhr) {
//		super();
		this.admin_id = admin_id ;
		this.emailid = emailid;
		this.password = password;
		this.costperhr=costperhr;
	}
	public AdminModel() {
		
	}
	public int getId() {
		return admin_id ;
	}
	public void setId(int admin_id ) {
		this.admin_id  = admin_id ;
	}
	public String getEmailid() {
		return emailid;
	}
	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public int getCostperhr() {
		return costperhr;
	}
	public void setCostperhr(int costperhr) {
		this.costperhr = costperhr;
	}

}
