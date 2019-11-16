CREATE TABLE Users ( 
    user_id SERIAL PRIMARY KEY,
    name varchar(255) NOT NULL  
);

CREATE TABLE Events (
    event_id SERIAL PRIMARY KEY,
    name varchar(255),
    time TIMESTAMP,
    isRecurring boolean,
    organizer_id int,
    FOREIGN key (organizer_id) REFERENCES Users(user_id)
);


CREATE TABLE Attendance (
    attendance_id SERIAL PRIMARY KEY,
    user_id int,
    present boolean,
    FOREIGN key (user_id) REFERENCES Users(user_id)
);

CREATE TABLE User_Event (
    user_event_id SERIAL PRIMARY KEY, 
    event_id int,
    organizer_id int,
    attendance_id int,
    FOREIGN key (attendance_id) REFERENCES Attendance(attendance_id),
    FOREIGN key (event_id) REFERENCES Events(event_id),
    FOREIGN KEY (organizer_id) REFERENCES Users(user_id)
);


