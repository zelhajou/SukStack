# Security & Compliance Technologies

Tools, frameworks, and platforms for securing applications, managing access, protecting sensitive data, and ensuring regulatory compliance. This ecosystem includes solutions for identifying and remediating vulnerabilities, controlling authentication and authorization, managing secrets, implementing security controls, and maintaining compliance with regulatory standards.

## Application Security

### Static & Dynamic Analysis (SAST/DAST)

Tools for analyzing application code and runtime behavior to identify security vulnerabilities.

| Tool | Logo | Description |
|------|------|-------------|
| SonarQube | ![SonarQube Logo](https://logo.clearbit.com/sonarqube.org) | Open-source platform for continuous inspection of code quality and security with automatic reviews to detect bugs, vulnerabilities, and code smells |
| Checkmarx | ![Checkmarx Logo](https://logo.clearbit.com/checkmarx.com) | Application security testing platform offering static code analysis, software composition analysis, and infrastructure as code security |
| OWASP ZAP | ![OWASP ZAP Logo](https://logo.clearbit.com/zaproxy.org) | Open-source web application security scanner for finding vulnerabilities in web applications during development and testing |
| Veracode | ![Veracode Logo](https://logo.clearbit.com/veracode.com) | Cloud-based application security platform providing static, dynamic, and software composition analysis through a unified solution |
| Fortify | ![Fortify Logo](https://logo.clearbit.com/microfocus.com) | Application security solution from Micro Focus that tests software for security vulnerabilities across the development lifecycle |
| Burp Suite | ![Burp Suite Logo](https://logo.clearbit.com/portswigger.net) | Integrated platform for performing security testing of web applications with various tools for different testing aspects |
| Acunetix | ![Acunetix Logo](https://logo.clearbit.com/acunetix.com) | Web vulnerability scanner designed to find vulnerabilities such as SQL injection, XSS, and XXE in web applications |
| Synopsys Coverity | ![Coverity Logo](https://logo.clearbit.com/synopsys.com) | Static analysis tool for identifying defects and security vulnerabilities in source code |

### Dependency Scanning & Software Composition Analysis

Tools for identifying vulnerabilities in third-party dependencies and open-source components.

| Tool | Logo | Description |
|------|------|-------------|
| Snyk | ![Snyk Logo](https://logo.clearbit.com/snyk.io) | Developer security platform for scanning and monitoring code, open source dependencies, containers, and IaC for vulnerabilities |
| Dependabot | ![Dependabot Logo](https://logo.clearbit.com/github.com) | GitHub's automated security tool that scans dependencies for vulnerabilities and creates pull requests to update them |
| WhiteSource | ![WhiteSource Logo](https://logo.clearbit.com/whitesourcesoftware.com) | Platform for managing and securing open source components throughout the software development lifecycle |
| OWASP Dependency-Check | ![OWASP Dependency-Check Logo](https://logo.clearbit.com/owasp.org) | Software composition analysis tool identifying project dependencies with known vulnerabilities using NVD's CVE data |
| Sonatype Nexus IQ | ![Nexus IQ Logo](https://logo.clearbit.com/sonatype.com) | Software composition analysis platform integrated with Nexus Repository Manager for continuously monitoring open source risk |
| Black Duck | ![Black Duck Logo](https://logo.clearbit.com/synopsys.com) | Synopsys solution for managing security, quality, and license compliance risks with open source software |
| FOSSA | ![FOSSA Logo](https://logo.clearbit.com/fossa.com) | Automated open source management platform for license compliance and vulnerability scanning |
| Mend (formerly WhiteSource) | ![Mend Logo](https://logo.clearbit.com/mend.io) | Automated open source security and license compliance management platform |

### Container & Infrastructure Security

Tools for securing containerized applications and infrastructure components.

| Tool | Logo | Description |
|------|------|-------------|
| Aqua Security | ![Aqua Security Logo](https://logo.clearbit.com/aquasec.com) | Platform for securing containerized applications from development to production, across VMs, containers, and serverless functions |
| Sysdig | ![Sysdig Logo](https://logo.clearbit.com/sysdig.com) | Container security platform for detecting vulnerabilities, ensuring compliance, and monitoring containers and Kubernetes |
| Prisma Cloud (Palo Alto) | ![Prisma Cloud Logo](https://logo.clearbit.com/paloaltonetworks.com) | Cloud native security platform with visibility and security across hosts, containers, and serverless applications |
| Trivy | ![Trivy Logo](https://logo.clearbit.com/aquasec.com) | Open-source vulnerability scanner for containers and infrastructure as code with comprehensive vulnerability detection |
| Anchore | ![Anchore Logo](https://logo.clearbit.com/anchore.com) | Open source and enterprise container security scanning and policy solution for finding vulnerabilities and ensuring compliance |
| Clair | ![Clair Logo](https://logo.clearbit.com/coreos.com) | Open-source project for static analysis of vulnerabilities in application containers |
| Qualys | ![Qualys Logo](https://logo.clearbit.com/qualys.com) | Cloud-based IT, security, and compliance solution with vulnerability management and container security capabilities |
| TwistLock (acquired by Palo Alto) | ![TwistLock Logo](https://logo.clearbit.com/paloaltonetworks.com) | Cloud native security platform providing vulnerability management, compliance, and runtime defense for containers |

## Identity & Access Management

Solutions for managing user identities, authentication, and authorization across applications and systems.

### Authentication & Identity Providers

| Platform | Logo | Description |
|----------|------|-------------|
| Auth0 | ![Auth0 Logo](https://logo.clearbit.com/auth0.com) | Identity platform providing authentication, authorization, and secure access for applications with support for social logins and MFA |
| Okta | ![Okta Logo](https://logo.clearbit.com/okta.com) | Identity and access management service with single sign-on, multi-factor authentication, and lifecycle management capabilities |
| Microsoft Azure AD | ![Azure AD Logo](https://logo.clearbit.com/azure.microsoft.com) | Microsoft's identity and access management solution enabling single sign-on, multi-factor authentication, and conditional access |
| OneLogin | ![OneLogin Logo](https://logo.clearbit.com/onelogin.com) | Cloud-based identity and access management provider offering single sign-on, multi-factor authentication, and directory integration |
| Ping Identity | ![Ping Identity Logo](https://logo.clearbit.com/pingidentity.com) | Enterprise identity security platform that provides MFA, SSO, access security, and directory solutions |
| ForgeRock | ![ForgeRock Logo](https://logo.clearbit.com/forgerock.com) | Identity platform for authentication, authorization, identity management, and digital identity protection |
| JumpCloud | ![JumpCloud Logo](https://logo.clearbit.com/jumpcloud.com) | Directory-as-a-Service platform providing centralized identity management, MFA, and device management |
| Keycloak | ![Keycloak Logo](https://logo.clearbit.com/keycloak.org) | Open-source identity and access management solution offering user federation, identity brokering, and social login |

### API Security & Management

| Tool | Logo | Description |
|------|------|-------------|
| OAuth 2.0 / OpenID Connect | ![OAuth Logo](https://logo.clearbit.com/oauth.net) | Industry-standard protocols for authorization and authentication enabling secure access to resources without sharing credentials |
| Kong | ![Kong Logo](https://logo.clearbit.com/konghq.com) | API gateway with plugins for authentication, rate limiting, transformations, and other API management functions |
| Apigee | ![Apigee Logo](https://logo.clearbit.com/apigee.com) | Google Cloud's API management platform providing API security, rate limiting, analytics, and developer portal capabilities |
| MuleSoft | ![MuleSoft Logo](https://logo.clearbit.com/mulesoft.com) | Integration and API platform with features for API design, implementation, security, management, and monitoring |
| Tyk | ![Tyk Logo](https://logo.clearbit.com/tyk.io) | Open-source API gateway and management platform with robust security features and analytics |
| AWS API Gateway | ![AWS API Gateway Logo](https://logo.clearbit.com/aws.amazon.com) | Amazon's service for creating, publishing, maintaining, monitoring, and securing REST, HTTP, and WebSocket APIs |
| Azure API Management | ![Azure API Management Logo](https://logo.clearbit.com/azure.microsoft.com) | Microsoft's service for publishing, securing, transforming, maintaining, and monitoring APIs |
| 42Crunch | ![42Crunch Logo](https://logo.clearbit.com/42crunch.com) | API security platform providing static security audit, dynamic security testing, and API security protection |

### Access Control & Zero Trust

| Solution | Logo | Description |
|----------|------|-------------|
| CyberArk | ![CyberArk Logo](https://logo.clearbit.com/cyberark.com) | Privileged access management solution protecting critical assets, infrastructure, and applications from unauthorized access |
| BeyondTrust | ![BeyondTrust Logo](https://logo.clearbit.com/beyondtrust.com) | Privileged access management platform securing privileged credentials, sessions, and endpoints |
| SailPoint | ![SailPoint Logo](https://logo.clearbit.com/sailpoint.com) | Identity governance and administration platform for managing user access rights across enterprise systems |
| Zscaler | ![Zscaler Logo](https://logo.clearbit.com/zscaler.com) | Zero trust exchange platform providing secure access to applications and assets without a traditional VPN |
| Cloudflare Access | ![Cloudflare Access Logo](https://logo.clearbit.com/cloudflare.com) | Zero trust network access solution providing secure access to internal resources without a VPN |
| Duo Security | ![Duo Security Logo](https://logo.clearbit.com/duo.com) | Cisco's multi-factor authentication solution verifying user identities before granting access to applications |
| Palo Alto Prisma Access | ![Prisma Access Logo](https://logo.clearbit.com/paloaltonetworks.com) | Cloud-delivered security service providing secure access to cloud and on-premises applications |
| Perimeter 81 | ![Perimeter 81 Logo](https://logo.clearbit.com/perimeter81.com) | Zero trust network access solution with a software-defined perimeter for secure remote access |

## Secret Management

Solutions for securely storing, accessing, and managing sensitive information like API keys, passwords, and certificates.

| Tool | Logo | Description |
|------|------|-------------|
| HashiCorp Vault | ![HashiCorp Vault Logo](https://logo.clearbit.com/vaultproject.io) | Tool for securing, storing, and controlling access to tokens, passwords, certificates, encryption keys, and other sensitive data |
| AWS Secrets Manager | ![AWS Secrets Manager Logo](https://logo.clearbit.com/aws.amazon.com) | Service for protecting access to applications, services, and IT resources without hardcoded credentials |
| Azure Key Vault | ![Azure Key Vault Logo](https://logo.clearbit.com/azure.microsoft.com) | Microsoft's cloud service for securely storing and accessing secrets protected by hardware security modules |
| Google Secret Manager | ![Google Secret Manager Logo](https://logo.clearbit.com/cloud.google.com) | Google Cloud service that provides a secure and convenient method for storing API keys, passwords, certificates, and other sensitive data |
| Doppler | ![Doppler Logo](https://logo.clearbit.com/doppler.com) | Universal secrets platform enabling developers to securely store and access secrets across environments and clouds |
| Akeyless | ![Akeyless Logo](https://logo.clearbit.com/akeyless.io) | SaaS-based secrets management solution with zero-knowledge encryption and just-in-time access |
| 1Password for Teams | ![1Password Logo](https://logo.clearbit.com/1password.com) | Password manager for teams providing secure storage of credentials, secrets, and sensitive information with access controls |
| Keeper Secrets Manager | ![Keeper Logo](https://logo.clearbit.com/keepersecurity.com) | Zero-knowledge, cloud-based platform for securing credentials, secrets, and sensitive information with role-based access controls |

## Encryption & Data Protection

Technologies for protecting data through encryption, masking, and secure transmission.

| Technology | Logo | Description |
|------------|------|-------------|
| Let's Encrypt | ![Let's Encrypt Logo](https://logo.clearbit.com/letsencrypt.org) | Free, automated, and open certificate authority providing TLS certificates for secure websites |
| Signal Protocol | ![Signal Protocol Logo](https://logo.clearbit.com/signal.org) | Cryptographic protocol providing end-to-end encryption for instant messaging, voice, and video calls |
| HashiCorp Boundary | ![Boundary Logo](https://logo.clearbit.com/hashicorp.com) | Secure remote access system based on identity, providing secure access to systems without exposing networks |
| PGP/GPG | ![GPG Logo](https://logo.clearbit.com/gnupg.org) | Encryption standard for signing, encrypting, and decrypting texts, emails, files, directories, and whole disk partitions |
| Cloudflare SSL | ![Cloudflare SSL Logo](https://logo.clearbit.com/cloudflare.com) | SSL/TLS encryption services for websites provided through Cloudflare's CDN with various security features |
| Wickr | ![Wickr Logo](https://logo.clearbit.com/wickr.com) | AWS's secure messaging and collaboration platform with end-to-end encryption and ephemerality features |
| Virtru | ![Virtru Logo](https://logo.clearbit.com/virtru.com) | Data protection solutions providing encryption, access controls, and data security for email and files |
| VeraCrypt | ![VeraCrypt Logo](https://logo.clearbit.com/veracrypt.fr) | Free open-source disk encryption software for Windows, macOS, and Linux providing full disk encryption |

## Security Monitoring & Incident Response

Tools for monitoring systems for security events, detecting threats, and managing incident response.

| Tool | Logo | Description |
|------|------|-------------|
| Splunk | ![Splunk Logo](https://logo.clearbit.com/splunk.com) | Platform for searching, monitoring, and analyzing machine-generated data for security monitoring and threat detection |
| Datadog Security | ![Datadog Logo](https://logo.clearbit.com/datadoghq.com) | Cloud monitoring service with security capabilities for detecting threats and suspicious behavior |
| Elastic Security | ![Elastic Security Logo](https://logo.clearbit.com/elastic.co) | Security information and event management (SIEM) solution built on the Elastic Stack for threat detection and response |
| CrowdStrike | ![CrowdStrike Logo](https://logo.clearbit.com/crowdstrike.com) | Cloud-delivered endpoint protection platform detecting and preventing breaches with AI-powered threat intelligence |
| Wazuh | ![Wazuh Logo](https://logo.clearbit.com/wazuh.com) | Open-source security monitoring solution for threat detection, incident response, and compliance |
| AlienVault OSSIM | ![AlienVault Logo](https://logo.clearbit.com/alienvault.com) | Open-source security information and event management (SIEM) tool for asset discovery, vulnerability assessment, and intrusion detection |
| IBM QRadar | ![QRadar Logo](https://logo.clearbit.com/ibm.com) | Security information and event management (SIEM) platform collecting and analyzing security data for threat detection |
| Rapid7 InsightIDR | ![Rapid7 Logo](https://logo.clearbit.com/rapid7.com) | Cloud-based SIEM solution combining user behavior analytics, endpoint detection, and attacker behavior analytics |

## Compliance & Governance

Tools, frameworks, and platforms for ensuring regulatory compliance and managing security governance.

### Compliance Management Platforms

| Platform | Logo | Description |
|----------|------|-------------|
| Prisma Cloud Compliance | ![Prisma Cloud Logo](https://logo.clearbit.com/paloaltonetworks.com) | Cloud security posture management solution providing visibility and compliance monitoring across cloud providers |
| Vanta | ![Vanta Logo](https://logo.clearbit.com/vanta.com) | Automated security and compliance platform specializing in SOC 2, ISO 27001, HIPAA, and GDPR compliance |
| Drata | ![Drata Logo](https://logo.clearbit.com/drata.com) | Security and compliance automation platform streamlining compliance with SOC 2, ISO 27001, GDPR, HIPAA, and other frameworks |
| LogicGate | ![LogicGate Logo](https://logo.clearbit.com/logicgate.com) | Risk and compliance management platform enabling organizations to build and scale compliance programs |
| OneTrust | ![OneTrust Logo](https://logo.clearbit.com/onetrust.com) | Privacy, security, and data governance platform for operationalizing compliance with global regulations |
| Tugboat Logic | ![Tugboat Logic Logo](https://logo.clearbit.com/tugboatlogic.com) | Security assurance platform automating the process of achieving security certifications like SOC 2 |
| Secureframe | ![Secureframe Logo](https://logo.clearbit.com/secureframe.com) | Compliance automation platform helping companies achieve and maintain SOC 2, ISO 27001, HIPAA, and other certifications |
| Hyperproof | ![Hyperproof Logo](https://logo.clearbit.com/hyperproof.io) | Compliance operations platform for managing multiple compliance frameworks simultaneously with centralized evidence collection |

### Regulatory Frameworks & Standards

| Framework | Logo | Description |
|-----------|------|-------------|
| SOC 2 | ![SOC 2 Logo](https://logo.clearbit.com/aicpa.org) | Auditing standard developed by the AICPA for service organizations, focusing on security, availability, processing integrity, confidentiality, and privacy |
| ISO 27001 | ![ISO 27001 Logo](https://logo.clearbit.com/iso.org) | International standard for information security management systems (ISMS) with requirements for establishing, implementing, and improving an ISMS |
| GDPR | ![GDPR Logo](https://logo.clearbit.com/gdpr.eu) | European Union regulation on data protection and privacy giving control to individuals over their personal data |
| HIPAA | ![HIPAA Logo](https://logo.clearbit.com/hhs.gov) | US law that sets data privacy and security provisions for safeguarding medical information in healthcare organizations |
| PCI DSS | ![PCI DSS Logo](https://logo.clearbit.com/pcisecuritystandards.org) | Information security standard for organizations that handle credit card information, focusing on maintaining a secure environment |
| NIST Cybersecurity Framework | ![NIST Logo](https://logo.clearbit.com/nist.gov) | Voluntary framework consisting of standards, guidelines, and best practices to manage cybersecurity-related risk |
| CCPA | ![CCPA Logo](https://logo.clearbit.com/oag.ca.gov) | California Consumer Privacy Act enhancing privacy rights and consumer protection for residents of California |
| FedRAMP | ![FedRAMP Logo](https://logo.clearbit.com/fedramp.gov) | US government-wide program providing a standardized approach to security assessment, authorization, and monitoring for cloud products |

### Privacy & Data Protection

| Tool | Logo | Description |
|------|------|-------------|
| OneTrust Privacy | ![OneTrust Privacy Logo](https://logo.clearbit.com/onetrust.com) | Privacy management software for operationalizing privacy compliance with built-in readiness for various privacy laws |
| TrustArc | ![TrustArc Logo](https://logo.clearbit.com/trustarc.com) | Privacy compliance and risk management platform for navigating global privacy regulations |
| BigID | ![BigID Logo](https://logo.clearbit.com/bigid.com) | Data discovery, privacy, security, and governance platform leveraging machine learning for identifying and protecting sensitive data |
| WireWheel | ![WireWheel Logo](https://logo.clearbit.com/wirewheel.io) | Privacy management platform for data inventory, assessments, requests, and consent management |
| DataGrail | ![DataGrail Logo](https://logo.clearbit.com/datagrail.io) | Privacy platform automating data subject requests, detecting shadow IT, and maintaining real-time data maps |
| Collibra | ![Collibra Logo](https://logo.clearbit.com/collibra.com) | Data intelligence platform with data governance, catalog, privacy, and lineage capabilities |
| Transcend | ![Transcend Logo](https://logo.clearbit.com/transcend.io) | Data privacy infrastructure that automates privacy request fulfillment, consent management, and data mapping |
| Osano | ![Osano Logo](https://logo.clearbit.com/osano.com) | Consent management platform for building privacy-by-design into websites and applications with compliance monitoring |