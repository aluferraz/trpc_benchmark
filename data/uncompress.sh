#!/bin/bash

# Check for input file (any of the split chunks)
if [ -z "$1" ]; then
  echo "Usage: $0 input_file.part00" 
  exit 1
fi

# Get the base filename
base_filename=$(basename "$1" .part??) 

# Concatenate all the parts together (assumes they are in order)
cat ${base_filename}.part* > "${base_filename}.gz"

# Uncompress the file
gunzip "${base_filename}.gz" 

# Optional: Clean up the split parts 
rm ${base_filename}.part* 
