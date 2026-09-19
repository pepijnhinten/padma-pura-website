#!/usr/bin/env bash
set -euo pipefail

: "${TRANSIP_SSH_USER:?TRANSIP_SSH_USER must be set}"

npm run build

rsync --archive --info=progress2 --human-readable \
	--rsh="ssh -p 22" \
	dist/ \
	"${TRANSIP_SSH_USER}@padmap.ssh.transip.me:subdomains/pp-org1/"
