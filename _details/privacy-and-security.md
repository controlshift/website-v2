---
layout: detail
title: Privacy and Security
---
Security and Privacy are a critical part of the work that we do and the services that we provide. They are goals and values that drive a process of continual improvement that runs through everything that we do — from how we store member data to the sorts of organizing tools we provide to customers. 

### Principles

*Designed for Security*\
We use industry best practices for encryption, physical security, multi-factor authentication and segmentation of data. Security is a core part of our software design process, and one of the criteria we use during code review.

*Automated*\
We automate everything. When security configuration is automated we can guarantee its correctness and repeatability. When infrastructure is automated, fewer people need access to sensitive data.

*Available*\
All infrastructure is built to be highly available and resilient. Our architecture is designed to eliminate single points of failure with ample excess capacity so your campaigns keep running no matter what.

*Transparent*\
We promptly notify customers of outages and security events through our status pages and proactively via email.

### Details

*Physical Security*\
ChangeSprout, Inc. stores customer data using Amazon Web Services, either in their US-East region in northern Virginia, USA or in the EU-Central region in Frankfurt, Germany, depending on the customer’s selection. These facilities limit and audit physical access, and provide fire suppression, climate control and uninterruptible power supplies. Amazon Web Services’ facilities are ISO 27017 and SOC 3 certified. More details about Amazon’s environment is [available on their website](https://aws.amazon.com/security/).

*Backups*\
Databases are always replicated configuration to provide immediate failover in case of instance hardware failure, or failure of a data center. A full snapshot of all data is taken nightly, encrypted, and stored for disaster recovery.

*Encryption*\
We use TLS/SSL encryption to protect data in transit across the internet, ensuring that our users have a secure connection from their browsers to our service. Remote access for systems administration is provided over encrypted VPN and/or encrypted SSH connections and is further secured cryptographically via multi-factor authentication.  

Where possible, data is encrypted at rest. Backups are always encrypted before they are stored.

*Access & Authorization*\
ChangeSprout staff use multi-factor authentication, in addition to passwords, in order to access administrative interfaces of the ControlShift platform. Multi-factor authentication is also available to organization staff, though it is dependent upon the organization to ensure its use. Access to systems is limited to ChangeSprout staff who require access by the role of the staff person and their need to access specific data.

Whenever a member of the ChangeSprout staff or an independent contractor leaves the company their accounts and access to systems are removed.  

*Automated Scanning*\
We use a variety of automated tools to quickly identify and correct security issues with our systems. We use continuously scanning automated tools for detecting known vulnerabilities in software dependencies and static code analysis to detect issues in our application as part of our continuous integration process. Endpoint management and network traffic analysis tools are used where appropriate. 

*Change Management*\
All product software and product systems are administered via automated systems that include an audit trail and peer review of changes that are being applied. The peer review process includes evaluation of the security, privacy, and reliability implications of the change being proposed. Wherever possible manual or ad-hoc changes to systems are avoided.

We use automated change management tools to document the current state of our systems infrastructure and enforce our standards for infrastructure.  Infrastructure and product updates are designed to be applied via zero downtime continuous deployment process.

*Training*\
All team members are regularly briefed on principles and policies of data privacy and data security and the practices are embedded in the engineering culture of the team.

*Availability*\
The ControlShift platform is deployed across multiple Amazon Web Services Availability Zones within a single AWS region and has been designed to be automatically resilient in the case of either single instance or data center failure. We proudly report on the long-term availability and performance of the platform on [our status page](https://status.controlshiftlabs.com/).

The platform is designed to respond automatically to significant increases in platform activity via automated increases of capacity.

*Member Data*\
While member data is collected using the platform, ChangeSprout does not own the data, nor do we process it except as directed by the customer or as required for the operation of the platform. We treat member data as confidential information and take precautions to prevent the unauthorized disclosure, misuse, or loss of data.

In addition to the other measures outlined above, we allow users to access and update their personal information to ensure its accuracy.

*Onward Transfer*\
ChangeSprout only transfers member data to third parties when requested by the customer or when required for the reliable operation of the platform. We limit the number of third-party sub-processors we use to process member data and ensure that all sub-processors adhere to adequate data protection policies. 

A list of our current sub-processors is available in [our help center](https://support.controlshiftlabs.com/hc/en-us/articles/360000175976).

ChangeSprout may also transfer platform data to analytics providers for the purpose of internal, platform-wide analytics. Data analytics transfers that are undertaken for the benefit of our internal analysis will be undertaken only after receiving permission from the customer.  This permission may take the form of emailed confirmation and does not require an addendum to customer contracts.

Additionally, at the customer's explicit request we will also send information to the customer's chosen CRM or other customer systems. Integrations with any third-party tools enabled by the customer are optional, and it is the responsibility of the customer to ensure that these services adhere to their country's data protection regulations.

*Unsubscribes*\
Emails sent from the ControlShift platform automatically include links to unsubscribe from communications. By default, this allows users to unsubscribe from communications about a specific campaign. However, for certain CRMs, the ControlShift platform also supports global unsubscribes – allowing the user to unsubscribe from all of the organization’s communications at once. Admin tools also allow customer staff to unsubscribe users manually.