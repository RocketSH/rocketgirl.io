#!/bin/sh

BUCKET_NAME="s3://rocketgirl-static-website"
DISTRIBUTION_ID="E3LICOGBS3NUAZ"

set -e # exit on error
gatsby clean
gatsby build 
aws s3 sync public/ $BUCKET_NAME
aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths "/*"