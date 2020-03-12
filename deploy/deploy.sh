#!/bin/sh

BUCKET_NAME="s3://rocketgirl-static-website"
DISTRIBUTION_ID="E3LICOGBS3NUAZ"

set -e # exit on error
echo "Cleaning up"
gatsby clean
echo "Compiling bundle"
gatsby build 
echo "Uploading to S3"
aws s3 sync public/ $BUCKET_NAME
echo "Invalidating CloudFront cache"
aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths "/*"
echo "Done"
exit 0