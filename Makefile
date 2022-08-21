first-setup: build up
build:
	docker rm -f abex_iv_frontend
	docker-compose build
up:
	docker-compose up -d
stop:
	docker-compose down
remove:
	docker rm -f abex_iv_frontend