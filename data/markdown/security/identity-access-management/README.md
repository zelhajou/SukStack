# Identity & Access Management (IAM) Categories

Identity and Access Management solutions span several distinct categories, each designed for specific use cases and environments. This breakdown helps developers and security professionals understand which IAM solution best fits their specific requirements.

## IAM Categories Overview

| Category | Focus Area | Hosted / Self-hosted | Best For |
|----------|------------|----------------------|----------|
| **Cloud IAM** | Cloud infrastructure access | Hosted (Cloud-native) | Cloud security (AWS, GCP, Azure) |
| **Open Source IAM** | Full IAM & SSO | Self-hosted | Privacy, control, internal apps |
| **Commercial IAM / CIAM** | Enterprise auth | Hosted or hybrid | Large scale, enterprise apps |
| **AaaS** | Easy web/mobile auth | Hosted (SaaS) | Dev-friendly, fast auth setup |
| **PAM** | Privileged access & secrets | Usually hosted/on-prem | Admin access control, compliance |

## 1. Cloud Provider IAM Services

Built-in identity and access management tools native to specific cloud platforms.

| Service | Logo | Description |
|---------|------|-------------|
| AWS IAM | ![AWS IAM Logo](https://logo.clearbit.com/aws.amazon.com) | Amazon's identity service controlling access to AWS services and resources securely, with fine-grained permissions for users, groups, and roles |
| Azure Active Directory | ![Azure AD Logo](https://logo.clearbit.com/azure.microsoft.com) | Microsoft's enterprise identity service providing single sign-on, MFA, and conditional access control for Microsoft cloud services and applications |
| Google Cloud IAM | ![Google Cloud IAM Logo](https://logo.clearbit.com/cloud.google.com) | Google's unified system for controlling access to Google Cloud resources with predefined roles and custom permissions |
| IBM Cloud IAM | ![IBM Cloud IAM Logo](https://logo.clearbit.com/ibm.com) | Identity and access management system for IBM Cloud controlling which users have access to which resources |
| Oracle Cloud IAM | ![Oracle Cloud IAM Logo](https://logo.clearbit.com/oracle.com) | Oracle's identity management system for controlling access to cloud resources and services |
| Alibaba Cloud RAM | ![Alibaba Cloud RAM Logo](https://logo.clearbit.com/alibabacloud.com) | Resource Access Management service for Alibaba Cloud providing identity management and access control |

### What They Manage
- Access to cloud **infrastructure resources**
- **Users, roles, policies**, and permissions for cloud resources like VMs, storage, databases, etc.
- Resource-level access control with audit capabilities

### Use Case
If you're building inside a specific cloud provider like AWS or Azure, you'll use their IAM for securing your **cloud infrastructure**.

### Not Ideal For
- Web application authentication (login/signup flows)
- Customer identity management systems (CIAM)
- Cross-cloud or hybrid environments requiring unified access control

## 2. Open Source IAM / SSO Solutions

Self-hosted, community-maintained IAM systems with comprehensive authentication and authorization capabilities.

| Solution | Logo | Description |
|----------|------|-------------|
| Keycloak | ![Keycloak Logo](https://logo.clearbit.com/keycloak.org) | Open-source identity and access management solution with features for single sign-on, identity brokering, and social login |
| GoAuthentik | ![GoAuthentik Logo](https://logo.clearbit.com/goauthentik.io) | Open-source identity provider focused on flexibility and versatility for various environments and authentication needs |
| WSO2 Identity Server | ![WSO2 Logo](https://logo.clearbit.com/wso2.com) | Open-source IAM product supporting authentication, authorization, user management, and CIAM scenarios |
| Gluu | ![Gluu Logo](https://logo.clearbit.com/gluu.org) | Open-source access management suite providing free OpenID Connect and UMA implementations |
| ORY | ![ORY Logo](https://logo.clearbit.com/ory.sh) | Open-source identity infrastructure and services with separate components for authentication, authorization, and user management |
| Authelia | ![Authelia Logo](https://logo.clearbit.com/authelia.com) | Open-source authentication and authorization server protecting applications via single sign-on and two-factor authentication |
| Zitadel | ![Zitadel Logo](https://logo.clearbit.com/zitadel.com) | Open-source identity management platform with built-in passwordless authentication and OIDC |
| Supertokens | ![Supertokens Logo](https://logo.clearbit.com/supertokens.com) | Open-source authentication solution that can be self-hosted for complete control over user data |

### What They Manage
- Authentication for **users and applications**
- **Single sign-on, federation, multi-factor authentication**
- Identity brokering (social login integration)
- Custom workflows and integrations
- Authorization policies and access control

### Use Case
- Organizations requiring full control and privacy (self-hosted)
- Avoiding vendor lock-in
- Enterprise SSO or internal tools
- Custom authentication flows and integrations

### Not Ideal For
- Teams seeking quick plug-and-play solutions
- Organizations without resources to manage servers or maintain updates
- Projects with limited security expertise

## 3. Commercial IAM / CIAM Platforms

Enterprise-grade, managed platforms focused on both internal employee IAM and customer identity and access management (CIAM).

| Platform | Logo | Description |
|----------|------|-------------|
| Auth0 | ![Auth0 Logo](https://logo.clearbit.com/auth0.com) | Identity platform providing authentication, authorization, and user management for applications with extensive customization options |
| Okta | ![Okta Logo](https://logo.clearbit.com/okta.com) | Cloud-based identity provider offering authentication, user management, and access control for employees and customers |
| Ping Identity | ![Ping Identity Logo](https://logo.clearbit.com/pingidentity.com) | Identity security platform for enterprises with solutions for workforce and customer identity management |
| ForgeRock | ![ForgeRock Logo](https://logo.clearbit.com/forgerock.com) | Enterprise IAM platform supporting complex identity relationships across digital channels with AI-driven security |
| IBM Verify | ![IBM Verify Logo](https://logo.clearbit.com/ibm.com) | IBM's identity and access management suite for securing access to applications and resources |
| OneLogin | ![OneLogin Logo](https://logo.clearbit.com/onelogin.com) | Cloud-based identity provider with SSO, MFA, and user provisioning capabilities |
| Microsoft Entra | ![Microsoft Entra Logo](https://logo.clearbit.com/microsoft.com) | Microsoft's family of identity and access capabilities (formerly Azure AD) for securing access across environments |
| Frontegg | ![Frontegg Logo](https://logo.clearbit.com/frontegg.com) | B2B SaaS-focused user management platform with advanced authentication and authorization capabilities |

### What They Manage
- User registration, login, MFA, SSO
- Administrative dashboards, user management, analytics
- Compliance frameworks (GDPR, HIPAA, etc.)
- Enterprise federation (SAML, LDAP)
- Advanced security features and threat detection

### Use Case
- Enterprises needing **robust, compliant** identity solutions
- B2C platforms with large user bases
- Organizations preferring to **outsource IAM management**
- Companies requiring advanced security and compliance features

### Not Ideal For
- Startups with limited budgets
- Projects requiring full source code access and control
- Simple authentication needs that don't justify the cost

## 4. Authentication-as-a-Service (AaaS)

Modern, developer-first platforms that abstract and simplify authentication for web and mobile applications.

| Service | Logo | Description |
|---------|------|-------------|
| Clerk | ![Clerk Logo](https://logo.clearbit.com/clerk.dev) | Complete user management and authentication solution with pre-built UI components, SDKs, and advanced features |
| Magic | ![Magic Logo](https://logo.clearbit.com/magic.link) | Passwordless authentication service using magic links, enabling secure login without passwords |
| BetterAuth | ![BetterAuth Logo](https://logo.clearbit.com/betterauth.io) | Authentication platform focused on simplifying implementation with secure defaults and modern approaches |
| SuperTokens | ![SuperTokens Logo](https://logo.clearbit.com/supertokens.com) | Authentication solution available as both a managed service and self-hosted option with customizable login flows |
| Descope | ![Descope Logo](https://logo.clearbit.com/descope.com) | Authentication and user management platform with pre-built workflows and passwordless options |
| Stytch | ![Stytch Logo](https://logo.clearbit.com/stytch.com) | API-first authentication platform focusing on passwordless methods and flexible implementation |
| WorkOS | ![WorkOS Logo](https://logo.clearbit.com/workos.com) | Enterprise features API providing SSO, directory sync, and audit trail capabilities for SaaS applications |
| PropelAuth | ![PropelAuth Logo](https://logo.clearbit.com/propelauth.com) | B2B authentication and authorization solution with built-in organization management |

### What They Manage
- User signup/login (email, phone, social, passkey, passwordless)
- Session management, MFA
- SDKs and pre-built components for frontend/backend integration
- User profile management and authentication flows

### Use Case
- Fast, plug-and-play authentication for web/mobile apps
- Startups, indie developers, modern development stacks (React, Next.js, etc.)
- Projects prioritizing developer experience and rapid implementation

### Not Ideal For
- Highly customized or complex enterprise workflows
- On-premises/self-hosted requirements (except for solutions like SuperTokens)
- Organizations with strict data sovereignty requirements

## 5. Privileged Access Management (PAM)

Solutions focusing on controlling and monitoring high-level (admin/root) access to systems and sensitive resources.

| Solution | Logo | Description |
|----------|------|-------------|
| CyberArk | ![CyberArk Logo](https://logo.clearbit.com/cyberark.com) | Comprehensive privileged access management solution securing credentials, controlling access, and monitoring activities |
| BeyondTrust | ![BeyondTrust Logo](https://logo.clearbit.com/beyondtrust.com) | PAM platform for securing privileged credentials, sessions, and access with least privilege enforcement |
| Thycotic | ![Thycotic Logo](https://logo.clearbit.com/thycotic.com) | Privileged access management solutions focusing on secret server, privilege manager, and account lifecycle |
| Centrify | ![Centrify Logo](https://logo.clearbit.com/centrify.com) | PAM solution providing privileged access security through identity-centric approach |
| Teleport | ![Teleport Logo](https://logo.clearbit.com/goteleport.com) | Access management for cloud-native infrastructure, enabling secure access to servers, Kubernetes, and databases |
| Saviynt | ![Saviynt Logo](https://logo.clearbit.com/saviynt.com) | Enterprise identity cloud combining PAM capabilities with identity governance and cloud security |
| Hashicorp Vault | ![Hashicorp Vault Logo](https://logo.clearbit.com/vaultproject.io) | Secret management tool for securely accessing tokens, passwords, certificates, and encryption keys |
| Delinea | ![Delinea Logo](https://logo.clearbit.com/delinea.com) | PAM solutions for managing privileged access with secret server and privilege management capabilities |

### What They Manage
- Secure storage of secrets/credentials
- Temporary privileged session access
- Session recording, auditing, and monitoring
- Secure credential rotation and lifecycle management

### Use Case
- Protecting critical infrastructure from internal/external threats
- Regulatory compliance requirements
- Managing access for administrators, DevOps, and IT staff
- Sensitive environments requiring strict access controls

### Not Ideal For
- General user authentication needs
- B2C applications and consumer-facing authentication
- Small organizations with limited privileged access requirements

## Decision Factors for IAM Solution Selection

When choosing an IAM solution, consider these key factors:

1. **Deployment Model**:
   - Cloud-native vs. self-hosted
   - Single-tenant vs. multi-tenant

2. **Integration Requirements**:
   - Existing systems and applications
   - Development frameworks and languages
   - API and SDK availability

3. **Scale and Performance**:
   - Number of users and authentication operations
   - Geographic distribution and latency requirements

4. **Security Requirements**:
   - Compliance needs (GDPR, HIPAA, SOC2, etc.)
   - Authentication methods and MFA options
   - Threat detection and prevention capabilities

5. **Cost Structure**:
   - Per-user pricing vs. usage-based
   - Free tiers and open-source options
   - Total cost of ownership (including maintenance)

6. **Developer Experience**:
   - Pre-built UI components
   - Documentation quality
   - Implementation complexity

7. **Customization Needs**:
   - Branding and UI flexibility
   - Custom authentication flows
   - Extensibility for specific requirements