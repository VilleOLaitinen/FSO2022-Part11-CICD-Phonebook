#!/bin/bash

echo "Build script"

cd frontend
npm install
cd ..
cd backend
npm install
npm run build:ui