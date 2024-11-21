import {
  GreyshoreLogo,
  ThePentadGroupLogo,
  PRAGroupLogo,
  DroneUpLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Mark Bennett",
  initials: "MB",
  location: "Virginia Beach, Virginia, USA",
  locationLink: "https://www.google.com/maps/place/Wrocław",
  about:
    "Experienced leader in platform engineering, specializing in cloud transformations, observability, and building developer-focused 'Golden-Path' solutions to drive efficiency, scalability, and innovation.",
  summary:
    "As a Senior Platform Engineer, I have successfully designed and implemented cloud solutions for use in Production. I lead teams effectively and with integrity, providing mentoring and enablement opportunities to help people grow. Currently, I work mostly with Terraform, Kubernetes, Google Cloud Platform, and CircleCI. I have many years of experience working in the Technology arena with personal and professional projects.",
  avatarUrl: "https://avatars.githubusercontent.com/u/44004430?v=4",
  personalWebsiteUrl: "https://systemward.com",
  contact: {
    email: "marksg1mail@gmail.com",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/m0ab",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/bennema1/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Tidewater Community College",
      degree: "Associates in Computer Science (Partial Completion)",
      start: "2007",
      end: "2009",
    },
  ],
  work: [
    {
      company: "DroneUp",
      link: "https://droneup.com",
      badges: ["Hybrid"],
      title: "Sr. Software Engineer, Platform Engineering",
      logo: DroneUpLogo,
      start: "2022",
      end: "Current",
      description:[
        "Lead efforts to enhance developer experience by driving automation, enabling true self-service platforms, and democratizing infrastructure-as-code to accelerate innovation and value delivery across the Engineering organization.",
        "Designed and implemented a self-service platform enabling teams to quickly and consistently create microservices with deployment pipelines to GKE, empowering them to innovate and deliver value faster.",
        "Developed and maintained CI/CD pipelines, reusable Golden Path templates, and deployment solutions using tools such as CircleCI, GitHub Actions, Terraform, Docker, Google Artifact Registry, Helm, and Kubernetes.",
        "Automated GKE version upgrades, ensuring zero downtime and maintaining an acceptable position in compliance frameworks such as SOC2 and NIST 800-53.",
        "Migrated infrastructure and services from AWS and Azure to Google Cloud Platform, consolidating cloud providers to improve operational efficiency and reduce cost.",
        "Enhanced observability and production support with tools such as Datadog, Honeycomb, PagerDuty, and Slack.",
        "Advocated for and practiced Test-Driven Development and Trunk-Based Development to ensure consistent, predictable, and resilient infrastructure solutions with tools such as Terraform, GitHub Actions, and Codecov."
      ],
    },
    {
      company: "The Pentad Group",
      link: "https://www.thepentadgroup.com/",
      badges: ["Remote"],
      title: "Cloud Automation Engineer",
      logo: ThePentadGroupLogo,
      start: "2021",
      end: "Current",
      description:
        "Design and implement cloud infrastructure and services as a contracted consultant to provide customers with the infrastructure required to run secure, scalable, fault-tolerant, resilient services. Technologies: Terraform Open Source, Kubernetes, Azure, Azure DevOps",
    },
    {
      company: "Greyshore Associates",
      link: "https://www.greyshore.com/",
      badges: ["Remote"],
      title: "Lead Cloud Automation Engineer",
      logo: GreyshoreLogo,
      start: "2019",
      end: "2021",
      description:
        "Operated as a Technical Lead for a team of six Infrastructure Developers to provide guidance on platform architecture decisions and managed executive customer expectations and relationships. Also operated in the capacity of an Infrastructure Developer and designed and implemented cloud service solutions used by Software Engineers to deploy services. Technologies: Terraform Open Source, Kubernetes, Azure, Azure DevOps",
    },
    {
      company: "PRA Group",
      link: "https://www.pragroup.com/",
      badges: ["On-site"],
      title: "Systems Engineer",
      logo: PRAGroupLogo,
      start: "2014",
      end: "2020",
      description: "Responsible and accountable for security vulnerability remediation for thousands of devices. Responsible for maintaining existing on-premises hardware for use by multiple unique business departments. Responsible for PRA Group's maiden voyage into Cloud to solve for unique business requirements. Technologies: Terraform Open Source, kOps, CircleCI, GitHub, AWS, Datadog, Atlassian, Citrix, VMware, LANDesk, Microsoft Windows Server",
    },
  ],
  certifications: [
    {
      name: "FinOps Certified Practitioner",
      issuedDate: "DEC2023",
      issuer: "FinOps Foundation",
    },
    {
      name: "Professional Cloud DevOps Engineer",
      issuedDate: "JUL2023",
      issuer: "Google Cloud",
    },
    {
      name: "Professional Cloud Architect",
      issuedDate: "JUL2023",
      issuer: "Google Cloud",
    },
    {
      name: "Certified Terraform Associate (003)",
      issuedDate: "JUL2023",
      issuer: "HashiCorp",
    },
    {
      name: "Cloud Infrastructure Foundations Associate",
      issuedDate: "FEB2022",
      issuer: "Oracle",
    },
    {
      name: "Digital Cloud Leader",
      issuedDate: "SEP2021",
      issuer: "Google Cloud",
    },
    {
      name: "Certified Cloud Practitioner",
      issuedDate: "SEP2019",
      issuer: "Amazon Web Services",
    },
    {
      name: "Associate Cloud Engineer",
      issuedDate: "NOV2018",
      issuer: "Google Cloud",
    },
    {
      name: "ITIL Foundation",
      issuedDate: "DEC2016",
      issuer: "Axelos",
    },
    {
      name: "Security+ CE",
      issuedDate: "SEP2016",
      issuer: "CompTIA",
    },
    {
      name: "Certified LANDesk Engineer",
      issuedDate: "APR2016",
      issuer: "LANDesk Software",
    },
    {
      name: "Microsoft Certified Solutions Associate",
      issuedDate: "JUL2014",
      issuer: "Microsoft",
    },

  ],
  skills: {
    "Cloud Platforms": ["AWS", "Azure", "GCP"],
    "Infrastructure-as-code": ["Terraform"],
    "Containerization and Orchestration": ["Kubernetes", "Docker", "Google Artifact Registry"],
    "Observability and Monitoring": ["Datadog", "Grafana", "PagerDuty", "Honeycomb", "Google Cloud Logging"],
    "CI/CD": ["CircleCI", "GitHub Actions"],
    "Scripting": ["Bash", "PowerShell", "Python"],
    "Programming Languages": ["Golang"],
    "Operating Systems": ["Linux (Ubuntu, Alpine, RHEL, CentOS)", "Windows Server (2008, 2012, 2016)"],
    "Identity and Access Management": ["Active Directory", "RSA", "Okta"],
    "Project Management and Methodologies": ["Agile", "Scrum", "SAFe", "Kanban"],
    "Version Control and Collaboration Tools": ["Slack", "Atlassian (Jira, Confluence)", "GitHub", "Bitbucket"],
  },
} as const;
