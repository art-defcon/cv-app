import React, { useEffect, useRef, useState } from 'react';
import { Card, Accordion } from 'react-bootstrap';
import '../styles/employment.css';

interface Employment {
  period: string;
  title: string;
  company: string;
  roles: string[];
  technologies: string[];
  methods: string[];
  achievements: string[];
}

const employmentData: Employment[] = [
  {
    period: "Aug 2018 – Jun 2025",
    title: "Practice Lead & Expert",
    company: "ALTEN Sverige AB",
    roles: [
      "Practice Lead", "Solution Architect", "Team Lead", "Product Owner", "System Owner",
      "Process Owner", "Project Manager", "Delivery Manager",
      "Change Management", "Chapter Lead", 
      "Guild Leader", "AI Initiative Leader"
    ],
    technologies: [
      "PowerBI", "SharePoint", "Python", "C/C++", "Excel", "Copilot", "Copilot Studio", 
      "Azure AI", "Office Online", "JIRA", "CRM systems", "Data modeling tools", 
      "Sales analytics platforms", "Cloud technologies", "Microservices", "RESTful",
      "JavaScript", "CSS", "IoT", "Continous Integration", "Continous Deployment", "Git",  
      "Machine Learning", "Android", "IOS", "React", "Angular", "Azure DevOps", "AWS",
      "XFT", "Cross Functional Engineering", "R&D", "Docker/Kubernetes"
    ],
    methods: [
      "Agile", "Scaled Agile Framework (SAFe)", "Prince2", "Scrum", "Data A nalytics", 
      "Stakeholder Management", "Requirements Engineering", "Project Governance", 
      "Service Area Development", "Data-driven decision making", "Quality Assurance"
    ],
    achievements: [
      "Hired as part of IT growt plan which was successful with a growth of 400 engineers within IT and embedded",
      "Spearheaded AI initiative resulting in identification of 100+ client references and 53 performance-enhancing tools, establishing ALTEN as an AI leader at international level",
      "Transformed organization from traditional reporting to data-driven decision making, enabling more strategic business choices",
      "Successfully implemented and maintained a new CRM system that was adopted by nearly 100 active managers",
      "Designed and implemented a delivery framework for ALTEN Nordic that standardized work packages and managed services",
      "Built and led four technical guilds that grew to 200+ active members, significantly enhancing knowledge sharing across the organization",
      "Created guild structure that was so successful it was adopted by ALTEN Group at an international level"
    ]
  },
  {
    period: "May 2015 – Mar 2018",
    title: "Head of Project Management Office",
    company: "Chas Visual Management",
    roles: [
      "Team Lead", "Scrum Master", "Product Owner", "Product Manager", "Chief Business Development Officer", 
      "Change Management Manager", "Presales Specialist", "Talent Management Lead"
    ],
    technologies: [
      "JIRA", "Docker", "Container", "Android", "IOS", "RESTful", "C#", "C/C++", ".NET Framework", 
      "Entities Framwork", "Protobuf", "SignalR", "NoSql", "MSSQL", "Android", "Docker/Kubernetes",
      "Continous Integration", "Continous Deployment", "Git", "Web", "React", "Angular", 
      "JavaScript", "Embedded", "open source"
    ],
    methods: [
      "Scrum", "Business Development", "Product Life Cycle Management", 
      "Change Request Management", "Rollout Strategy Development", "Talent Management"
    ],
    achievements: [
      "Supported company growth from 30 to 120 employees (300% increase) through strategic business development and talent management",
      "Developed and executed rollout strategies for \"Oden Business Intelligence\" product, expanding market reach and increasing adoption",
      "Successfully managed the product lifecycle for multiple software platforms while aligning customer requirements with available talent",
      "Implemented Android application for time reporting to Oden BI, improving efficiency of field workers",
      "Established business requirements and specifications that guided product development across multiple platforms"
    ]
  },
  {
    period: "May 2015 – Mar 2018",
    title: "Head of .Net Development",
    company: "Chas Visual Management",
    roles: [
      "Team Lead", ".Net Development Lead", "Technical Trainer", 
      "Recruitment Manager", "Software Architect", "Strategy Formulator"
    ],
    technologies: [
      "JIRA", "C#", "C/C++", ".NET Framework", "Entities Framwork", "Protobuf", "SignalR", "NoSql", 
      "MSSQL", "Windows Forms", "Android", "Continous Integration", "Continous Deployment", "Git", "Team Foundation Version Control", "Open source"
    ],
    methods: [
      "Scrum", "Talent Management", "Strategy Analysis", "Team Expansion", "Technical Leadership"
    ],
    achievements: [
      "Grew the .Net service area by 15 employees through targeted recruitment and talent development",
      "Designed and implemented technical strategies that supported the company's rapid growth",
      "Built and managed a high-performing team of .Net consultants that consistently delivered quality projects to clients",
      "Created formalized recruitment processes that improved candidate quality and retention",
      "Established technical coaching practices that accelerated consultant development and capabilities"
    ]
  },
  {
    period: "Oct 2009 - Jun 2012",
    title: "Senior Systems Engineer",
    company: "Appear Networks",
    roles: [
      "Scrum Master", "Systems Engineer", "Requirement Analyst", "Software Designer", 
      "Software Architect", "Technical Presales", "Mobile Developer", "Prototype Developer"
    ],
    technologies: [
      ".NET framwork", "C#", "C/C++", "Restfull", "TDD", "mobile first", "mobile", "ASP.Net", 
      "ORM", "Entities framwork", "Protobuf", "open source", "Git",
      "unit testing", "Work Order Management systems", "Mobile development", "Scrum", "nmock", 
      "Continous Integration", "Continous Deployment", "Windows Mobile", "Android", "Linux", "SQL", "Apache Kafka"
    ],
    methods: [
      "Scrum", "Agile", "Test Driven Design", "Prototyping"
    ],
    achievements: [
      "Successfully led the Appear Solutions Team as Scrum Master, delivering multiple mobile development projects on time",
      "Designed and implemented mobile solutions that helped organizations transition to mobile workflows",
      "Expanded company's international client base through effective technical presales and demonstrations",
      "Created prototypes that converted to full client implementations, driving business growth",
      "Developed analysis frameworks that improved client process mobilization efficiency"
    ]
  },
  {
    period: "Aug 2008 - Dec 2009",
    title: "Software Development Consultant",
    company: "Sigma Solutions",
    roles: [
      "Software Developer", "Team Consultant", "E-business Specialist", "Portal Developer"
    ],
    technologies: [
      ".NET framwork", "Restfull", "html", "JavaScript", "TDD", "ORM", "Entities framwork", "unit testing", 
      "Mobile development", "Scrum", "nmock", "Integration", "Payment Solutions",
      "Continous Integration", "Continous Deployment", "SharePoint", "Scrum", "MSSQL", 
      "Oracle","Windows Forms", "Git", "SVN", "Team Foundation Version Control"
    ],
    methods: [
      "Scrum", "Agile", "Test Driven Design", "Team Collaboration"
    ],
    achievements: [
      "Delivered multiple e-business and portal solutions that enhanced clients' digital presence",
      "Successfully transitioned between individual contributor and team member roles based on project requirements",
      "Built scalable web and mobile applications that improved client customer engagement",
      "Integrated diverse enterprise systems, reducing manual processes and increasing efficiency"
    ]
  },
  {
    period: "May 2007 - Aug 2008",
    title: "Software Developer",
    company: "RemoteX Technologies",
    roles: [
      "Software Engineer", "Agile Team Member", "Mobile Work Order Specialist", "Interation"
    ],
    technologies: [
      ".NET framwork", "C#", "Restfull", "Test Driven Design", "mobile first", "mobile", "ASP.Net", 
      "ORM", "Entities framwork", "unit testing", "Mobile Work Order Management", 
      "Mobile development", "nmock", "Continous Integration", "Continous Deployment", 
      "Windows Mobile", "MSSQL", "Entities Framework", "MSMQ", "Windows Forms", "Team Foundation Version Control"
    ],
    methods: [
      "Agile", "Scrum", "Test Driven Design", "Full Product Lifecycle Management"
    ],
    achievements: [
      "Contributed key features to RemoteX's (now Lundalogic/Lime) mobile work order management product",
      "Participated in full product lifecycle from conception to deployment, ensuring seamless delivery",
      "Built mobile workflow solutions that improved field worker productivity and reporting accuracy",
      "Implemented agile methodologies that enhanced team collaboration and product quality"
    ]
  },
  {
    period: "Oct 2006 - Aug 2007",
    title: "IT Consultant",
    company: "Self-employed",
    roles: [
      "Software Engineer", "Financial Systems Developer", "Independent Consultant"
    ],
    technologies: [
      "Fintech", "html", "JavaScript", "open source", 
      "ASP.Net", "php", "Integration", "Visma", "SVN"
    ],
    methods: [
      "Independent Project Management", "Sales Provisions Systems Development"
    ],
    achievements: [
      "Successfully delivered custom sales systems for stockbrokers that improved transaction tracking and client management",
      "Managed entire project lifecycles independently, from requirements gathering to implementation",
      "Established trusted client relationships that led to repeat business and referrals"
    ]
  },
  {
    period: "Oct 2005 - Dec 2006",
    title: "IT Consultant",
    company: "Ants",
    roles: [
      "Technical Support Consultant", "Infrastructure Specialist", "Software Support Engineer"
    ],
    technologies: [
      "IT infrastructure systems", "Software deployment tools", "SME support platforms", "Server"
    ],
    methods: [
      "Technical Support Methodology", "Infrastructure Installation Procedures"
    ],
    achievements: [
      "Provided reliable technical infrastructure support that minimized downtime for small and medium businesses",
      "Implemented software solutions that improved operational efficiency for diverse clients",
      "Resolved complex technical issues, maintaining high customer satisfaction"
    ]
  },
  {
    period: "Jan 1999 – Jun 2000",
    title: "Technical Officer",
    company: "Swedish Armed Forces",
    roles: [
      "Technical Officer", "Telecom Specialist", "Leadership Trainer"
    ],
    technologies: [
      "Military telecom systems", "Cryptographic equipment", 
      "Radio communications", "Analysis tools"
    ],
    methods: [
      "Military Leadership", "Technical Analysis", "Secure Communications"
    ],
    achievements: [
      "Successfully managed critical telecom and cryptographic systems for division-level operations",
      "Trained personnel in technical procedures, improving operational readiness",
      "Provided leadership in high-pressure situations, ensuring mission success",
      "Implemented secure communication protocols that enhanced information security"
    ]
  },
  {
    period: "May 2007 - Aug 2008",
    title: "Transceiver Production",
    company: "Ericsson",
    roles: [
      "Manufacturing Specialist", "Service Technician", "Quality Assurance Tester"
    ],
    technologies: [
      "Microwave transceivers", "Telecom equipment", 
      "Radio technology", "Production systems"
    ],
    methods: [
      "Lean Manufacturing", "Kanban", "Quality Control Processes"
    ],
    achievements: [
      "Contributed to manufacturing and quality assurance of microwave transceivers meeting strict industry standards",
      "Applied lean principles to production processes, improving efficiency and reducing waste",
      "Implemented kanban methodologies that optimized inventory management and production flow",
      "Maintained high quality standards for telecommunications equipment used in critical infrastructure"
    ]
  }
];

export default function EmploymentHistory() {
  const [activeKeys, setActiveKeys] = useState<string[]>([]);
  const accordionRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    // Set up intersection observer to detect when accordion items are in view
    const observers: IntersectionObserver[] = [];
    
    accordionRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                // When element is in view, add its key to active keys after a slight delay
                setTimeout(() => {
                  setActiveKeys((prevKeys) => {
                    if (!prevKeys.includes(index.toString())) {
                      return [...prevKeys, index.toString()];
                    }
                    return prevKeys;
                  });
                }, index * 200);
              }
            });
          },
          {
            root: null,
            rootMargin: '0px',
            threshold: 0.3, // Trigger when 30% of the item is visible
          }
        );
        
        observer.observe(ref);
        observers.push(observer);
      }
    });
    
    // Clean up observers on unmount
    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <Card className="cv-card">
      <h3 className="cv-card-title">Employment History</h3>
      
      <Accordion activeKey={activeKeys}>
        {employmentData.map((job, index) => (
          <Accordion.Item 
            eventKey={index.toString()} 
            key={index} 
            className="mb-3" 
            ref={(el) => {
              accordionRefs.current[index] = el;
            }}
          >
            <Accordion.Header>
              <div>
                <strong>{job.period}</strong>: {job.title}, {job.company}
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <div className="job-details-container">
                <div className="job-section mb-3">
                  <h5>Roles</h5>
                  <div className="tag-container">
                    {job.roles.map((role, idx) => (
                      <span key={idx} className="role-tag">{role}</span>
                    ))}
                  </div>
                </div>
                
                <div className="job-section mb-3">
                  <h5>Technologies</h5>
                  <div className="tag-container">
                    {job.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="job-section mb-3">
                  <h5>Methods</h5>
                  <div className="tag-container">
                    {job.methods.map((method, idx) => (
                      <span key={idx} className="method-tag">{method}</span>
                    ))}
                  </div>
                </div>
                
                <div className="job-section">
                  <h5>Achievements</h5>
                  <ul>
                    {job.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Card>
  );
}
