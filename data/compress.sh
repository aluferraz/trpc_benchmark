#!/bin/bash

# Check for input file
if [ -z "$1" ]; then
  echo "Usage: $0 input_file.txt"
  exit 1
fi

# Check if input file exists
if [ ! -f "$1" ]; then
  echo "Input file not found: $1"
  exit 1
fi

# Basic variables
input_file="$1"
# output_prefix="${input_file%.*}"  # Remove extension 
output_prefix="$input_file"
chunk_size=31457280              # 30MB in bytes

# Compress using gzip (you might need to install it if not present) 
gzip -c "$input_file" > "${output_prefix}.gz"

# Split the compressed file
split -b $chunk_size -d "${output_prefix}.gz" "${output_prefix}.part" 

# Clean up the original compressed file (optional)
rm "${output_prefix}.gz"
