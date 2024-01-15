import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ConsultlyLogo,
  EvercastLogo,
  GreyshoreLogo,
  Howdy,
  JarockiMeLogo,
  ThePentadGroupLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  PRAGroupLogo,
  DroneUpLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Mark Bennett",
  initials: "MB",
  location: "Virginia Beach, Virginia, USA",
  locationLink: "https://www.google.com/maps/place/Wrocław",
  about:
    "Senior Platform Engineer focused on building real self service solutions with productive automation that improves developer experience",
  summary:
    "As a Senior Platform Engineer, I have successfully designed and implemented cloud solutions for use in Production. I lead teams effectively and with integrity, providing mentoring and enable opportunities to help people grow. Currently, I work mostly with Terraform, Kubernetes, Google Cloud Platform, and CircleCI. I have many years of experience working in the Technology arena with personal and professional projects.",
  avatarUrl: "https://avatars.githubusercontent.com/u/44004430?v=4",
  personalWebsiteUrl: "https://systemward.com",
  contact: {
    email: "marksg1mail@gmail.com",
    tel: "+48530113502",
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
      title: "Senior Platform Engineer",
      logo: DroneUpLogo,
      start: "2022",
      end: "Current",
      description:
        "Design and implement tools and cloud solutions to support software engineers' ability to create and run their own infrastructure. Technologies: Terraform Cloud, Kubernetes, Google Cloud Platform, CircleCI, Docker, GitHub, Datadog, Honeycomb, Atlassian",
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
      badges: [On-site],
      title: "Systems Engineer",
      logo: PRAGroupLogo,
      start: "2014",
      end: "2020",
      description: "Responsible and accountable for security vulnerability remediation for thousands of devices. Responsible for maintaining existing on-premises hardware for use by multiple unique business departments. Responsible for PRA Group's maiden voyage into Cloud to solve for unique business requirements. Technologies: Terraform Open Source, kOps, CircleCI, GitHub, AWS, Datadog, Atlassian, Citrix, VMware, LANDesk, Microsoft Windows Server",
    },
  ],
  skills: [
    "Terraform",
    "Kubernetes",
    "GCP",
    "CircleCI",
    "Azure",
    "Azure DevOps",
    "AWS",
    "Bash",
    "Honeycomb",
    "Datadog",
    "Docker",
    "Git",
    "GitHub",
    "LANDESK",
  ],
} as const;
