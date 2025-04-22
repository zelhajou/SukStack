# Containers & Orchestration

Container technologies enable applications to run consistently across different environments by packaging code and dependencies together, while orchestration tools manage containerized applications at scale.

## Container Runtimes & Engines

Software for running and managing containers on a host system

| Tool | Logo | Description |
|------|------|-------------|
| [containerd](https://containerd.io/) | ![containerd Logo](/logos/devops/containers/containerd.png) | Industry-standard container runtime that manages the complete container lifecycle, from image transfer to execution, serving as the core runtime for Docker and Kubernetes |
| [CRI-O](https://cri-o.io/) | ![CRI-O Logo](/logos/devops/containers/cri-o.png) | Lightweight container runtime specifically designed for Kubernetes, implementing the Kubernetes Container Runtime Interface (CRI) |
| [Docker](https://www.docker.com/) | ![Docker Logo](/logos/devops/containers/docker.png) | Platform that enables developers to build, package, and distribute applications as containers, ensuring consistent behavior across different environments |
| [Podman](https://podman.io/) | ![Podman Logo](/logos/devops/containers/podman.png) | Daemonless container engine for developing, managing, and running OCI containers that can be used as a drop-in replacement for Docker |

## Container Orchestration Platforms

Platforms for automating deployment, scaling, and management of containerized applications

| Tool | Logo | Description |
|------|------|-------------|
| [Docker Swarm](https://docs.docker.com/engine/swarm/) | ![Docker Swarm Logo](/logos/devops/containers/docker-swarm.png) | Native clustering and orchestration solution for Docker, enabling creation and management of a cluster of Docker nodes as a single virtual system |
| [HashiCorp Nomad](https://www.nomadproject.io/) | ![HashiCorp Nomad Logo](/logos/devops/containers/nomad.png) | Simple and flexible orchestrator for deploying and managing containers and non-containerized applications across on-premises and cloud environments |
| [Kubernetes](https://kubernetes.io/) | ![Kubernetes Logo](/logos/devops/containers/kubernetes.png) | Open-source platform for automating deployment, scaling, and management of containerized applications with declarative configuration and automation |
| [Rancher](https://rancher.com/) | ![Rancher Logo](/logos/devops/containers/rancher.png) | Complete software stack for teams adopting containers, addressing operational and security challenges of managing multiple Kubernetes clusters |
| [Red Hat OpenShift](https://www.redhat.com/en/technologies/cloud-computing/openshift) | ![Red Hat OpenShift Logo](/logos/devops/containers/openshift.png) | Enterprise Kubernetes platform that provides a consistent application platform to manage hybrid cloud and multicloud deployments |

## Container Registries

Services for storing and distributing container images

| Tool | Logo | Description |
|------|------|-------------|
| [Docker Hub](https://hub.docker.com/) | ![Docker Hub Logo](/logos/devops/containers/docker-hub.png) | World's largest container image repository with many official and community images, providing a centralized resource for container image discovery and distribution |
| [Harbor](https://goharbor.io/) | ![Harbor Logo](/logos/devops/containers/harbor.png) | Open-source trusted cloud native registry project that stores, signs, and scans content, delivering compliance, performance, and interoperability |
| [Quay](https://quay.io/) | ![Quay Logo](/logos/devops/containers/quay.png) | Private container registry that secures and builds containers for reliable and scalable deployments with enterprise-grade security features |

## Kubernetes Ecosystem Tools

Tools and extensions that enhance Kubernetes functionality

| Tool | Logo | Description |
|------|------|-------------|
| [Helm](https://helm.sh/) | ![Helm Logo](/logos/devops/containers/helm.png) | Package manager for Kubernetes that helps define, install, and upgrade complex Kubernetes applications with templates called charts |
| [Kubeflow](https://www.kubeflow.org/) | ![Kubeflow Logo](/logos/devops/containers/kubeflow.png) | Machine learning toolkit for Kubernetes that makes deploying and managing ML workflows on Kubernetes simple, portable, and scalable |
| [Kubernetes Operators](https://operatorhub.io/) | ![Kubernetes Operators Logo](/logos/devops/containers/operators.png) | Software extensions to Kubernetes that make use of custom resources to manage applications and their components |
| [Kustomize](https://kustomize.io/) | ![Kustomize Logo](/logos/devops/containers/kustomize.png) | Kubernetes native configuration management tool that lets you customize untemplated YAML files without using templates |


## Best Practices

- **Immutable Containers**: Treat containers as immutable and never modify running containers
- **Minimal Base Images**: Use minimal, purpose-built base images to reduce attack surface
- **Image Scanning**: Scan container images for vulnerabilities before deployment
- **Resource Limits**: Set appropriate CPU and memory limits for containers
- **Health Checks**: Implement readiness and liveness probes for containerized applications
- **Declarative Configuration**: Define container orchestration using declarative configurations
- **Secrets Management**: Securely handle sensitive information in containerized environments
- **Network Policies**: Implement network segmentation for containerized applications

## Integration with DevOps Workflows

Modern tools integrate seamlessly with other DevOps components to create efficient software delivery pipelines:

- **CI/CD Pipelines**: Automate container image building and deployment
- **Infrastructure as Code**: Define container infrastructure using code
- **Monitoring Tools**: Implement container-aware monitoring and observability
- **Security Scanning**: Scan images and running containers for vulnerabilities
- **Service Mesh**: Enhance container networking with service mesh capabilities

## Resources

### Documentations

- [Docker Documentation](https://docs.docker.com/)
- [Kubernetes Documentation](https://kubernetes.io/docs/home/)

### Books

- [Container Security: Fundamental Technology Concepts that Protect Containerized Applications](https://www.oreilly.com/library/view/container-security/9781492056690/)
- [Kubernetes Patterns: Reusable Elements for Designing Cloud-Native Applications](https://www.redhat.com/en/resources/oreilly-kubernetes-patterns-cloud-native-apps)

