#!/bin/sh
set -e  # Exit immediately on error

# Apply migrations
npx prisma migrate deploy

# Start app
exec "$@"