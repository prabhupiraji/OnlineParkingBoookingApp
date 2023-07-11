package com.OnlineVehicleParkingSystem.dto;

public class Parkingcostdto {

	int admin_id ;
	int costperhr;
	public Parkingcostdto(int admin_id, int costperhr) {
		super();
		this.admin_id = admin_id;
		this.costperhr = costperhr;
	}
	public Parkingcostdto() {
	
	}
	
	public int getAdmin_id() {
		return admin_id;
	}
	public void setAdmin_id(int admin_id) {
		this.admin_id = admin_id;
	}
	public int getCostperhr() {
		return costperhr;
	}
	public void setCostperhr(int costperhr) {
		this.costperhr = costperhr;
	}
	
	
}
