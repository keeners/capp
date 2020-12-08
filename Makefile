.PHONY: build

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

build: ## Build the Docker image
	docker-compose -p capp build

up: build ## Bring the container up
	docker-compose -p capp up -d

down: ## Stop the container
	docker-compose -p capp stop

enter: ## Enter the running container
	docker-compose -p capp exec backend /bin/bash

enter_frontend: ## Enter the running container
	docker-compose -p capp exec frontend /bin/bash

clean: down ## Remove stoped containers
	docker-compose -p capp rm

lint: ## Run linters on code
	docker-compose -p capp exec backend bash -c "flake8 ."
	docker-compose -p capp exec backend bash -c "black --diff --check --exclude 'migrations|node_modules' ."

lint_frontend: ## Run linters on code
	docker-compose -p capp exec frontend bash -c "npm run --silent lint"

test: ## Run tests
	docker-compose -p capp exec backend bash -c "pytest tests --cov=capp"
