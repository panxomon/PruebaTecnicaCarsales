.PHONY: up down open

up:
	docker-compose up --build

down:
	docker-compose down

open:
	@xdg-open http://localhost:4200/episode || open http://localhost:4200/episode || start http://localhost:4200/episode
