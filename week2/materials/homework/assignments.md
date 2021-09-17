## Mandatory assignments

**Assignment 4:**

Sync your changes to s3 and write down your s3 bucket url.

bucket url: `https://s3.console.aws.amazon.com/s3/buckets/g3-week2-tithi?region=us-east-1&tab=objects`

**Assignment 5:**

Right now, the website does not support https. Explain which other AWS service needs to be integrated in order to achieve this.

service name: `Though I see, the website already supports https. But I found one article(https://sectigostore.com/page/steps-to-install-an-ssl-certificate-on-aws-ec2-instance/), where I can follow the 5 steps to install SSL certificate to achieve this.`

**Assignment 6:**

Figure out and write down the price per month of storing 51TB on S3.

Price: `1370 usd, as first 50tb costs $.023 and next 1tb costs $.022`

Total size of website: `498.092 KB`

**Assignment 7:**

Write down the main cost factors for S3

brief description: `Main cost factors are: storage pricing, request and data retrieval pricing, data transfer and transfer acceleration pricing, data management and analytics pricing, and the price to process your data with S3 Object Lambda`

**Assignment 8:**

The file `week2/assignments/products.json` needs to be uploaded Inside the bucket `hyf-serverless-course-week-2`. Upload the file through the CLI and write down the command needed.

docs: `aws s3 cp materials\homework\products.json s3://g3-week2-tithi`

**Assignment 9:**
Write down a brief use case on when S3 could be used for a data engineering assignment: 

use case: `for behaviourial analytics, customer sentiment analysis, fraud detection`

command:

## Optional assignments: 

**Assignment 10:**

What can be done to reduce the pricing for S3 when hosting a large number of files?

brief description: ` 1. Clean up incomplete multipart uploads. 2. Delete previous versions of objects that you don't need. 3. Review your storage-class transition costs. 4. Review your data retrieval costs. 5. Track the requests made to your bucket. 6. Check for changes in the size of your bucket. 7. Review the cost of individual buckets. 8. Understand how your usage relates to your charges. ` 

**Assignment 11:**

There are many security features built into S3. Find your favourite feature, documentation for it, and explain briefly why.

brief description of favourite security feature: `Encryting all data. All data should be encrypted while in transit and while it’s in rest and stored on disks in S3 data centers.  You can easily protect data in S3 using client-side encryption or using Secure Socket Layer/Transport Layer Security (SSL/TLS). ` 
