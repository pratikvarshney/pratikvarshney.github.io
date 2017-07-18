var app = angular.module("main", []);
	
app.value('data', {
	title: "Pratik Varshney",
	name: "Pratik Varshney",
	subtitle: "University of Southern California",
	contact: [
		{
      href: "https://www.linkedin.com/in/varshneypratik",
      tooltip: "LinkedIn",
      iconclass: "fa fa-linkedin-square"
    },
		{
      href: "mailto:pvarshne@usc.edu",
      tooltip: "Email",
      iconclass: "fa fa-envelope"
    },
		{
      href: "https://bitbucket.org/pratikvarshney",
      tooltip: "Bitbucket",
      iconclass: "fa fa-bitbucket-square"
    }
	],
  section: {
    education: {
      id: "education",
      title: "Education",
      contentrow: [
        {
          left: {
            university: "University of Southern California",
            degree: "Master of Science, Computer Science",
            date: "August 2016 - May 2018",
            courses: [
              "Analysis of Algorithms",
              "Foundations of Artificial Intelligence",
              "Applied Natural Language Processing",
              "Information Retrieval and Web Search Engines"
            ],
            iconclass: "fa fa-university",
          },
          right: {
            university: "Aligarh Muslim University",
            degree: "Bachelor of Technology, Computer Engineering",
            date: "August 2011 - June 2015",
            courses: [
              "Algorithm and Data Structure",
              "Artificial Intelligence &amp; Neural Networks",
              "Compiler Design",
              "Computer Architecture",
              "Computer Graphics",
              "Computer Networks",
              "Database Management System",
              "Design and Analysis of Algorithm",
              "Digital Electronics",
              "Distributed &amp; Parallel Systems",
              "Embedded Systems",
              "Higher Mathematics",
              "Image Processing",
              "Logic Theory &amp; Computer Organization",
              "MATLAB for Scientist &amp; Engineers",
              "Microprocessor Theory and Applications",
              "Mobile Computing",
              "Multimedia Technologies",
              "Object Oriented Programming",
              "Operating Systems",
              "Soft Computing",
              "Software Engineering",
              "Theory of Computation"
            ],
            iconclass: "fa fa-graduation-cap",
          }
        }
      ]
    },
    skills:{
      id: "skills",
      title: "Technical Skills",
      contentrow: [
        {
          left: {
            iconclass: "fa fa-code",
            iconsize: "90",
            subtitle: "Programming Languages",
            lang: [
              "C",
              "C++",
              "JAVA",
              "MATLAB",
              "Node.js",
              "Python",
              "Assembly",
              "R"
            ]
          },
          right: {
            iconclass: "fa fa-globe",
            iconsize: "110",
            subtitle: "Web Technologies experience",
            lang: [
              "HTML",
              "CSS",
              "JavaScript",
              "AJAX",
              "PHP",
              "JSP",
              "jQuery",
              "RESTful"
            ]
          }
        },
        {
          left: {
            iconclass: "fa fa-industry",
            iconsize: "70",
            subtitle: "Industry Level Experience",
            lang: [
              "SpringMVC",
              "ApacheMINA",
              "NGINX",
              "Elasticsearch"
            ]
          },
          right: {
            iconclass: "fa fa-desktop",
            iconsize: "70",
            subtitle: "Operating Systems",
            lang: [
              "Windows",
              "Linux",
              "Ubuntu",
              "Fedora"
            ]
          }
        },
        {
          left: {
            iconclass: "fa fa-database",
            iconsize: "80",
            subtitle: "Databases",
            lang: [
              "SQL",
              "NoSQL",
              "Aerospike",
              "Redis"
            ]
          },
          right: {
            iconclass: "fa fa-gear",
            iconsize: "100",
            subtitle: "Tools",
            lang: [
              "Git",
              "Vim",
              "BASH",
              "Qt"
            ]
          }
        }
      ]
    },
    awards: {
      id: "awards",
      title: "Awards",
      iconclass: "fa fa-trophy",
      contentrow: [
        "Won the 'LA Hacks Top 4 - 11' award out of 150+ Teams in LA Hacks 2017 held at UCLA. (2017)",
        "Won the 'Most Viable Startup Hack' award at TrojanHacks 2.0 held at University of Southern California. (2017)",
        "Awarded 1st prize in Gang Wars (2-Player turn based game) AI Agent Competition against 61 agents held at USC. (2016)",
        "Winner of BlackBerry 10 App Challenge organized by Devworx.. Won BlackBerry Z10 Smartphone and Playbook. (2013)"
      ]
    },
    extra: {
      id: "extra",
      title: "Extra Curricular",
      iconclass: "fa fa-paperclip",
      contentrow: [
        "Winner of BlackBerry 10 App Challenge organized by Devworx in year 2013. Won BlackBerry Z10 Smartphone and Playbook.",
        "Developed websites: 'pramodjewellers.com', 'thetechnocratz.com', 'zarf14.com' (defunct), 'projectinminds.com' (defunct).",
        "Coordinated a Workshop on Ethical Hacking &amp; Cyber Security conducted by Wegilant Net Solutions Pvt. Ltd., Mumbai in association with Techfest 2013, IIT Bombay held at ZHCET, AMU.",
        "Organized Webuild (web development event), BlogRush (blogging event) in paradigm-14 and CODEZ (coding event) in ZARF-14.",
        "Member of ZHCET student's portal, Google Student's Club (2014) - AMU, ACM Student's Chapter - AMU, AMU Roboclub.",
        "Helped juniors to improve their programming skills via a student's group, known as Programmer's forum.",
        "Presented the idea of '3D designing using Gestures' in Novanate (Idea presentation Competition held in January, 2013)."
      ]
    }
  }
});

app.controller("MainController", function($scope, data){
	$scope.data = data;
});