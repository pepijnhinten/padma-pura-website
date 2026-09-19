#!/usr/bin/env bash
set -euo pipefail

: "${TRANSIP_SSH_USER:?TRANSIP_SSH_USER must be set}"
: "${CONFIRM_PRODUCTION:?CONFIRM_PRODUCTION must be set}"

if [[ "${CONFIRM_PRODUCTION}" != "padmapura.com" ]]; then
	echo "CONFIRM_PRODUCTION must equal padmapura.com before production deployment." >&2
	exit 1
fi

npm run build

rsync --archive --delete --info=progress2 --human-readable \
	--rsh="ssh -p 22" \
	dist/ \
	"${TRANSIP_SSH_USER}@padmap.ssh.transip.me:www/"
