-include .docker/.env

# ─────────────────────────────────────────────────────────────────────────────
# Colors definitions
# ─────────────────────────────────────────────────────────────────────────────
CR=\033[0;31m
CG=\033[0;32m
CY=\033[0;33m
CB=\033[0;36m
RC=\033[0m

# ─────────────────────────────────────────────────────────────────────────────
# Infra commands
# ─────────────────────────────────────────────────────────────────────────────
.PHONY: start
start:
	@docker-compose -f .docker/docker-compose.yml up -d

.PHONY: stop
stop:
	@docker-compose -f .docker/docker-compose.yml down

.PHONY: test
test:
	@docker exec -it poker-evaluator npm run test