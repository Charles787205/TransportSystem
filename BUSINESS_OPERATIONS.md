# Business Operations & System Requirements

This document outlines the core business domain rules, entity definitions, and operational workflows for the Transport Management System. It serves as an authoritative reference for future feature development and database schema updates.

---

## 1. Overview & Core Domain Concept

The system manages end-to-end transport and logistics operations across multiple clients, vendors, drivers, and vehicles. It tracks planned vehicle capacity against actual daily dispatches, trip execution across multiple legs, individual drop-off stops along a route, and return legs.

---

## 2. Key Entities & Definitions

- **Clients**: 
  - Represents the corporate customer ordering transport services (`name`, `email`, `phone_number`, `active`).
  - Owns multiple physical **Locations**.

- **Locations**:
  - Unified table storing physical locations/places belonging to a Client.
  - Fields: `name`, `touchpoint` (nullable, e.g., 'Main Hub', 'Dock 1'), `type` (nullable, e.g., 'BU', 'Destination', 'Hub'), `address`, `active`.
  - Replaces separate rigid Business Unit and Destination tables. Any location can serve as an origin, destination, or drop point.

- **Plans (`plans`)**:
  - Daily planned vehicle requirements set per client and route before dispatch.
  - Fields: `client_id`, `origin_id` (location), `destination_id` (location), `number_of_vehicles`, `dispatch_date`.

- **Dispatches (`dispatches`)**:
  - Represents an overall vehicle and driver duty shift/assignment for a specific client on a given date.
  - Fields: `client_id`, `vehicle_id`, `driver_id`, `service_type` (e.g. `oncall`, `regular`), `dispatch_date`, `assigned_call_time`, `odometer_start`, `odometer_end`, `is_reversed`.
  - Serves as the parent container for 1 or more **Trip Legs** during the duty shift.

- **Trip Legs (`trip_legs`)**:
  - Represents sequential individual trips performed under a single Dispatch (`1st trip`, `2nd trip`, `3rd trip`, etc.).
  - Fields: `dispatch_id`, `trip_sequence` (1, 2, 3...), `origin_location_id`, `destination_location_id`, `total_parcel`, `odometer_start`, `odometer_end`, `departure_time`, `arrival_time`, `end_time`, `linehaul_trip_no`, `status` (`pending`, `in_transit`, `delivered`, `cancelled`, `foul_trip`).
  - Origin and Destination locations are swappable (e.g., Trip 1: BU ➔ Customer, Trip 2: Customer ➔ BU).

- **Drops (`drops`)**:
  - Delivery or drop-off stops made during a specific **Trip Leg**.
  - Fields: `trip_leg_id`, `location_id` (references `locations`), `drop_sequence` (1, 2, 3...), `parcel_count`, `arrived_time`, `departed_time`.

- **Return Trips (`return_trips`)**:
  - Represents return trips linked to a **Dispatch** (e.g. returning empty containers or returning the vehicle back to base at the end of shift).
  - Fields: `dispatch_id`, `origin_location_id`, `destination_location_id`, `odometer_start`, `odometer_end`, `total_parcel`.

---

## 3. Workflows & Rules

1. **Planning Phase**:
   - Operations creates **Plans** defining how many vehicles a client requires from an `origin` location to a `destination` location on a given date.

2. **Dispatch & Trip Execution**:
   - A **Dispatch** assignment is created for a driver and vehicle for a specific client shift.
   - Under the dispatch, multiple **Trip Legs** are recorded sequentially (`trip_sequence = 1`, `trip_sequence = 2`).
   - For each trip leg, driver records `odometer_start` and `odometer_end`, departure/arrival timestamps, and `linehaul_trip_no`.

3. **Drops Tracking**:
   - Within any trip leg, zero or more **Drops** can be registered in order (`drop_sequence`) to track intermediate delivery stops.

4. **Return Trip Tracking**:
   - End-of-shift or return movements are tracked under `return_trips` linked to the dispatch assignment.

---

## 4. Special Edge Cases & Exceptions

- **Swappable Locations**: Origins and destinations are not fixed to specific entity types; any `Location` belonging to a client can act as origin or destination depending on the direction of travel.
- **Trip Statuses**: A trip leg can be cancelled or marked as a `foul trip`. Cancellation details are captured separately via `CancellationDetail`.
- **Metrics Tracking**: Dispatched vs. Planned vehicle metrics are computed dynamically by comparing active dispatches/trip legs against scheduled plans for the date.
