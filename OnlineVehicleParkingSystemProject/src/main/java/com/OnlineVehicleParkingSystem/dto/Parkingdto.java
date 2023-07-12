package com.OnlineVehicleParkingSystem.dto;

import java.sql.Time;
import java.time.LocalDate;
import java.util.Date;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

public class Parkingdto {
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
	public Parkingdto(int id, Date parkingdate, Time parkingtime, Time parkingendTime, String slotname,
		Date bookingTime, int parkinghours, int costRupees) {
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
	public Parkingdto() {

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
//	public double getCostperhr() {
//		return costRupees;
//	}
//	public void setCostperhr(double costperhr) {
//		this.costRupees = costperhr;
//	}
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


}
