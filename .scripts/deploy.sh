!#/usr/bin/bash

echo "Building site"
hugo --minify
if [ $? -ne 0 ]; then
	echo "Hugo build failed..."
	exit 1
fi 

echo "Deploying to s3 bucket"
hugo deploy --target=production
if [ $? -ne 0 ]; then
	echo "Deployment to s3 bucket failed..."
	exit 1
fi 

echo "Clearing cloudfront cache"
aws cloudfront create-invalidation --distribution-id E3IX3CZ30Y8Z0L --paths "/*"
if [ $? -ne 0 ]; then
	echo "Cloudfront cache invalidation failed..."
	exit 1
fi 

echo "Deployment succesful! Wuhuu" 
