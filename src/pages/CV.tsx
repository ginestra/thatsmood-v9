
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Briefcase, GraduationCap, Award, Download, Users } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const CV = () => {
  return (
    <Layout>
      <section className="container max-w-4xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <div>
            <h1 className="text-4xl font-bold text-brand-dark dark:text-brand-yellow mb-2">Curriculum Vitae</h1>
            <p className="text-gray-600 dark:text-gray-300">UX Designer with 10+ years of experience creating accessible digital products</p>
          </div>
          <a href="/assets/docs/gferraro-cv-2025.pdf" className="button">
          <Button className="flex items-center gap-2 bg-brand-dark hover:bg-black text-white">
            <Download className="h-4 w-4" />
            Download CV
          </Button>
          </a>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm">
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 flex items-center dark:text-white">
              <Briefcase className="mr-2 h-5 w-5 text-brand-dark dark:text-brand-yellow" />
              Work Experience
            </h2>
            <Separator className="mb-6 dark:bg-gray-700" />
            
            <div className="space-y-8">
              <div>
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <h3 className="text-xl font-medium dark:text-white">Lead UX Designer</h3>
                  <span className="text-gray-500 dark:text-gray-400">2023 - Present</span>
                </div>
                <p className="text-brand-dark dark:text-gray-200 font-medium mb-2"><a href="//proda.ai">PRODA</a>, London, UK</p>
                <ul className="list-disc list-outside text-gray-600 dark:text-gray-300 space-y-1">
                  <li>Leading UX design for the company's flagship product, improving user satisfaction</li>
                  <li>Conducting user research and usability testing</li>
                  <li>Contributing to accessibility improvements</li>
                  <li>Implementing design processes to embed iterative design cycles alongside Product and Engineering</li>
                  <li>CI/CD</li>
                  <li>Presenting design concepts and research findings to key stakeholders</li>
                  <li>Mentoring junior designers and created design system</li>
                  <li>Recruiting and leading the UX team</li>
                </ul>
              </div>
              
              <div>
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <h3 className="text-xl font-medium dark:text-white">Senior UX/UI Designer</h3>
                  <span className="text-gray-500 dark:text-gray-400">2013-2023</span>
                </div>
                <p className="text-brand-dark dark:text-gray-200 font-medium mb-2"><a href="//kdl.kcl.ac.uk">King's Digital Lab</a>, King's College London, London, UK</p>
                <ul className="list-disc list-outside text-gray-600 dark:text-gray-300 space-y-1">
                  <li>Responsible for the design team, its workflow and workload management</li>
                  <li>Involvement in full design workflow, from discovery to evolutionary development, to deployment and post project. From conceptual design, content maps, usability testing to front-end development</li>
                  <li>Collaborated with development teams to ensure design implementation accuracy</li>
                  <li>Contributes to the expansion of the design team</li>
                </ul>
                <p className="text-brand-dark dark:text-gray-200 font-medium mb-2">Selected Publications</p>
                <ul className="list-disc list-outside text-gray-600 dark:text-gray-300 space-y-1">
                  <li>The Community of the Realm in Scotland (<a href="//cotr.ac.uk/">cotr.ac.uk</a>) - Supported by AHRC</li>
                  <li>The Value of French (<a href="//tvof.ac.uk/">tvof.ac.uk</a>) - Supported by the European Research Council</li>
                  <li>Taming the Complexity of the Law, exploratory work (<a href="//kingsdigitallab.github.io/tcl/visualization/">kingsdigitallab.github.io/tcl</a>) - Supported by the King’s Together Multi &amp; Interdisciplinary Research Scheme</li>
                  <li>The Redress of the Past: Historical Pageants in Britain (<a href="//historicalpageants.ac.uk/">historicalpageants.ac.uk</a>) - Supported by AHRC</li>
                  <li>Chopin Online (<a href="//chopinonline.ac.uk/">chopinonline.ac.uk</a>) - Supported by The Andrew W. Mellon Foundation</li>
                </ul>
                <p className="text-brand-dark dark:text-gray-200 font-medium mb-2">Other Publications</p>
                <ul className="list-disc list-outside text-gray-600 dark:text-gray-300 space-y-1">
                  <li>G. Ferraro, A. Sichani, “Design as part of the plan: sustainability in digital editing projects”, <em>Digital Scholarly Editions as Interfaces</em>, 2018 IDE, pp. 83-105. ISBN 978-3-7481-0925-9</li>
                  <li>G. Ferraro, “Visualizing Dante Alighieri’s Divine Comedy”, 2018 -&nbsp; 
                  <a href="//ginestra.github.io/dante-visualised/">ginestra.github.io/dante-visualised</a></li>
                </ul>
              </div>
            </div>
            <div>
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-xl font-medium dark:text-white">Online Projects Officer</h3>
                <span className="text-gray-500 dark:text-gray-400">2008-2011</span>
              </div>
              <p className="text-brand-dark dark:text-gray-200 font-medium mb-2"><a href="//ravensbourne.ac.uk">Ravensbourne</a>, London, UK</p>
              <ul className="list-disc list-outside text-gray-600 dark:text-gray-300 space-y-1">
                <li>Designing and maintaining the main website</li>
                <li>CMS admin</li>
                <li>Creating micro-sites for events</li>
                <li>Writing blog posts</li>
                <li>Curating online campaigns</li>
                <li>Planning web communication and social media strategy</li>
                <li>Generating analytic reports</li>
              </ul>
            </div>
            <div>
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-xl font-medium dark:text-white">Freelance, Creative Web Designer</h3>
                <span className="text-gray-500 dark:text-gray-400">2002-Present</span>
              </div>

              <div className="flex flex-wrap gap-2">
                  {['Art direction', 'Graphic Design', 'Corporate Identity', 'Communication Strategy'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-brand-light dark:bg-gray-700 rounded-full text-sm dark:text-gray-200">
                      {skill}
                    </span>
                  ))}
              </div>
              <p>&nbsp;</p>
              <p className="text-brand-dark dark:text-gray-200 font-medium mb-2">A selection of Companies I worked with:</p>
              <ul className="list-disc list-outside text-gray-600 dark:text-gray-300 space-y-1">
                <li>Lyhn Ltd, London, UK</li>
                <li>MyMarketingMix, London, UK</li>
                <li>Blustudio/TBWA Italia, Milano, Italy</li>
                <li>Sabdesign, Milano, Italy</li>
                <li>Gaia Comunicazione Srl, Stradella (PV), Italy</li>
                <li>Factorygroup, Milano, Italy</li>
                <li>FisioSport, Pavia, Italy</li>
              </ul>
            </div>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 flex items-center dark:text-white">
              <GraduationCap className="mr-2 h-5 w-5 text-brand-dark dark:text-brand-yellow" />
              Education
            </h2>
            <Separator className="mb-6 dark:bg-gray-700" />
            
            <div className="space-y-6">
              <div>
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <h3 className="text-xl font-medium dark:text-white">MSc Computer Science</h3>
                  <span className="text-gray-500 dark:text-gray-400">2018</span>
                </div>
                <p className="text-brand-dark dark:text-gray-200 font-medium">Birkbeck, University of London, UK</p>
              </div>
              
              <div>
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <h3 className="text-xl font-medium dark:text-white">Bachelor's in Graphic Design</h3>
                  <span className="text-gray-500 dark:text-gray-400">2001</span>
                </div>
                <p className="text-brand-dark dark:text-gray-200 font-medium">Istituto Europeo di Design (IED), formerly Istituto Superiore di Comunicazione (ISC), Milano, Italy</p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center dark:text-white">
              <Award className="mr-2 h-5 w-5 text-brand-dark dark:text-brand-yellow" />
              Skills & Training
            </h2>
            <Separator className="mb-6 dark:bg-gray-700" />
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium mb-4 dark:text-white">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {['User Research', 'Wireframing', 'Prototyping', 'Usability Testing', 
                    'Information Architecture', 'Figma', 'Adobe XD', 'Sketch', 
                    'Accessibility', 'Design Systems', 'HTML/CSS'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-brand-light dark:bg-gray-700 rounded-full text-sm dark:text-gray-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-4 dark:text-white">Training</h3>
                <p className="text-brand-dark dark:text-gray-200 font-medium mb-2">I constantly keep myself updated by attending conferences, short courses both online and in person on the latest technologies and methodologies.
                I regularly attend meet-ups to keep my finger on the tech industry’s pulse.</p>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li></li>
                  <li className="flex items-start">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow mt-2 mr-2"></span>
                    <div>
                      <p className="font-medium text-brand-dark dark:text-gray-200">Practical Accessibility (non-credited)</p>
                      <p className="text-sm dark:text-gray-400"><a href="//practical-accessibility.today/">practical-accessibility.today</a>, online, 2023</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow mt-2 mr-2"></span>
                    <div>
                      <p className="font-medium text-brand-dark dark:text-gray-200">User Experience & Interaction Design</p>
                      <p className="font-medium text-brand-dark dark:text-gray-200">for AR/VR/MR/XR (non-credidted)</p>
                      <p className="text-sm dark:text-gray-400">University of Michigan, Coursera, 2022</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow mt-2 mr-2"></span>
                    <div>
                      <p className="font-medium text-brand-dark dark:text-gray-200">AgilePM Foundation Certificate</p>
                      <p className="text-sm dark:text-gray-400">APMG International, London, UK, 2016</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow mt-2 mr-2"></span>
                    <div>
                      <p className="font-medium text-brand-dark dark:text-gray-200">2005 PHP Shortcourse</p>
                      <p className="text-sm dark:text-gray-400">EMIT Feltrinelli / Politecnico di Milano, Italy, 2005</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 flex items-center dark:text-white">
              <Users className="mr-2 h-5 w-5 text-brand-dark dark:text-brand-yellow" />
              Community
            </h2>
            <Separator className="mb-6 dark:bg-gray-700" />
            
            <div className="space-y-6">
              <div>
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <h3 className="text-xl font-medium dark:text-white">London Web Standards, UK</h3>
                  <span className="text-gray-500 dark:text-gray-400">2013-Present</span>
                </div>
                <p className="text-brand-dark dark:text-gray-200 font-normal"><a href="//londonwebstandards.org/">London Web Standards</a> brings together web professionals who are working for a better web. Bi-monthly meetups provide them with an opportunity to teach, inspire, learn, network and debate.<br />
                As a group of volunteers, we also organise <a href="//stateofthebrowser.com/">State of the Browser</a>, a yearly, one-track, conference.
                </p>
              </div>
            </div>
          </section>
          <section className="mb-10">
            <Separator className="mb-6 dark:bg-gray-700" />
            
            <div className="space-y-6">
              <div>
                <p className="text-brand-dark dark:text-gray-200 font-normal">
                  I confirm that I am eligible to live and work in the UK.
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </Layout>
  );
};

export default CV;
