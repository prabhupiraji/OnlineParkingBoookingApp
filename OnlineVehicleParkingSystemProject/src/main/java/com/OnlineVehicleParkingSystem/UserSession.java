package com.OnlineVehicleParkingSystem;

public class UserSession {
    private String sessionId;
//    @coloumnName("id")
    private int userId;

    public UserSession(String sessionId, int userId) {
        this.sessionId = sessionId;
        this.userId = userId;
    }

    public String getSessionId() {
        return sessionId;
    }

    public void setSessionId(String sessionId) {
        this.sessionId = sessionId;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }
}
