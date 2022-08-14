MANAGE := FLASK_APP=run.py


.PHONY: help
help: ## Show this help
	@egrep -h '\s##\s' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

.PHONY: venv
venv: ## Make a new virtual environment
	pipenv shell

.PHONY: install
install: venv ## Install or update dependencies
	pipenv install

.PHONY: freeze
freeze: ## Pin current dependencies
	pipenv run pip freeze --local > requirements.ini

.PHONY: test
test: ## Run the unit tests
	$(MANAGE) flask test

.PHONY: runserver
runserver: ## Run the unit tests
	python run.py

.PHONY: shell
shell: ## Flask Shell Load
	$(MANAGE) flask shell

.PHONY: createdb
createdb: ## Create database
	$(MANAGE) flask init_db

.PHONY: init
init: ## Init database
	$(MANAGE) flask db init

stamp: ## Set the revision in the database to the head.
	$(MANAGE) flask db stamp head

revision: ## Revision database
	$(MANAGE) flask db revision --rev-id 6d3a87e3b281

migrate: ## Generate an initial migration
	$(MANAGE) flask db migrate -m 'Intial Migration'

upgrade: ## Apply the migration to the database
	$(MANAGE) flask db migrate -m 'Upgrade Migration'

downgrade: ## Remove the last migration from the database
	$(MANAGE) flask db downgrade

backup-db: ## create backup database
	$(MANAGE) flask alchemydumps create

restore-db: ## restore backup database
	$(MANAGE) flask alchemydumps restore

remove-db: ## remove backup database
	$(MANAGE) flask alchemydumps remove

autoclean-db: ## autoclean backup database
	$(MANAGE) flask alchemydumps autoclean
