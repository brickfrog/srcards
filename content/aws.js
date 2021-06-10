// Keeping a couple of the cards for testing purposes
// Replace with content - TODO: programatically generate?

const aws_cards = [
  {
    q: "Differences and commonalities between pre-signed URLs and signed URLs?",
    a: "Pre-signed URLs vs signed URLs<br><br><ul><li>Pre-signed URLs is a feature of S3.</li><li>Signed URLs is a feature of CloudFront.</li><li>Main use case for both is to share content privately with users, by providing a URL that includes a secret.</li><li>Both can be restricted with factors such as expiration date.</li><li>In addition, pre-signed URLs can be used to allow users to upload objects to buckets where they normally wouldn't have permissions to upload.</li></ul>",
  },
  {
    q: "Compare CloudFront's signed URLs to signed cookies. Both are used to provide users access to private content. When should you use one over the other?",
    a: `Signed URLs vs signed cookies
                <br><br>
                <ul>
                    <li>Signed cookies are often more appropriate than signed URLs, because you can provide access to <i>multiple</i> files at once, and you don't have to change any URLs.</li>
                    <li>Signed URLs can be useful if you want to restrict access to <i>individual</i> files, or if you are unable to use signed cookies.</li>
                </ul>
             `,
  },
  {
    q: "Describe a typical use case for Instance Profile.",
    a: "Instance profile of an EC2 instance allows you to attach an IAM role to the instance.",
  },
  {
    q: "EC2 MetaData contains information such as..?",
    a: "EC2 MetaData contains the instance type, ip address, AMI information, etc.",
  },
  {
    q: "What kind of physical disk volumes can you mount on an EC2 instance?",
    a: `EC2 physical disk volumes<br><br>
        <ul>
            <li>Instance store (ephemeral)</li>
            <li>EBS (Elastic Block Store, persistent)</li>
            <li>EFS (Elastic File System, also persistent, can be concurrently mounted by multiple instances)</li>
        </ul>
        `,
  },
];
