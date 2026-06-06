# Docker First Container

## Overview

This project demonstrates how to run a Node.js and Express application inside Docker and connect it to a Redis container using Docker Compose.

## Technologies

* Node.js
* Express.js
* Redis
* Docker
* Docker Compose

## Project Structure

```text
docker-1st_container/
├── server.js
├── package.json
├── Dockerfile
└── docker-compose.yml
```

## Build Docker Image

```bash
docker build -t app:1.0 .
```

## Start Containers

```bash
docker compose up -d
```

## Verify Running Containers

```bash
docker ps
```

## Access Application

Open:

```text
http://localhost:8080
```

## Stop Containers

```bash
docker compose down
```

## Concepts Learned

* Docker Images
* Docker Containers
* Docker Networking
* Docker Compose
* Port Mapping
* Container Communication
* Node.js + Redis Integration

```
```
