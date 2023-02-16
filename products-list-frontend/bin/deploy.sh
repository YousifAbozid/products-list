aws ec2 describe-instances --region us-east-1
aws s3 cp --recursive --acl public-read ./build s3://products-list-123/
