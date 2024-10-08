.PHONY: up down open

up:
	docker-compose up --build

down:
	docker-compose down

open:
	@xdg-open http://localhost:4200/episodes || open http://localhost:4200/episodes || start http://localhost:4200/episodes
