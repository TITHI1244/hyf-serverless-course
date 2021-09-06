#### Example asignment

command: `lambda list-functions`

doc: `https://docs.aws.amazon.com/cli/latest/reference/lambda/list-functions.html`

## Mandatory assignments

**Assignment 1:**

command: `aws s3 ls`

doc: `https://docs.aws.amazon.com/cli/latest/reference/s3/ls.html`

number of buckets: `11`

**Assignment 2:**
filename: `christopher-was-here.json`

## Optional Assignments

command: `aws s3 presign s3://hyf-products-bucket/test-file.txt`
        `aws s3 presign s3://hyf-products-bucket/test-file-2.txt --expires-in 604800`

url: `https://hyf-products-bucket.s3.amazonaws.com/test-file.txt?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA2F346X675XN7OAVQ%2F20210906%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210906T073637Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=7c5f2928635849760111cdef74286ae3a3b455c2b8792021d6b845e2a1d701be`
    `https://hyf-products-bucket.s3.amazonaws.com/test-file-2.txt?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA2F346X675XN7OAVQ%2F20210906%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210906T074047Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=d34e13872ee4c21b6015d30f334894bffc842ffb2740cc1ae1cadd08bd2c4759`

**Assignment 3:**
**Assignment 4:**
