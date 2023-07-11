package com.OnlineVehicleParkingSystem.model;

import java.sql.Time;
//import java.sql.Time;
import java.time.LocalDate;
import java.util.Date;
import java.util.Timer;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="Parkingvehicledata")
public class Parking {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private Date parkingdate;
	private Time parkingtime;
	private Time parkingendTime;
	private String slotname;
	private Date bookingTime;
	private int parkinghours;
	private int costRupees;
	
	@OneToOne
	@JoinColumn(name="user_id")
	private UserModel user;
	public Parking(int id, Date parkingdate, Time parkingtime, Time parkingendTime, String slotname,
			Date bookingTime, int parkinghours, int costRupees,UserModel user) {
		super();
		this.id = id;
		this.parkingdate = parkingdate;
		this.parkingtime = parkingtime;
		this.parkingendTime = parkingendTime;
		this.slotname = slotname; 
		this.bookingTime = bookingTime;
		this.parkinghours = parkinghours;
		this.costRupees = costRupees;
	}
	public Parking() {

	}
	public Date getParkingdate() {
		return parkingdate;
	}
	public void setParkingdate(Date parkingdate) {
		this.parkingdate = parkingdate;
	}
	public Time getParkingtime() {
		return parkingtime;
	}
	public void setParkingtime(Time parkingtime) {
		this.parkingtime = parkingtime;
	}
	public int getParkinghours() {
		return parkinghours;
	}

	public void setParkinghours(int parkinghours) {
		this.parkinghours = parkinghours;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}

	public int getCostRupees() {
		return costRupees;
	}
	public void setCostRupees(int costRupees) {
		this.costRupees = costRupees;
	}
	public Time getParkingendTime() {
		return parkingendTime;
	}
	public void setParkingendTime(Time parkingendTime) {
		this.parkingendTime = parkingendTime;
	}
	public String getSlotname() {
		return slotname;
	}
	public void setSlotname(String slotname) {
		this.slotname = slotname;
	}
	public Date getBookingTime() {
		return bookingTime;
	}
	public void setBookingTime(Date bookingTime) {
		this.bookingTime = bookingTime;
	}
	public UserModel getUser() {
		return user;
	}
	public void setUser(UserModel user) {
		this.user = user;
	}


}
