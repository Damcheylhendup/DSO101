https://github.com/Damcheylhendup/DSO101.git


DSO101 DevOps Assignment Report

## My information
-Name: Damchey Lhendup
-Student ID: 02250347
-Module:DSO101

# Assignment: A1 - A3 DevOps Project

# Project Overview
-This project is a full-stack To-Do List application developed using frontend and backend technologies. The project demonstrates DevOps practices including Docker containerization, CI/CD automation using Github Actions, Docker Hub image management, and deployment using Render.


# Assignment 1 - Application Development 

## objectives
   - The objective of assignment(A1) was to develop a functional To-Do List  application with frontend and backend integration.

## Technologies Used
  #Frontend: -React.js
             -HTML
             -CSS
             -JavaScript
 #Backend: -Node.js
           -Express.js

## Features Implemented
  - Add tasks
  - Edit tasks
  - Delete tasks
  - Display task list
  - frontend and backend integration
  - Rest API communication

## Project Structure
  DSO101
  |
  |--.github
  |    |--workflows
  |      |--deploy.yml
  |
  |--Damcheylhendup_02250347_DSO101_A1
      |--todo-app
         |
         |--backend
         |--frontend
         |--Jenkinsfile
         |--README.md
__________________________________________________________________________



# Assignment 2 - Docker Containerization

## Objectives
  - The objective of Assignment(A2) was to containerize the application using Docker.

## Docker Implementation
  #Backend Dockerization
   - A Dockerfile was created for the backend services to: 
                -Install dependencies
                -Copy application files
                -expose backend port
                -Run backend server
  #Frontend Dockerization
   - A Dockerfile was created for the frontend services to:
                 -Build frontend application
                 -serve frontend container

## Docker Commands Used
  #Build Backend Image
   - docker build -t damchey123/be-todo:02250347


