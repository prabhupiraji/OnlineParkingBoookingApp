package com.OnlineVehicleParkingSystem.model;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="VehicleUsers")
public class UserModel {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String phoneno;
	private String name;
	private String email;
	private String password;
	private char gender;
	private Date dateOfBirth;
	private String adress;
	
	
	
	
	public UserModel(int id, String phoneno, String name, String email, String password, char gender, Date dateOfBirth,
			String adress) {
		super();
		this.id = id;
		this.phoneno = phoneno;
		this.name = name;
		this.email = email;
		this.password = password;
		this.gender = gender;
		this.dateOfBirth = dateOfBirth;
		this.adress = adress;
	}
	public UserModel() {

		// TODO Auto-generated constructor stub
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getPhoneno() {
		return phoneno;
	}
	public void setPhoneno(String phoneno) {
		this.phoneno = phoneno;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public char getGender() {
		return gender;
	}
	public void setGender(char gender) {
		this.gender = gender;
	}
	public Date getDateOfBirth() {
		return dateOfBirth;
	}
	public void setDateOfBirth(Date dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}
	public String getAdress() {
		return adress;
	}
	public void setAdress(String adress) {
		this.adress = adress;
	}


}
