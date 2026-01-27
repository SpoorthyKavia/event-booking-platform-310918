#!/bin/bash
cd /home/kavia/workspace/code-generation/event-booking-platform-310918/event_booking_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

